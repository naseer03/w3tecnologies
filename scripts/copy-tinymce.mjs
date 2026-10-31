// TinyMCE is self-hosted (GPL licence): copy its runtime into public/ so the admin editor can load it.
import fs from "node:fs";

const src = "node_modules/tinymce";
if (fs.existsSync(src)) fs.cpSync(src, "public/tinymce", { recursive: true });
