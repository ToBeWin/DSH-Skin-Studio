window.__ModuleLoader__.load({
  id: '@tobewin/dsh-skin-studio',
  factory: (require) => {
    const React = require('react');
    const { jsx, jsxs } = require('react/jsx-runtime');
    const { Button, Modal } = require('@deepseek-ai/dsh-client-ui-primitives');

    const NS = 'settings.tobewinSkinStudio';
    const storageKey = '@tobewin/dsh-skin-studio/selected-skin/v1';
    const canvasDbName = '@tobewin/dsh-skin-studio';
    const canvasStoreName = 'custom-canvas';
    const canvasRecordKey = 'current';
    const customSkinId = 'tobewin-custom-canvas';
    const customLayerSource = '@tobewin/dsh-skin-studio/custom-canvas';
    const inject = ['slots', 'locale', 'theme'];

    const zh = {
      'title': '皮肤工作室',
      'subtitle': '为 DeepSeek Harness 换上一套新外观。皮肤只使用公开主题接口，可随时切回默认外观。',
      'active': '当前使用',
      'apply': '应用皮肤',
      'restore': '使用默认外观',
      'default.name': '默认外观',
      'default.detail': '跟随 Harness 的浅色、深色或系统设置',
      'aurora.name': '极光流光',
      'aurora.detail': '沉静深海与青绿极光',
      'neon.name': '霓虹东京',
      'neon.detail': '赛博紫、洋红与电光蓝',
      'sunset.name': '日落珊瑚',
      'sunset.detail': '暖白、珊瑚与琥珀色调',
      'arctic.name': '北境棱镜',
      'arctic.detail': '冰川白、靛蓝与清透青色',
      'ink.name': '月墨深蓝',
      'ink.detail': '墨黑、群青与冷冽蓝光',
      'matcha.name': '抹茶花园',
      'matcha.detail': '柔和草绿、奶白与清新薄荷',
      'rose.name': '蔷薇水晶',
      'rose.detail': '雾粉、紫晶与轻盈玫瑰色',
      'solar.name': '日冕炽焰',
      'solar.detail': '深曜石、琥珀与熔岩橙光',
      'mist.name': '北欧晨雾',
      'mist.detail': '雾灰、暖白与克制蓝调',
      'cobalt.name': '钴蓝潮汐',
      'cobalt.detail': '深钴蓝、青蓝与海面反光',
      'canvas.title': '自定义画布',
      'canvas.subtitle': '上传一张本地图片，并用你的配色把它变成专属全局皮肤。',
      'canvas.background': '背景底色',
      'canvas.surface': '表面颜色',
      'canvas.accent': '强调颜色',
      'canvas.text': '文字颜色',
      'canvas.mode': '基底模式',
      'canvas.light': '浅色',
      'canvas.dark': '深色',
      'canvas.image': '背景图片',
      'canvas.strength': '图片氛围强度',
      'canvas.strengthHint': '更高的强度会让图片在全局背景中更明显。',
      'canvas.crop': '图片取景',
      'canvas.cropHint': '拖动裁剪框移动位置，拖动四个角调整裁剪大小。框外区域不会出现在壁纸中。',
      'canvas.adjustCrop': '调整取景',
      'canvas.cropDialogTitle': '调整图片取景',
      'canvas.cropDialogDescription': '拖动 16:9 裁剪框选择保留区域；拖动四角控制点调整取景大小。框外区域不会出现在壁纸中。',
      'canvas.cropDialogDone': '完成取景',
      'canvas.cropDialogClose': '关闭取景编辑器',
      'canvas.resetFrame': '重置取景',
      'canvas.zoom': '缩放',
      'canvas.horizontal': '水平位置',
      'canvas.vertical': '垂直位置',
      'canvas.upload': '上传图片',
      'canvas.replace': '更换图片',
      'canvas.remove': '移除图片',
      'canvas.none': '尚未选择图片',
      'canvas.apply': '应用自定义皮肤',
      'canvas.active': '自定义皮肤正在使用',
      'canvas.imageError': '请选择小于 5 MB 的图片文件。',
      'canvas.imageUnsupported': '这张图片无法在当前桌面端显示。请使用 PNG、JPEG、WebP、GIF、AVIF 或 SVG 图片。',
      'canvas.imageGuidance': '任意比例均可上传。选择“调整取景”后，可在独立的 16:9 画布中决定壁纸范围。',
      'canvas.imageCropNotice': '这张图片较小或比例特殊，仍可使用；建议在左侧画布中调整取景，避免主体被裁切。',
      'note': '选择即时生效。自定义图片和配色仅保存在此浏览器；关闭或卸载插件后会自动恢复 Harness 的默认主题。',
    };

    const en = {
      'title': 'Skin Studio',
      'subtitle': 'Give DeepSeek Harness a new look. Skins use the public theme API and you can restore the default appearance at any time.',
      'active': 'Active',
      'apply': 'Apply skin',
      'restore': 'Use default appearance',
      'default.name': 'Default appearance',
      'default.detail': 'Follow the Harness light, dark, or system setting',
      'aurora.name': 'Aurora Flow',
      'aurora.detail': 'Quiet deep sea with teal aurora',
      'neon.name': 'Neon Tokyo',
      'neon.detail': 'Cyber violet, magenta, and electric blue',
      'sunset.name': 'Sunset Coral',
      'sunset.detail': 'Warm white, coral, and amber',
      'arctic.name': 'Arctic Prism',
      'arctic.detail': 'Glacier white with indigo and clear cyan',
      'ink.name': 'Moonlit Ink',
      'ink.detail': 'Ink black, ultramarine, and cool blue glow',
      'matcha.name': 'Matcha Garden',
      'matcha.detail': 'Soft leaf green, cream, and fresh mint',
      'rose.name': 'Rose Quartz',
      'rose.detail': 'Misty pink, amethyst, and airy rose tones',
      'solar.name': 'Solar Flare',
      'solar.detail': 'Deep obsidian, amber, and lava-orange glow',
      'mist.name': 'Nordic Mist',
      'mist.detail': 'Fog gray, warm white, and restrained blue',
      'cobalt.name': 'Cobalt Tide',
      'cobalt.detail': 'Deep cobalt, cyan blue, and ocean reflections',
      'canvas.title': 'Custom Canvas',
      'canvas.subtitle': 'Upload a local image and combine it with your own palette for a personal application skin.',
      'canvas.background': 'Background',
      'canvas.surface': 'Surface',
      'canvas.accent': 'Accent',
      'canvas.text': 'Text',
      'canvas.mode': 'Base mode',
      'canvas.light': 'Light',
      'canvas.dark': 'Dark',
      'canvas.image': 'Background image',
      'canvas.strength': 'Image atmosphere',
      'canvas.strengthHint': 'A higher value makes the image more visible in the application background.',
      'canvas.crop': 'Image framing',
      'canvas.cropHint': 'Drag the crop frame to move it. Drag any corner to resize it. The shaded area will not appear in the wallpaper.',
      'canvas.adjustCrop': 'Adjust framing',
      'canvas.cropDialogTitle': 'Adjust image framing',
      'canvas.cropDialogDescription': 'Drag the 16:9 crop frame to choose what to keep, then drag any corner to resize it. The shaded area will not appear in the wallpaper.',
      'canvas.cropDialogDone': 'Done',
      'canvas.cropDialogClose': 'Close framing editor',
      'canvas.resetFrame': 'Reset framing',
      'canvas.zoom': 'Zoom',
      'canvas.horizontal': 'Horizontal position',
      'canvas.vertical': 'Vertical position',
      'canvas.upload': 'Upload image',
      'canvas.replace': 'Replace image',
      'canvas.remove': 'Remove image',
      'canvas.none': 'No image selected',
      'canvas.apply': 'Apply custom skin',
      'canvas.active': 'Custom skin is active',
      'canvas.imageError': 'Choose an image smaller than 5 MB.',
      'canvas.imageUnsupported': 'This image cannot be displayed by the current desktop runtime. Use PNG, JPEG, WebP, GIF, AVIF, or SVG instead.',
      'canvas.imageGuidance': 'Any aspect ratio works. Choose Adjust framing to set the final wallpaper crop in a dedicated 16:9 canvas.',
      'canvas.imageCropNotice': 'This image is small or has an unusual aspect ratio. You can still use it; adjust the framing on the left to keep the subject visible.',
      'note': 'Changes apply instantly. Custom images and colors stay in this browser; disabling or removing this plugin restores the Harness default theme.',
    };

    const skins = [
      {
        id: 'tobewin-aurora-flow', key: 'aurora', colorScheme: 'dark',
        preview: ['#071b22', '#143b43', '#22dfc0', '#80ffd6'],
        tokens: {
          '--dsw-alias-bg-base': '#071b22', '--dsw-alias-bg-layer-1': '#0c252d', '--dsw-alias-bg-layer-2': '#10323a', '--dsw-alias-bg-overlay': '#133a43',
          '--dsw-alias-border-l1': '#255762', '--dsw-alias-border-l2': '#34707a', '--dsw-alias-brand-primary': '#25d9bd', '--dsw-alias-label-primary': '#e8fffb',
          '--dsw-alias-label-secondary': '#abd0cb', '--dsw-alias-state-business-primary': '#25d9bd', '--dsw-alias-state-business-secondary': '#133f46',
          '--dsw-alias-state-business-tertiary': '#13343c', '--dsw-alias-interactive-bg-hover': '#19444d', '--dsw-specific-sidebar-fill': '#0a2027',
          '--dsw-alias-state-success-primary': '#55e6a6', '--dsw-alias-state-warn-primary': '#ffc766', '--dsw-alias-state-error-primary': '#ff8294',
          '--tobewin-skin-background': 'radial-gradient(circle at 76% 4%, rgba(37, 217, 189, .18), transparent 28%), radial-gradient(circle at 15% 98%, rgba(66, 139, 255, .14), transparent 33%)',
        },
      },
      {
        id: 'tobewin-neon-tokyo', key: 'neon', colorScheme: 'dark',
        preview: ['#150d29', '#2a1648', '#f244ba', '#7e8cff'],
        tokens: {
          '--dsw-alias-bg-base': '#150d29', '--dsw-alias-bg-layer-1': '#20113a', '--dsw-alias-bg-layer-2': '#2a1648', '--dsw-alias-bg-overlay': '#342056',
          '--dsw-alias-border-l1': '#553678', '--dsw-alias-border-l2': '#724b98', '--dsw-alias-brand-primary': '#f244ba', '--dsw-alias-label-primary': '#fff4fd',
          '--dsw-alias-label-secondary': '#d5c4e6', '--dsw-alias-state-business-primary': '#e94eb9', '--dsw-alias-state-business-secondary': '#3e215e',
          '--dsw-alias-state-business-tertiary': '#362050', '--dsw-alias-interactive-bg-hover': '#442763', '--dsw-specific-sidebar-fill': '#1a0e31',
          '--dsw-alias-state-success-primary': '#58e6c1', '--dsw-alias-state-warn-primary': '#ffd166', '--dsw-alias-state-error-primary': '#ff7d9b',
          '--tobewin-skin-background': 'radial-gradient(circle at 82% 7%, rgba(242, 68, 186, .20), transparent 27%), radial-gradient(circle at 16% 94%, rgba(91, 126, 255, .18), transparent 34%)',
        },
      },
      {
        id: 'tobewin-sunset-coral', key: 'sunset', colorScheme: 'light',
        preview: ['#fff6ef', '#ffded0', '#ff7258', '#ffb55c'],
        tokens: {
          '--dsw-alias-bg-base': '#fff7f1', '--dsw-alias-bg-layer-1': '#fffaf6', '--dsw-alias-bg-layer-2': '#fff0e7', '--dsw-alias-bg-overlay': '#ffffff',
          '--dsw-alias-border-l1': '#f4c9b7', '--dsw-alias-border-l2': '#e9ab92', '--dsw-alias-brand-primary': '#ed654d', '--dsw-alias-label-primary': '#36211e',
          '--dsw-alias-label-secondary': '#765b53', '--dsw-alias-state-business-primary': '#ed654d', '--dsw-alias-state-business-secondary': '#ffe0d5',
          '--dsw-alias-state-business-tertiary': '#ffebe3', '--dsw-alias-interactive-bg-hover': '#ffe8de', '--dsw-specific-sidebar-fill': '#fff1e8',
          '--dsw-alias-state-success-primary': '#2e9f74', '--dsw-alias-state-warn-primary': '#bc7600', '--dsw-alias-state-error-primary': '#d94d58',
          '--tobewin-skin-background': 'radial-gradient(circle at 85% 0%, rgba(255, 172, 92, .22), transparent 29%), radial-gradient(circle at 12% 100%, rgba(255, 114, 88, .12), transparent 34%)',
        },
      },
      {
        id: 'tobewin-arctic-prism', key: 'arctic', colorScheme: 'light',
        preview: ['#f4fbff', '#dceeff', '#407dff', '#56d3dc'],
        tokens: {
          '--dsw-alias-bg-base': '#f5fbff', '--dsw-alias-bg-layer-1': '#fbfdff', '--dsw-alias-bg-layer-2': '#eaf5ff', '--dsw-alias-bg-overlay': '#ffffff',
          '--dsw-alias-border-l1': '#c4dcf0', '--dsw-alias-border-l2': '#96bedf', '--dsw-alias-brand-primary': '#3f78ed', '--dsw-alias-label-primary': '#16263d',
          '--dsw-alias-label-secondary': '#536c87', '--dsw-alias-state-business-primary': '#3f78ed', '--dsw-alias-state-business-secondary': '#dcecff',
          '--dsw-alias-state-business-tertiary': '#edf6ff', '--dsw-alias-interactive-bg-hover': '#e0efff', '--dsw-specific-sidebar-fill': '#edf7ff',
          '--dsw-alias-state-success-primary': '#188f78', '--dsw-alias-state-warn-primary': '#a76c00', '--dsw-alias-state-error-primary': '#cd4e65',
          '--tobewin-skin-background': 'radial-gradient(circle at 80% 3%, rgba(86, 211, 220, .19), transparent 28%), radial-gradient(circle at 10% 100%, rgba(64, 125, 255, .11), transparent 34%)',
        },
      },
      {
        id: 'tobewin-moonlit-ink', key: 'ink', colorScheme: 'dark',
        preview: ['#0b101c', '#17233d', '#527dff', '#9dc6ff'],
        tokens: {
          '--dsw-alias-bg-base': '#0b101c', '--dsw-alias-bg-layer-1': '#111a2c', '--dsw-alias-bg-layer-2': '#17233d', '--dsw-alias-bg-overlay': '#202e4a',
          '--dsw-alias-border-l1': '#2f4162', '--dsw-alias-border-l2': '#485e86', '--dsw-alias-brand-primary': '#6d93ff', '--dsw-alias-label-primary': '#f1f5ff',
          '--dsw-alias-label-secondary': '#b5c2d9', '--dsw-alias-state-business-primary': '#6d93ff', '--dsw-alias-state-business-secondary': '#1b2c51',
          '--dsw-alias-state-business-tertiary': '#172540', '--dsw-alias-interactive-bg-hover': '#23365b', '--dsw-specific-sidebar-fill': '#0d1423',
          '--dsw-alias-state-success-primary': '#51d7b5', '--dsw-alias-state-warn-primary': '#ffd27a', '--dsw-alias-state-error-primary': '#ff8295',
          '--tobewin-skin-background': 'radial-gradient(circle at 82% 8%, rgba(82, 125, 255, .19), transparent 30%), radial-gradient(circle at 14% 96%, rgba(62, 191, 255, .10), transparent 34%)',
        },
      },
      {
        id: 'tobewin-matcha-garden', key: 'matcha', colorScheme: 'light',
        preview: ['#f7fbf1', '#e3f0d9', '#4e9c72', '#a7df86'],
        tokens: {
          '--dsw-alias-bg-base': '#f7fbf1', '--dsw-alias-bg-layer-1': '#fcfef9', '--dsw-alias-bg-layer-2': '#eaf5e2', '--dsw-alias-bg-overlay': '#ffffff',
          '--dsw-alias-border-l1': '#c9dfc1', '--dsw-alias-border-l2': '#9fc59f', '--dsw-alias-brand-primary': '#4b956e', '--dsw-alias-label-primary': '#1e3428',
          '--dsw-alias-label-secondary': '#587061', '--dsw-alias-state-business-primary': '#4b956e', '--dsw-alias-state-business-secondary': '#dcefd8',
          '--dsw-alias-state-business-tertiary': '#edf7e9', '--dsw-alias-interactive-bg-hover': '#e3f2dd', '--dsw-specific-sidebar-fill': '#eff7eb',
          '--dsw-alias-state-success-primary': '#268455', '--dsw-alias-state-warn-primary': '#9e7200', '--dsw-alias-state-error-primary': '#c94b58',
          '--tobewin-skin-background': 'radial-gradient(circle at 82% 2%, rgba(167, 223, 134, .27), transparent 29%), radial-gradient(circle at 12% 100%, rgba(75, 149, 110, .10), transparent 34%)',
        },
      },
      {
        id: 'tobewin-rose-quartz', key: 'rose', colorScheme: 'light',
        preview: ['#fff7fb', '#fbe6f1', '#c7609b', '#dca8ff'],
        tokens: {
          '--dsw-alias-bg-base': '#fff8fc', '--dsw-alias-bg-layer-1': '#fffafe', '--dsw-alias-bg-layer-2': '#fcebf5', '--dsw-alias-bg-overlay': '#ffffff',
          '--dsw-alias-border-l1': '#edcce0', '--dsw-alias-border-l2': '#dfa8ca', '--dsw-alias-brand-primary': '#c7609b', '--dsw-alias-label-primary': '#3d2234',
          '--dsw-alias-label-secondary': '#77566b', '--dsw-alias-state-business-primary': '#c7609b', '--dsw-alias-state-business-secondary': '#f8daea',
          '--dsw-alias-state-business-tertiary': '#fdefF6', '--dsw-alias-interactive-bg-hover': '#f9e2ee', '--dsw-specific-sidebar-fill': '#fff0f7',
          '--dsw-alias-state-success-primary': '#2e9474', '--dsw-alias-state-warn-primary': '#a87400', '--dsw-alias-state-error-primary': '#cc4c5c',
          '--tobewin-skin-background': 'radial-gradient(circle at 84% 4%, rgba(220, 168, 255, .23), transparent 30%), radial-gradient(circle at 10% 100%, rgba(199, 96, 155, .11), transparent 34%)',
        },
      },
      {
        id: 'tobewin-solar-flare', key: 'solar', colorScheme: 'dark',
        preview: ['#1a1110', '#3a2118', '#ff8a3d', '#ffd166'],
        tokens: {
          '--dsw-alias-bg-base': '#1a1110', '--dsw-alias-bg-layer-1': '#261713', '--dsw-alias-bg-layer-2': '#3a2118', '--dsw-alias-bg-overlay': '#4b2d20',
          '--dsw-alias-border-l1': '#66402b', '--dsw-alias-border-l2': '#8a5a39', '--dsw-alias-brand-primary': '#fa8140', '--dsw-alias-label-primary': '#fff5ef',
          '--dsw-alias-label-secondary': '#e2c3b4', '--dsw-alias-state-business-primary': '#fa8140', '--dsw-alias-state-business-secondary': '#553021',
          '--dsw-alias-state-business-tertiary': '#42271d', '--dsw-alias-interactive-bg-hover': '#613723', '--dsw-specific-sidebar-fill': '#201310',
          '--dsw-alias-state-success-primary': '#68d99b', '--dsw-alias-state-warn-primary': '#ffd166', '--dsw-alias-state-error-primary': '#ff8193',
          '--tobewin-skin-background': 'radial-gradient(circle at 82% 7%, rgba(255, 138, 61, .22), transparent 29%), radial-gradient(circle at 14% 97%, rgba(255, 209, 102, .12), transparent 34%)',
        },
      },
      {
        id: 'tobewin-nordic-mist', key: 'mist', colorScheme: 'light',
        preview: ['#f6f8fa', '#e7edf2', '#5e7fa3', '#b9d1e5'],
        tokens: {
          '--dsw-alias-bg-base': '#f7f9fb', '--dsw-alias-bg-layer-1': '#fcfdfe', '--dsw-alias-bg-layer-2': '#edf2f6', '--dsw-alias-bg-overlay': '#ffffff',
          '--dsw-alias-border-l1': '#d2dce5', '--dsw-alias-border-l2': '#b2c1ce', '--dsw-alias-brand-primary': '#5d7da0', '--dsw-alias-label-primary': '#263443',
          '--dsw-alias-label-secondary': '#68798a', '--dsw-alias-state-business-primary': '#5d7da0', '--dsw-alias-state-business-secondary': '#e1ebf4',
          '--dsw-alias-state-business-tertiary': '#f0f5f9', '--dsw-alias-interactive-bg-hover': '#e8f0f6', '--dsw-specific-sidebar-fill': '#f0f4f7',
          '--dsw-alias-state-success-primary': '#32836a', '--dsw-alias-state-warn-primary': '#9a7000', '--dsw-alias-state-error-primary': '#c85060',
          '--tobewin-skin-background': 'radial-gradient(circle at 84% 2%, rgba(185, 209, 229, .35), transparent 29%), radial-gradient(circle at 9% 100%, rgba(93, 125, 160, .10), transparent 35%)',
        },
      },
      {
        id: 'tobewin-cobalt-tide', key: 'cobalt', colorScheme: 'dark',
        preview: ['#071a32', '#0f3156', '#2784e8', '#42d5e8'],
        tokens: {
          '--dsw-alias-bg-base': '#071a32', '--dsw-alias-bg-layer-1': '#0b2746', '--dsw-alias-bg-layer-2': '#0f3156', '--dsw-alias-bg-overlay': '#16426d',
          '--dsw-alias-border-l1': '#24527c', '--dsw-alias-border-l2': '#3a73a2', '--dsw-alias-brand-primary': '#278be9', '--dsw-alias-label-primary': '#edf8ff',
          '--dsw-alias-label-secondary': '#acd0e4', '--dsw-alias-state-business-primary': '#278be9', '--dsw-alias-state-business-secondary': '#10406c',
          '--dsw-alias-state-business-tertiary': '#103655', '--dsw-alias-interactive-bg-hover': '#14507e', '--dsw-specific-sidebar-fill': '#08213c',
          '--dsw-alias-state-success-primary': '#4addb0', '--dsw-alias-state-warn-primary': '#ffd06b', '--dsw-alias-state-error-primary': '#ff8198',
          '--tobewin-skin-background': 'radial-gradient(circle at 83% 4%, rgba(66, 213, 232, .20), transparent 27%), radial-gradient(circle at 11% 98%, rgba(39, 132, 232, .15), transparent 35%)',
        },
      },
    ];

    function installStyles() {
      const styleId = '@tobewin/dsh-skin-studio/styles';
      if (document.querySelector(`style[data-plugin-css="${styleId}"]`)) return;
      const style = document.createElement('style');
      style.dataset.pluginCss = styleId;
      style.textContent = `
        body { background-color: var(--dsw-alias-bg-base); background-image: var(--tobewin-skin-background, none); background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; }
        .tobewin-skin-wallpaper { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; background-color: var(--tobewin-wallpaper-base, var(--dsw-alias-bg-base)); background-repeat: no-repeat; }
        html[data-tobewin-skin-wallpaper="true"] body { background-image: none; background-color: transparent; }
        html[data-tobewin-skin-wallpaper="true"] body > :not(.tobewin-skin-wallpaper) { position: relative; z-index: 1; }
        .tobewin-skin-studio { display: flex; flex-direction: column; gap: 14px; padding: 4px 0 8px; }
        .tobewin-skin-studio-heading { display: flex; flex-direction: column; gap: 4px; }
        .tobewin-skin-studio-title { color: var(--dsw-alias-label-primary); font-size: 15px; font-weight: 600; line-height: 22px; }
        .tobewin-skin-studio-subtitle, .tobewin-skin-studio-note { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 13px; line-height: 19px; }
        .tobewin-skin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(172px, 1fr)); gap: 10px; }
        .tobewin-skin-card { position: relative; display: flex; min-width: 0; flex-direction: column; gap: 10px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 14px; padding: 10px; color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-layer-1); box-shadow: 0 1px 1px rgba(13, 25, 41, .04); text-align: left; cursor: pointer; transition: transform .16s ease, border-color .16s ease, box-shadow .16s ease; }
        .tobewin-skin-card:hover { transform: translateY(-2px); border-color: var(--dsw-alias-brand-primary); box-shadow: 0 8px 20px rgba(13, 25, 41, .12); }
        .tobewin-skin-card:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; }
        .tobewin-skin-card[aria-pressed="true"] { border-color: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-brand-primary) 24%, transparent); }
        .tobewin-skin-preview { position: relative; height: 74px; overflow: hidden; border-radius: 9px; background: var(--preview-base); }
        .tobewin-skin-preview::before { position: absolute; width: 116px; height: 116px; top: -52px; right: -22px; border-radius: 50%; background: var(--preview-glow); content: ''; filter: blur(3px); opacity: .86; }
        .tobewin-skin-preview::after { position: absolute; left: 12px; right: 34px; bottom: 13px; height: 10px; border-radius: 8px; background: rgba(255, 255, 255, .75); box-shadow: 0 -18px 0 -3px rgba(255, 255, 255, .46), 0 -36px 0 -5px rgba(255, 255, 255, .30); content: ''; }
        .tobewin-skin-card-copy { display: flex; min-width: 0; flex-direction: column; gap: 2px; }
        .tobewin-skin-card-name { overflow: hidden; color: var(--dsw-alias-label-primary); font-size: 13px; font-weight: 600; line-height: 19px; text-overflow: ellipsis; white-space: nowrap; }
        .tobewin-skin-card-detail { min-height: 34px; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 17px; }
        .tobewin-skin-active { position: absolute; top: 16px; right: 16px; border-radius: 999px; padding: 2px 7px; color: #fff; background: var(--dsw-alias-brand-primary); font-size: 11px; font-weight: 600; line-height: 16px; }
        .tobewin-skin-default { border-style: dashed; }
        .tobewin-skin-canvas { display: flex; flex-direction: column; gap: 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 14px; padding: 14px; background: var(--dsw-alias-bg-layer-1); container-type: inline-size; }
        .tobewin-skin-canvas-header { display: flex; flex-direction: column; gap: 3px; }
        .tobewin-skin-canvas-title { color: var(--dsw-alias-label-primary); font-size: 14px; font-weight: 600; line-height: 20px; }
        .tobewin-skin-canvas-subtitle { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; }
        .tobewin-skin-canvas-guidance { margin: 1px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 11px; line-height: 16px; }
        .tobewin-skin-canvas-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(300px, 1fr); gap: 14px; align-items: start; }
        .tobewin-skin-canvas-image { position: relative; display: flex; width: 100%; max-width: 520px; min-width: 0; aspect-ratio: 16 / 9; min-height: 142px; overflow: hidden; align-items: flex-end; justify-self: start; box-sizing: border-box; border: 1px dashed var(--dsw-alias-border-l2); border-radius: 11px; padding: 10px; background: var(--canvas-background); isolation: isolate; }
        .tobewin-skin-canvas-image-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .tobewin-skin-canvas-image-photo { object-position: var(--canvas-image-focus, center); transform: scale(var(--canvas-image-scale, 1)); transform-origin: var(--canvas-image-focus, center); transition: transform .16s ease, object-position .16s ease; }
        .tobewin-skin-canvas-image::before { position: absolute; inset: 0; z-index: 1; background: linear-gradient(145deg, var(--canvas-image-overlay), transparent 63%); content: ''; }
        .tobewin-skin-canvas-image-label { position: relative; z-index: 2; border-radius: 7px; padding: 4px 7px; color: var(--dsw-alias-label-primary); background: color-mix(in srgb, var(--dsw-alias-bg-overlay) 84%, transparent); font-size: 12px; line-height: 17px; backdrop-filter: blur(8px); }
        .tobewin-skin-canvas-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; align-content: start; }
        .tobewin-skin-field { display: flex; min-width: 0; flex-direction: column; gap: 5px; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 17px; }
        .tobewin-skin-field-control { display: flex; min-height: 34px; align-items: center; gap: 7px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; padding: 4px 7px; color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-overlay); }
        .tobewin-skin-field-control input[type="color"] { width: 24px; height: 24px; border: 0; border-radius: 5px; padding: 0; background: transparent; cursor: pointer; }
        .tobewin-skin-field-control code { overflow: hidden; color: var(--dsw-alias-label-secondary); font-family: var(--ds-font-family-code, ui-monospace, monospace); font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
        .tobewin-skin-mode { display: flex; overflow: hidden; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; background: var(--dsw-alias-bg-overlay); }
        .tobewin-skin-mode button { flex: 1; min-height: 34px; border: 0; color: var(--dsw-alias-label-secondary); background: transparent; font: inherit; font-size: 12px; cursor: pointer; }
        .tobewin-skin-mode button[aria-pressed="true"] { color: #fff; background: var(--dsw-alias-state-business-primary); }
        .tobewin-skin-strength { grid-column: 1 / -1; }
        .tobewin-skin-range { display: flex; min-height: 34px; align-items: center; gap: 9px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; padding: 0 9px; background: var(--dsw-alias-bg-overlay); }
        .tobewin-skin-range input { width: 100%; accent-color: var(--dsw-alias-brand-primary); }
        .tobewin-skin-range output { min-width: 32px; color: var(--dsw-alias-label-secondary); font-family: var(--ds-font-family-code, ui-monospace, monospace); font-size: 11px; text-align: right; }
        .tobewin-skin-strength-hint { margin: -2px 0 0; color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 16px; }
        .tobewin-skin-crop-controls { display: flex; flex-direction: column; gap: 7px; }
        .tobewin-skin-crop-control { display: grid; grid-template-columns: 58px minmax(0, 1fr) 34px; align-items: center; gap: 8px; color: var(--dsw-alias-label-secondary); font-size: 11px; }
        .tobewin-skin-crop-control input { width: 100%; accent-color: var(--dsw-alias-brand-primary); }
        .tobewin-skin-crop-control output { color: var(--dsw-alias-label-secondary); font-family: var(--ds-font-family-code, ui-monospace, monospace); font-size: 11px; text-align: right; }
        .tobewin-skin-crop-modal { width: min(720px, 100%); }
        .tobewin-skin-crop-modal-content { max-height: min(76vh, 760px); overflow: auto; }
        .tobewin-skin-crop-stage { display: grid; min-height: 254px; place-items: center; overflow: hidden; box-sizing: border-box; border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; padding: 12px; background: var(--canvas-background); }
        .tobewin-skin-crop-source { position: relative; width: auto; height: min(52vh, 420px); max-width: 100%; aspect-ratio: var(--source-aspect, 16 / 9); overflow: hidden; box-sizing: border-box; border-radius: 8px; background: var(--dsw-alias-bg-base); touch-action: none; user-select: none; }
        .tobewin-skin-crop-source-photo { display: block; width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
        .tobewin-skin-crop-frame { position: absolute; z-index: 2; box-sizing: border-box; border: 2px solid #fff; border-radius: 4px; box-shadow: 0 0 0 9999px rgba(7, 12, 22, .58), inset 0 0 0 1px color-mix(in srgb, var(--dsw-alias-brand-primary) 80%, transparent); cursor: move; }
        .tobewin-skin-crop-frame::before, .tobewin-skin-crop-frame::after { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .48); content: ''; pointer-events: none; }
        .tobewin-skin-crop-frame::before { left: 33.333%; }
        .tobewin-skin-crop-frame::after { right: 33.333%; }
        .tobewin-skin-crop-handle { position: absolute; z-index: 3; width: 13px; height: 13px; box-sizing: border-box; border: 2px solid #fff; border-radius: 50%; background: var(--dsw-alias-brand-primary); box-shadow: 0 1px 4px rgba(0, 0, 0, .36); }
        .tobewin-skin-crop-handle[data-crop-handle="nw"] { top: -7px; left: -7px; cursor: nwse-resize; }
        .tobewin-skin-crop-handle[data-crop-handle="ne"] { top: -7px; right: -7px; cursor: nesw-resize; }
        .tobewin-skin-crop-handle[data-crop-handle="sw"] { bottom: -7px; left: -7px; cursor: nesw-resize; }
        .tobewin-skin-crop-handle[data-crop-handle="se"] { right: -7px; bottom: -7px; cursor: nwse-resize; }
        .tobewin-skin-crop-stage-hint { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; }
        .tobewin-skin-crop-modal-controls { display: flex; flex-direction: column; gap: 10px; }
        .tobewin-skin-canvas-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
        .tobewin-skin-file-input { display: none; }
        .tobewin-skin-action-danger { color: var(--dsw-alias-state-error-primary); }
        .tobewin-skin-canvas-status { margin: 0; color: var(--dsw-alias-state-success-primary); font-size: 12px; line-height: 17px; }
        .tobewin-skin-canvas-notice { margin: 0; color: var(--dsw-alias-state-warn-primary); font-size: 12px; line-height: 17px; }
        .tobewin-skin-canvas-error { color: var(--dsw-alias-state-error-primary); }
        @container (max-width: 760px) { .tobewin-skin-canvas-grid { grid-template-columns: 1fr; } }
        @media (max-width: 560px) { .tobewin-skin-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      `;
      document.head.appendChild(style);
    }

    function createThemeStore(theme) {
      let snapshot = theme.getTheme();
      const listeners = new Set();
      return {
        getSnapshot: () => snapshot,
        subscribe: (listener) => { listeners.add(listener); return () => listeners.delete(listener); },
        sync: (next) => { snapshot = next; listeners.forEach((listener) => listener()); },
      };
    }

    const defaultCanvas = Object.freeze({
      scheme: 'dark',
      background: '#101827',
      surface: '#1a2638',
      accent: '#7c6cff',
      text: '#f5f7ff',
      imageStrength: 64,
      imageZoom: 110,
      imageFocusX: 50,
      imageFocusY: 50,
      imageAspect: 16 / 9,
      image: undefined,
    });

    function isHexColor(value) {
      return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
    }

    function normalizeCanvas(value) {
      const candidate = value && typeof value === 'object' ? value : {};
      return {
        scheme: candidate.scheme === 'light' ? 'light' : 'dark',
        background: isHexColor(candidate.background) ? candidate.background : defaultCanvas.background,
        surface: isHexColor(candidate.surface) ? candidate.surface : defaultCanvas.surface,
        accent: isHexColor(candidate.accent) ? candidate.accent : defaultCanvas.accent,
        text: isHexColor(candidate.text) ? candidate.text : defaultCanvas.text,
        imageStrength: Number.isFinite(candidate.imageStrength) ? Math.min(90, Math.max(15, Math.round(candidate.imageStrength))) : defaultCanvas.imageStrength,
        imageZoom: Number.isFinite(candidate.imageZoom) ? Math.min(240, Math.max(100, Math.round(candidate.imageZoom))) : defaultCanvas.imageZoom,
        imageFocusX: Number.isFinite(candidate.imageFocusX) ? Math.min(100, Math.max(0, Math.round(candidate.imageFocusX))) : defaultCanvas.imageFocusX,
        imageFocusY: Number.isFinite(candidate.imageFocusY) ? Math.min(100, Math.max(0, Math.round(candidate.imageFocusY))) : defaultCanvas.imageFocusY,
        imageAspect: Number.isFinite(candidate.imageAspect) ? Math.min(10, Math.max(.1, candidate.imageAspect)) : defaultCanvas.imageAspect,
        image: typeof candidate.image === 'string' && candidate.image.startsWith('data:image/') ? candidate.image : undefined,
      };
    }

    function toRgb(hex, alpha) {
      const normalized = hex.slice(1);
      const red = Number.parseInt(normalized.slice(0, 2), 16);
      const green = Number.parseInt(normalized.slice(2, 4), 16);
      const blue = Number.parseInt(normalized.slice(4, 6), 16);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }

    function canvasBackground(canvas) {
      if (!canvas.image) return `radial-gradient(circle at 78% 3%, ${toRgb(canvas.accent, canvas.scheme === 'dark' ? '.24' : '.17')}, transparent 33%)`;
      const strength = canvas.imageStrength / 100;
      const accent = toRgb(canvas.accent, (0.16 + strength * 0.30).toFixed(2));
      const veil = toRgb(canvas.background, (canvas.scheme === 'dark' ? 0.20 : 0.07).toFixed(2));
      return `linear-gradient(135deg, ${accent}, transparent 54%), linear-gradient(0deg, ${veil}, ${veil}), url(${JSON.stringify(canvas.image)})`;
    }

    // Images intentionally bypass ThemeRuntime tokens. A large data URL is not
    // a color token and can be discarded by a host's theme presenter. The
    // wallpaper is a plugin-owned, non-interactive layer; color tokens below
    // still use the public ThemeRuntime API.
    function createWallpaperController() {
      const className = 'tobewin-skin-wallpaper';
      let node;

      function remove() {
        if (node) node.remove();
        node = undefined;
        document.documentElement.removeAttribute('data-tobewin-skin-wallpaper');
      }

      function apply(canvas) {
        if (!canvas.image) return remove();
        if (!node || !node.isConnected) {
          node = document.createElement('div');
          node.className = className;
          node.setAttribute('aria-hidden', 'true');
          document.body.prepend(node);
        }
        const strength = canvas.imageStrength / 100;
        const accent = toRgb(canvas.accent, (0.16 + strength * 0.30).toFixed(2));
        const veil = toRgb(canvas.background, (canvas.scheme === 'dark' ? 0.20 : 0.07).toFixed(2));
        node.style.setProperty('--tobewin-wallpaper-base', canvas.background);
        node.style.backgroundImage = `linear-gradient(135deg, ${accent}, transparent 54%), linear-gradient(0deg, ${veil}, ${veil}), url(${JSON.stringify(canvas.image)})`;
        node.style.backgroundSize = `cover, cover, ${canvas.imageZoom}% auto`;
        node.style.backgroundPosition = `center, center, ${canvas.imageFocusX}% ${canvas.imageFocusY}%`;
        document.documentElement.dataset.tobewinSkinWallpaper = 'true';
      }

      return { apply, remove };
    }

    function canvasTokens(canvas) {
      const dark = canvas.scheme === 'dark';
      const labelSecondary = dark ? '#bdc7d8' : '#5f6978';
      const borderL1 = dark ? '#35455e' : '#cbd3df';
      const borderL2 = dark ? '#52657f' : '#aeb9c8';
      const imageRatio = canvas.image ? canvas.imageStrength / 100 : 0;
      // With a photo, every main application surface becomes a tinted glass
      // layer. This is entirely token based: no Harness component or DOM
      // selector is modified, but the wallpaper remains genuinely visible.
      const baseOpacity = canvas.image ? (0.70 - imageRatio * 0.23).toFixed(2) : '1';
      const surfaceOpacity = canvas.image ? (0.82 - imageRatio * 0.28).toFixed(2) : '1';
      const layerOpacity = canvas.image ? (0.84 - imageRatio * 0.30).toFixed(2) : '1';
      const overlayOpacity = canvas.image ? (0.90 - imageRatio * 0.22).toFixed(2) : '1';
      const platformOpacity = canvas.image ? (0.82 - imageRatio * 0.26).toFixed(2) : '1';
      const sidebarOpacity = canvas.image ? (0.86 - imageRatio * 0.24).toFixed(2) : '1';
      const panelTone = dark ? '#2b3e5b' : '#e6edf5';
      const sidebarTone = dark ? '#0d1d30' : '#f3f6f9';
      return {
        '--dsw-alias-bg-base': toRgb(canvas.background, baseOpacity),
        '--dsw-alias-bg-layer-1': toRgb(canvas.surface, surfaceOpacity),
        '--dsw-alias-bg-layer-2': toRgb(dark ? '#223149' : '#eef2f7', layerOpacity),
        '--dsw-alias-bg-layer-3': toRgb(panelTone, layerOpacity),
        '--dsw-alias-bg-module-platform': toRgb(panelTone, platformOpacity),
        '--dsw-alias-bg-multi-select': toRgb(panelTone, platformOpacity),
        '--dsw-alias-bg-overlay': toRgb(dark ? '#26364f' : '#ffffff', overlayOpacity),
        '--dsw-alias-bg-primary': toRgb(canvas.surface, surfaceOpacity),
        '--dsw-alias-bg-mask-1': toRgb(canvas.background, dark ? '.42' : '.20'),
        '--dsw-alias-bg-mask-2': toRgb(canvas.background, dark ? '.58' : '.30'),
        '--dsw-alias-bg-mask-3': toRgb(canvas.background, dark ? '.72' : '.44'),
        '--dsw-alias-bg-mask-drop': toRgb(canvas.background, dark ? '.78' : '.55'),
        '--dsw-alias-bg-mask-photo': toRgb(canvas.background, dark ? '.30' : '.12'),
        '--dsw-alias-fill-l2': toRgb(canvas.surface, surfaceOpacity),
        '--dsw-alias-border-l1': borderL1,
        '--dsw-alias-border-l2': borderL2,
        '--dsw-alias-border-l3': dark ? '#70829b' : '#93a1b1',
        '--dsw-alias-border-l4': dark ? '#93a4bb' : '#748193',
        '--dsw-alias-border-secondary': toRgb(canvas.accent, dark ? '.42' : '.36'),
        '--dsw-alias-brand-primary': canvas.accent,
        '--dsw-alias-brand-primary-invert': dark ? '#151c2b' : '#ffffff',
        '--dsw-alias-brand-text': canvas.accent,
        '--dsw-alias-label-primary': canvas.text,
        '--dsw-alias-label-secondary': labelSecondary,
        '--dsw-alias-label-tertiary': dark ? '#9ba8bc' : '#758092',
        '--dsw-alias-label-quaternary': dark ? '#76849a' : '#8d97a6',
        '--dsw-alias-label-caption': dark ? '#aeb9ca' : '#6e798a',
        '--dsw-alias-label-dimmed': dark ? '#758196' : '#939dac',
        '--dsw-alias-label-primary-bluish': canvas.text,
        '--dsw-alias-text-primary': canvas.text,
        '--dsw-alias-text-tertiary': dark ? '#a9b4c5' : '#697587',
        '--dsw-alias-state-business-primary': canvas.accent,
        '--dsw-alias-state-business-secondary': toRgb(canvas.accent, dark ? '.22' : '.18'),
        '--dsw-alias-state-business-tertiary': toRgb(canvas.accent, dark ? '.14' : '.11'),
        '--dsw-alias-interactive-bg-hover': toRgb(canvas.accent, dark ? '.23' : '.13'),
        '--dsw-alias-interactive-bg-primary': toRgb(canvas.accent, dark ? '.30' : '.22'),
        '--dsw-alias-interactive-bg-active': toRgb(canvas.accent, dark ? '.38' : '.28'),
        '--dsw-alias-interactive-bg-hover-accent': toRgb(canvas.accent, dark ? '.30' : '.20'),
        '--dsw-alias-button-primary-fill': canvas.accent,
        '--dsw-alias-button-primary-hover': toRgb(canvas.accent, '.82'),
        '--dsw-alias-button-primary-dimmed': toRgb(canvas.accent, '.56'),
        '--dsw-alias-button-elevated-fill': toRgb(panelTone, overlayOpacity),
        '--dsw-alias-button-floating-fill': toRgb(panelTone, overlayOpacity),
        '--dsw-alias-button-floating-hover': toRgb(canvas.accent, dark ? '.26' : '.16'),
        '--dsw-alias-button-tool-bar-fill': toRgb(panelTone, platformOpacity),
        '--dsw-alias-button-tool-bar-fill-invisible': 'transparent',
        '--dsw-alias-button-tool-bar-hover': toRgb(canvas.accent, dark ? '.22' : '.12'),
        '--dsw-specific-sidebar-fill': toRgb(sidebarTone, sidebarOpacity),
        '--dsw-specific-sidebar-nav-item-active': toRgb(canvas.accent, dark ? '.30' : '.16'),
        '--dsw-specific-sidebar-nav-item-active-accent': toRgb(canvas.accent, dark ? '.42' : '.25'),
        '--dsw-specific-sidebar-nav-item-hover': toRgb(canvas.accent, dark ? '.17' : '.09'),
        '--dsw-specific-input-major': toRgb(canvas.surface, surfaceOpacity),
        '--dsw-specific-bubble': toRgb(dark ? '#183655' : '#e7f1fb', platformOpacity),
        '--dsw-specific-bubble-highlight': toRgb(canvas.accent, dark ? '.32' : '.24'),
        '--dsw-specific-menu': toRgb(panelTone, overlayOpacity),
        '--dsw-specific-selector': toRgb(panelTone, platformOpacity),
        '--dsw-specific-tip': toRgb(panelTone, platformOpacity),
        '--dsw-alias-state-success-primary': dark ? '#55dca6' : '#16845f',
        '--dsw-alias-state-warn-primary': dark ? '#ffd166' : '#a36b00',
        '--dsw-alias-state-error-primary': dark ? '#ff8da0' : '#cc4657',
        '--tobewin-skin-background': canvas.image ? 'none' : canvasBackground(canvas),
      };
    }

    function pairedTokens(tokens) {
      return Object.fromEntries(Object.entries(tokens).map(([name, value]) => [name, { light: value, dark: value }]));
    }

    function openCanvasDatabase() {
      return new Promise((resolve) => {
        if (!('indexedDB' in window)) return resolve(undefined);
        const request = window.indexedDB.open(canvasDbName, 1);
        request.onupgradeneeded = () => {
          if (!request.result.objectStoreNames.contains(canvasStoreName)) request.result.createObjectStore(canvasStoreName);
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => resolve(undefined);
      });
    }

    async function readCanvas() {
      const database = await openCanvasDatabase();
      if (!database) return undefined;
      return new Promise((resolve) => {
        const request = database.transaction(canvasStoreName, 'readonly').objectStore(canvasStoreName).get(canvasRecordKey);
        request.onsuccess = () => { database.close(); resolve(normalizeCanvas(request.result)); };
        request.onerror = () => { database.close(); resolve(undefined); };
      });
    }

    async function writeCanvas(canvas) {
      const database = await openCanvasDatabase();
      if (!database) return;
      await new Promise((resolve) => {
        const transaction = database.transaction(canvasStoreName, 'readwrite');
        transaction.objectStore(canvasStoreName).put(canvas, canvasRecordKey);
        transaction.oncomplete = () => { database.close(); resolve(); };
        transaction.onerror = () => { database.close(); resolve(); };
      });
    }

    function createCanvasStore() {
      let snapshot = { ...defaultCanvas };
      const listeners = new Set();
      const publish = () => listeners.forEach((listener) => listener());
      const ready = readCanvas().then((stored) => {
        if (stored) {
          snapshot = stored;
          publish();
        }
        return snapshot;
      });
      return {
        ready,
        getSnapshot: () => snapshot,
        subscribe: (listener) => { listeners.add(listener); return () => listeners.delete(listener); },
        set: (next, persist = true) => {
          snapshot = normalizeCanvas(next);
          publish();
          if (persist) void writeCanvas(snapshot);
          return snapshot;
        },
      };
    }

    function selectedSkinId() {
      try {
        const id = window.localStorage.getItem(storageKey);
        return id === customSkinId || skins.some((skin) => skin.id === id) ? id : undefined;
      } catch {
        return undefined;
      }
    }

    function persistSkin(id) {
      try {
        if (id === undefined) window.localStorage.removeItem(storageKey);
        else window.localStorage.setItem(storageKey, id);
      } catch {
        // Persistence is a convenience only; a strict browser policy should
        // not stop an otherwise valid public ThemeRuntime change.
      }
    }

    function ColorField({ label, value, onChange }) {
      return jsxs('label', { className: 'tobewin-skin-field', children: [
        jsx('span', { children: label }),
        jsxs('span', { className: 'tobewin-skin-field-control', children: [
          jsx('input', { type: 'color', value, onChange: (event) => onChange(event.target.value), 'aria-label': label }),
          jsx('code', { children: value.toUpperCase() }),
        ] }),
      ] });
    }

    function RangeControl({ label, value, min, max, onChange }) {
      return jsxs('label', { className: 'tobewin-skin-crop-control', children: [
        jsx('span', { children: label }),
        jsx('input', { type: 'range', min: String(min), max: String(max), value, onChange: (event) => onChange(Number(event.target.value)), 'aria-label': label }),
        jsx('output', { children: `${value}%` }),
      ] });
    }

    function clamp(value, minimum, maximum) {
      return Math.min(maximum, Math.max(minimum, value));
    }

    function fittedCrop(aspect) {
      const target = 16 / 9;
      return aspect >= target
        ? { x: (100 - 100 * target / aspect) / 2, y: 0, width: 100 * target / aspect }
        : { x: 0, y: (100 - 100 * aspect / target) / 2, width: 100 };
    }

    function cropHeight(crop, aspect) {
      return crop.width * aspect / (16 / 9);
    }

    function cropFromFraming(canvas, aspect) {
      const fitted = fittedCrop(aspect);
      const minimumWidth = Math.min(fitted.width, 10000 / 240);
      let width = clamp(10000 / canvas.imageZoom, minimumWidth, 100);
      let height = cropHeight({ width }, aspect);
      if (height > 100) return fitted;
      const x = clamp(canvas.imageFocusX - width / 2, 0, 100 - width);
      const y = clamp(canvas.imageFocusY - height / 2, 0, 100 - height);
      return { x, y, width };
    }

    function framingFromCrop(crop, aspect) {
      const height = cropHeight(crop, aspect);
      return {
        imageZoom: Math.round(clamp(10000 / crop.width, 100, 240)),
        imageFocusX: Math.round(crop.x + crop.width / 2),
        imageFocusY: Math.round(crop.y + height / 2),
        imageAspect: aspect,
      };
    }

    function CropDialog({ canvas, onClose, onSave, open, t }) {
      const initialAspect = canvas.imageAspect || 16 / 9;
      const [imageAspect, setImageAspect] = React.useState(initialAspect);
      const [crop, setCrop] = React.useState(() => cropFromFraming(canvas, initialAspect));
      const dragRef = React.useRef(null);

      React.useEffect(() => {
        if (!open) return;
        const image = new Image();
        image.onload = () => {
          const aspect = image.naturalWidth / image.naturalHeight;
          setImageAspect(aspect);
          setCrop(cropFromFraming(canvas, aspect));
        };
        image.src = canvas.image;
        return () => { image.onload = null; };
      }, [open, canvas.image, canvas.imageZoom, canvas.imageFocusX, canvas.imageFocusY]);

      const frameHeight = cropHeight(crop, imageAspect);
      const frameStyle = { left: `${crop.x}%`, top: `${crop.y}%`, width: `${crop.width}%`, height: `${frameHeight}%` };
      const sourceStyle = { '--source-aspect': String(imageAspect) };

      function pointFromEvent(event) {
        const bounds = event.currentTarget.getBoundingClientRect();
        return {
          x: clamp((event.clientX - bounds.left) / bounds.width * 100, 0, 100),
          y: clamp((event.clientY - bounds.top) / bounds.height * 100, 0, 100),
        };
      }

      function moveCrop(start, point) {
        const height = cropHeight(start, imageAspect);
        return {
          ...start,
          x: clamp(start.x + point.x - dragRef.current.point.x, 0, 100 - start.width),
          y: clamp(start.y + point.y - dragRef.current.point.y, 0, 100 - height),
        };
      }

      function resizeCrop(start, point, handle) {
        const ratio = imageAspect / (16 / 9);
        const minimumWidth = Math.min(fittedCrop(imageAspect).width, 10000 / 240);
        const startHeight = cropHeight(start, imageAspect);
        let anchorX;
        let anchorY;
        let horizontal;
        let vertical;
        if (handle === 'nw') { anchorX = start.x + start.width; anchorY = start.y + startHeight; horizontal = anchorX - point.x; vertical = anchorY - point.y; }
        if (handle === 'ne') { anchorX = start.x; anchorY = start.y + startHeight; horizontal = point.x - anchorX; vertical = anchorY - point.y; }
        if (handle === 'sw') { anchorX = start.x + start.width; anchorY = start.y; horizontal = anchorX - point.x; vertical = point.y - anchorY; }
        if (handle === 'se') { anchorX = start.x; anchorY = start.y; horizontal = point.x - anchorX; vertical = point.y - anchorY; }
        const maximumWidth = Math.min(
          handle === 'nw' || handle === 'sw' ? anchorX : 100 - anchorX,
          (handle === 'nw' || handle === 'ne' ? anchorY : 100 - anchorY) / ratio,
        );
        const width = clamp(Math.min(horizontal, vertical / ratio), minimumWidth, maximumWidth);
        const height = width * ratio;
        if (handle === 'nw') return { x: anchorX - width, y: anchorY - height, width };
        if (handle === 'ne') return { x: anchorX, y: anchorY - height, width };
        if (handle === 'sw') return { x: anchorX - width, y: anchorY, width };
        return { x: anchorX, y: anchorY, width };
      }

      function onPointerDown(event) {
        const handle = event.target.closest('[data-crop-handle]')?.dataset.cropHandle;
        const frame = event.target.closest('.tobewin-skin-crop-frame');
        const point = pointFromEvent(event);
        if (!handle && !frame) {
          const height = cropHeight(crop, imageAspect);
          setCrop((previous) => ({ ...previous, x: clamp(point.x - previous.width / 2, 0, 100 - previous.width), y: clamp(point.y - height / 2, 0, 100 - height) }));
          return;
        }
        event.currentTarget.setPointerCapture?.(event.pointerId);
        dragRef.current = { handle: handle || 'move', point, crop };
      }

      function onPointerMove(event) {
        const drag = dragRef.current;
        if (!drag || !event.currentTarget.hasPointerCapture?.(event.pointerId)) return;
        const point = pointFromEvent(event);
        setCrop(drag.handle === 'move' ? moveCrop(drag.crop, point) : resizeCrop(drag.crop, point, drag.handle));
      }

      function onPointerEnd() {
        dragRef.current = null;
      }

      return jsx(Modal, {
        open,
        onClose,
        title: t('canvas.cropDialogTitle'),
        closeLabel: t('canvas.cropDialogClose'),
        description: t('canvas.cropDialogDescription'),
        className: 'tobewin-skin-crop-modal',
        contentClassName: 'tobewin-skin-crop-modal-content',
        footer: jsxs(React.Fragment, { children: [
          jsx(Button, { variant: 'outline', size: 'sm', onClick: () => setCrop(fittedCrop(imageAspect)), children: t('canvas.resetFrame') }),
          jsx(Button, { variant: 'primary', size: 'sm', onClick: () => { onSave(framingFromCrop(crop, imageAspect)); onClose(); }, children: t('canvas.cropDialogDone') }),
        ] }),
        children: jsxs('div', { className: 'tobewin-skin-crop-modal-controls', children: [
          jsx('div', { className: 'tobewin-skin-crop-stage', children: jsx('div', { className: 'tobewin-skin-crop-source', style: sourceStyle, onPointerDown, onPointerMove, onPointerUp: onPointerEnd, onPointerCancel: onPointerEnd, children: [
            canvas.image && jsx('img', { className: 'tobewin-skin-crop-source-photo', src: canvas.image, alt: t('canvas.image') }),
            jsxs('div', { className: 'tobewin-skin-crop-frame', style: frameStyle, children: [
              jsx('span', { className: 'tobewin-skin-crop-handle', 'data-crop-handle': 'nw' }),
              jsx('span', { className: 'tobewin-skin-crop-handle', 'data-crop-handle': 'ne' }),
              jsx('span', { className: 'tobewin-skin-crop-handle', 'data-crop-handle': 'sw' }),
              jsx('span', { className: 'tobewin-skin-crop-handle', 'data-crop-handle': 'se' }),
            ] }),
          ] }) }),
          jsx('p', { className: 'tobewin-skin-crop-stage-hint', children: t('canvas.cropHint') }),
        ] }),
      });
    }

    function CanvasEditor({ canvasStore, actions, active, t }) {
      const storedCanvas = React.useSyncExternalStore(canvasStore.subscribe, canvasStore.getSnapshot, canvasStore.getSnapshot);
      const [draft, setDraft] = React.useState(storedCanvas);
      const [error, setError] = React.useState(undefined);
      const [notice, setNotice] = React.useState(undefined);
      const [cropOpen, setCropOpen] = React.useState(false);
      const fileInputRef = React.useRef(null);
      React.useEffect(() => { setDraft(storedCanvas); }, [storedCanvas]);

      React.useEffect(() => {
        if (!draft.image) return undefined;
        const image = new Image();
        image.onload = () => setError(undefined);
        image.onerror = () => setError(t('canvas.imageUnsupported'));
        image.src = draft.image;
        return () => { image.onload = null; image.onerror = null; };
      }, [draft.image, t]);

      function update(field, value) {
        setDraft((previous) => ({ ...previous, [field]: value }));
      }

      function upload(event) {
        const file = event.target.files && event.target.files[0];
        event.target.value = '';
        if (!file) return;
        if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
          setError(t('canvas.imageError'));
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          const source = typeof reader.result === 'string' ? reader.result : undefined;
          if (!source) return setError(t('canvas.imageUnsupported'));
          const image = new Image();
          image.onload = () => {
            const ratio = image.naturalWidth / image.naturalHeight;
            setNotice(image.naturalWidth < 1280 || image.naturalHeight < 720 || ratio < 4 / 3 || ratio > 21 / 9 ? t('canvas.imageCropNotice') : undefined);
            setError(undefined);
            setDraft((previous) => ({ ...previous, image: source, imageZoom: 100, imageFocusX: 50, imageFocusY: 50, imageAspect: ratio }));
          };
          image.onerror = () => setError(t('canvas.imageUnsupported'));
          image.src = source;
        };
        reader.onerror = () => setError(t('canvas.imageError'));
        reader.readAsDataURL(file);
      }

      const previewStyle = {
        '--canvas-background': draft.background,
        '--canvas-image-overlay': toRgb(draft.accent, (0.18 + draft.imageStrength / 100 * 0.25).toFixed(2)),
        '--canvas-image-scale': String(draft.imageZoom / 100),
        '--canvas-image-focus': `${draft.imageFocusX}% ${draft.imageFocusY}%`,
        '--canvas-focus-x': `${draft.imageFocusX}%`,
        '--canvas-focus-y': `${draft.imageFocusY}%`,
      };
      return jsxs('section', { className: 'tobewin-skin-canvas', children: [
        jsxs('div', { className: 'tobewin-skin-canvas-header', children: [
          jsx('div', { className: 'tobewin-skin-canvas-title', children: t('canvas.title') }),
          jsx('p', { className: 'tobewin-skin-canvas-subtitle', children: t('canvas.subtitle') }),
          jsx('p', { className: 'tobewin-skin-canvas-guidance', children: t('canvas.imageGuidance') }),
        ] }),
        jsxs('div', { className: 'tobewin-skin-canvas-grid', children: [
          jsxs('div', { className: 'tobewin-skin-canvas-image', style: previewStyle, children: [
            draft.image && jsx('img', { className: 'tobewin-skin-canvas-image-photo', src: draft.image, alt: t('canvas.image') }),
            jsx('span', { className: 'tobewin-skin-canvas-image-label', children: draft.image ? t('canvas.image') : t('canvas.none') }),
          ] }),
          jsxs('div', { className: 'tobewin-skin-canvas-fields', children: [
            jsx(ColorField, { label: t('canvas.background'), value: draft.background, onChange: (value) => update('background', value) }),
            jsx(ColorField, { label: t('canvas.surface'), value: draft.surface, onChange: (value) => update('surface', value) }),
            jsx(ColorField, { label: t('canvas.accent'), value: draft.accent, onChange: (value) => update('accent', value) }),
            jsx(ColorField, { label: t('canvas.text'), value: draft.text, onChange: (value) => update('text', value) }),
            jsxs('div', { className: 'tobewin-skin-field', children: [
              jsx('span', { children: t('canvas.mode') }),
              jsxs('div', { className: 'tobewin-skin-mode', children: [
                jsx('button', { type: 'button', 'aria-pressed': draft.scheme === 'light', onClick: () => update('scheme', 'light'), children: t('canvas.light') }),
                jsx('button', { type: 'button', 'aria-pressed': draft.scheme === 'dark', onClick: () => update('scheme', 'dark'), children: t('canvas.dark') }),
              ] }),
            ] }),
            jsxs('div', { className: 'tobewin-skin-field tobewin-skin-strength', children: [
              jsx('span', { children: t('canvas.strength') }),
              jsxs('div', { className: 'tobewin-skin-range', children: [
                jsx('input', { type: 'range', min: '15', max: '90', value: draft.imageStrength, onChange: (event) => update('imageStrength', Number(event.target.value)), 'aria-label': t('canvas.strength') }),
                jsx('output', { children: `${draft.imageStrength}%` }),
              ] }),
              jsx('p', { className: 'tobewin-skin-strength-hint', children: t('canvas.strengthHint') }),
            ] }),
          ] }),
        ] }),
        jsxs('div', { className: 'tobewin-skin-canvas-actions', children: [
          jsx('input', { ref: fileInputRef, className: 'tobewin-skin-file-input', type: 'file', accept: 'image/png,image/jpeg,image/webp,image/gif,image/avif,image/svg+xml', onChange: upload }),
          jsx(Button, { variant: 'outline', size: 'sm', onClick: () => fileInputRef.current?.click(), children: draft.image ? t('canvas.replace') : t('canvas.upload') }),
          draft.image && jsx(Button, { variant: 'outline', size: 'sm', onClick: () => setCropOpen(true), children: t('canvas.adjustCrop') }),
          draft.image && jsx(Button, { variant: 'ghost', size: 'sm', className: 'tobewin-skin-action-danger', onClick: () => { setNotice(undefined); setCropOpen(false); update('image', undefined); }, children: t('canvas.remove') }),
          jsx(Button, { variant: 'primary', size: 'sm', onClick: () => actions.applyCustom(canvasStore.set(draft)), children: t('canvas.apply') }),
          active && jsx('p', { className: 'tobewin-skin-canvas-status', children: t('canvas.active') }),
          notice && jsx('p', { className: 'tobewin-skin-canvas-notice', children: notice }),
          error && jsx('p', { className: 'tobewin-skin-canvas-status tobewin-skin-canvas-error', children: error }),
        ] }),
        jsx(CropDialog, { open: cropOpen && Boolean(draft.image), canvas: draft, onClose: () => setCropOpen(false), onSave: (framing) => setDraft((previous) => ({ ...previous, ...framing })), t }),
      ] });
    }

    function SkinStudio({ locale, skinStore, canvasStore, actions }) {
      React.useSyncExternalStore(locale.subscribe.bind(locale), locale.getSnapshot.bind(locale), locale.getSnapshot.bind(locale));
      const snapshot = React.useSyncExternalStore(skinStore.subscribe, skinStore.getSnapshot, skinStore.getSnapshot);
      const t = locale.bind(NS);
      const current = selectedSkinId();

      function card(skin) {
        const active = current === skin.id;
        return jsx('button', {
          type: 'button', className: 'tobewin-skin-card', 'aria-pressed': active, onClick: () => actions.applySkin(skin.id),
          children: [
            jsx('span', { className: 'tobewin-skin-preview', style: { '--preview-base': skin.preview[0], '--preview-glow': `radial-gradient(circle, ${skin.preview[3]}, ${skin.preview[2]} 46%, transparent 70%)` } }),
            active && jsx('span', { className: 'tobewin-skin-active', children: t('active') }),
            jsxs('span', { className: 'tobewin-skin-card-copy', children: [
              jsx('span', { className: 'tobewin-skin-card-name', children: t(`${skin.key}.name`) }),
              jsx('span', { className: 'tobewin-skin-card-detail', children: t(`${skin.key}.detail`) }),
            ] }),
          ],
        }, skin.id);
      }

      const defaultActive = current === undefined;
      return jsxs('section', { className: 'tobewin-skin-studio', children: [
        jsxs('div', { className: 'tobewin-skin-studio-heading', children: [
          jsx('div', { className: 'tobewin-skin-studio-title', children: t('title') }),
          jsx('p', { className: 'tobewin-skin-studio-subtitle', children: t('subtitle') }),
        ] }),
        jsx('div', { className: 'tobewin-skin-grid', children: [
          jsx('button', {
            type: 'button', className: 'tobewin-skin-card tobewin-skin-default', 'aria-pressed': defaultActive, onClick: () => actions.restore(),
            children: [
              jsx('span', { className: 'tobewin-skin-preview', style: { '--preview-base': '#f6f8fb', '--preview-glow': 'radial-gradient(circle, #93b8ff, #e9f0ff 45%, transparent 72%)' } }),
              defaultActive && jsx('span', { className: 'tobewin-skin-active', children: t('active') }),
              jsxs('span', { className: 'tobewin-skin-card-copy', children: [
                jsx('span', { className: 'tobewin-skin-card-name', children: t('default.name') }),
                jsx('span', { className: 'tobewin-skin-card-detail', children: t('default.detail') }),
              ] }),
            ],
          }, 'default'),
          ...skins.map(card),
        ] }),
        jsx(CanvasEditor, { canvasStore, actions, active: current === customSkinId, t }),
        jsx('p', { className: 'tobewin-skin-studio-note', children: t('note') }),
      ] });
    }

    function apply(ctx) {
      installStyles();
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-skin-studio: dictionaries');
      const theme = ctx.get('theme');
      const skinStore = createThemeStore(theme);
      const canvasStore = createCanvasStore();
      const wallpaper = createWallpaperController();
      let registered = false;
      let applying = false;
      let currentSelection = selectedSkinId();
      let disposeCustomLayer;

      function remember(id) {
        currentSelection = id;
        persistSkin(id);
      }

      function clearCustomLayer() {
        if (!disposeCustomLayer) return;
        const dispose = disposeCustomLayer;
        disposeCustomLayer = undefined;
        dispose();
      }

      function applyCustom(canvas) {
        applying = true;
        remember(customSkinId);
        clearCustomLayer();
        theme.setTheme(canvas.scheme);
        disposeCustomLayer = theme.overrideTokens(customLayerSource, pairedTokens(canvasTokens(canvas)));
        wallpaper.apply(canvas);
        applying = false;
      }

      const actions = {
        applySkin: (id) => {
          applying = true;
          remember(id);
          clearCustomLayer();
          wallpaper.remove();
          theme.setTheme(id);
          applying = false;
        },
        restore: () => {
          applying = true;
          remember(undefined);
          clearCustomLayer();
          wallpaper.remove();
          theme.setTheme('system');
          applying = false;
        },
        applyCustom: (canvas) => applyCustom(canvas),
      };
      ctx.on('theme/change', (snapshot) => {
        skinStore.sync(snapshot);
        if (!registered || applying) return;
        if (currentSelection === customSkinId) {
          remember(undefined);
          clearCustomLayer();
        } else if (currentSelection !== undefined && snapshot.preference !== currentSelection) {
          remember(undefined);
        }
      });
      ctx.effect(() => {
        const dispose = skins.map((skin) => theme.register({ id: skin.id, colorScheme: skin.colorScheme, tokens: skin.tokens }));
        registered = true;
        if (currentSelection === customSkinId) {
          void canvasStore.ready.then((canvas) => applyCustom(canvas));
        } else if (currentSelection !== undefined) {
          theme.setTheme(currentSelection);
        }
        return () => {
          clearCustomLayer();
          wallpaper.remove();
          dispose.reverse().forEach((release) => release());
        };
      }, 'dsh-skin-studio: register skins');
      ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section',
        id: 'tobewin-skin-studio',
        order: 17,
        label: () => ctx.locale.bind(NS)('title'),
        locale: NS,
        inject: () => ({ locale: ctx.locale, skinStore, canvasStore, actions }),
      }, SkinStudio));
    }

    return { NS, apply, inject };
  },
});
