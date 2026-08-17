/**
 * Host-side entry for DSH Skin Studio.
 *
 * Skins are registered through the public browser ThemeRuntime.  Keeping this
 * half inert means the package neither patches Harness configuration nor owns
 * any server-side state.
 */
export const name = 'tobewin-dsh-skin-studio';

export function apply(): void {
  // Client-only plugin.
}
