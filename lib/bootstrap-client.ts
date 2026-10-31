// Single shared import of Bootstrap's bundle. Loading it from two specifiers would register its
// data-bs-* click handlers twice, so everything goes through here.
type BootstrapModule = { Modal: typeof import("bootstrap").Modal };

export async function loadBootstrap(): Promise<BootstrapModule> {
  const mod = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
  return (mod.default ?? mod) as BootstrapModule;
}
