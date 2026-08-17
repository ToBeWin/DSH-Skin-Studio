const { app, BrowserWindow } = require('electron');
const { writeFileSync } = require('node:fs');

const args = process.argv.slice(2).filter((value) => value !== '--');
const [url, output] = args;
if (!url || !output) throw new Error('Usage: electron capture-skin-studio.cjs <url> <output.png>');

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const clickText = (window, labels) => window.webContents.executeJavaScript(`(() => {
  const labels = ${JSON.stringify(labels)};
  const candidate = [...document.querySelectorAll('button, [role="button"]')]
    .find((element) => labels.some((label) => element.textContent.trim() === label || element.textContent.includes(label)));
  if (!candidate) return false;
  candidate.click();
  return true;
})()`);

app.whenReady().then(async () => {
  const errors = [];
  const window = new BrowserWindow({ show: false, width: 1440, height: 1040 });
  window.webContents.on('console-message', (_event, level, message) => {
    // Electron emits this development-only warning for every local page when
    // its test BrowserWindow has no CSP. It is unrelated to the Harness or
    // this plugin, and packaged DSH does not show it.
    if (level >= 2 && !message.includes('Electron Security Warning')) errors.push(message);
  });
  await window.loadURL(url);
  await delay(900);
  await clickText(window, ['Continue', '继续']);
  await delay(350);
  if (!await clickText(window, ['Settings', '设置'])) throw new Error('Settings entry was not found');
  await delay(500);
  const studio = await window.webContents.executeJavaScript(`document.body.innerText.includes('Skin Studio') || document.body.innerText.includes('皮肤工作室')`);
  if (!studio) throw new Error('Skin Studio was not rendered in General settings');
  const skinCardCount = await window.webContents.executeJavaScript(`document.querySelectorAll('.tobewin-skin-grid .tobewin-skin-card').length`);
  if (skinCardCount !== 11) throw new Error(`Expected 10 built-in skins plus the default card, received ${skinCardCount}`);
  const canvasLayout = await window.webContents.executeJavaScript(`(() => {
    const preview = document.querySelector('.tobewin-skin-canvas-image')?.getBoundingClientRect();
    const fields = document.querySelector('.tobewin-skin-canvas-fields')?.getBoundingClientRect();
    if (!preview || !fields) return { ok: false, reason: 'Custom canvas layout was not rendered' };
    return {
      ok: preview.right <= fields.left || preview.bottom <= fields.top,
      previewRight: preview.right,
      fieldsLeft: fields.left,
      previewBottom: preview.bottom,
      fieldsTop: fields.top,
    };
  })()`);
  if (!canvasLayout.ok) throw new Error(`Canvas preview overlaps the controls: ${JSON.stringify(canvasLayout)}`);
  if (!await clickText(window, ['Neon Tokyo', '霓虹东京'])) throw new Error('Neon Tokyo skin card was not found');
  await delay(350);
  const state = await window.webContents.executeJavaScript(`({
    background: getComputedStyle(document.body).backgroundColor,
    dark: document.body.hasAttribute('data-ds-dark-theme'),
    active: document.body.innerText.includes('Active') || document.body.innerText.includes('当前使用'),
  })`);
  if (state.background !== 'rgb(21, 13, 41)' || !state.dark || !state.active) {
    throw new Error(`Skin did not apply: ${JSON.stringify(state)}`);
  }
  const customCanvas = await window.webContents.executeJavaScript(`(() => {
    const inputs = [...document.querySelectorAll('.tobewin-skin-canvas input[type="color"]')];
    if (inputs.length < 4) return { ok: false, reason: 'Custom canvas color inputs were not rendered' };
    const setValue = (input, value) => {
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
      setter.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    };
    setValue(inputs[0], '#102030');
    const upload = document.querySelector('.tobewin-skin-canvas input[type="file"]');
    const art = '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1200" viewBox="0 0 1600 1000"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101b45"/><stop offset=".52" stop-color="#7c3aed"/><stop offset="1" stop-color="#ec4899"/></linearGradient><filter id="b"><feGaussianBlur stdDeviation="42"/></filter></defs><rect width="1600" height="1000" fill="url(#g)"/><circle cx="1280" cy="220" r="270" fill="#38bdf8" opacity=".78" filter="url(#b)"/><circle cx="350" cy="830" r="330" fill="#fbbf24" opacity=".62" filter="url(#b)"/><path d="M0 620 Q400 360 790 620 T1600 540 V1000 H0Z" fill="#090a28" opacity=".42"/></svg>';
    const file = new File([art], 'custom-canvas.svg', { type: 'image/svg+xml' });
    Object.defineProperty(upload, 'files', { configurable: true, value: [file] });
    upload.dispatchEvent(new Event('change', { bubbles: true }));
    return { ok: true };
  })()`);
  if (!customCanvas.ok) throw new Error(customCanvas.reason);
  await delay(250);
  if (!await clickText(window, ['Adjust framing', '调整取景'])) throw new Error('Adjust framing button was not found after image upload');
  await delay(180);
  const cropFrame = await window.webContents.executeJavaScript(`(() => {
    const frame = document.querySelector('.tobewin-skin-crop-frame');
    const handles = document.querySelectorAll('.tobewin-skin-crop-handle');
    return { frame: Boolean(frame), handles: handles.length };
  })()`);
  if (!cropFrame.frame || cropFrame.handles !== 4) throw new Error(`Expected one interactive crop frame with four corners, received ${JSON.stringify(cropFrame)}`);
  if (!await clickText(window, ['Done', '完成取景'])) throw new Error('Crop dialog completion button was not found');
  await delay(120);
  if (!await clickText(window, ['Apply custom skin', '应用自定义皮肤'])) throw new Error('Custom skin apply button was not found');
  await delay(350);
  const customState = await window.webContents.executeJavaScript(`({
    background: getComputedStyle(document.body).backgroundColor,
    wallpaper: document.querySelector('.tobewin-skin-wallpaper'),
    image: getComputedStyle(document.querySelector('.tobewin-skin-wallpaper')).backgroundImage,
    size: getComputedStyle(document.querySelector('.tobewin-skin-wallpaper')).backgroundSize,
    position: getComputedStyle(document.querySelector('.tobewin-skin-wallpaper')).backgroundPosition,
    active: document.body.innerText.includes('Custom skin is active') || document.body.innerText.includes('自定义皮肤正在使用'),
  })`);
  if (!customState.background.includes('0, 0, 0, 0') || !customState.wallpaper || !customState.image.includes('data:image/svg+xml') || !customState.size.includes('100%') || !customState.position.includes('50% 50%') || !customState.active) {
    throw new Error(`Custom canvas did not apply: ${JSON.stringify(customState)}`);
  }
  window.webContents.sendInputEvent({ type: 'keyDown', keyCode: 'ESC' });
  window.webContents.sendInputEvent({ type: 'keyUp', keyCode: 'ESC' });
  await delay(300);
  if (errors.length > 0) throw new Error(`Browser console errors: ${errors.join('\n')}`);
  const image = await window.webContents.capturePage();
  writeFileSync(output, image.toPNG());
  await window.destroy();
  app.quit();
});
