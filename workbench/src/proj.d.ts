/** External promo project sources (workbench/proj symlink → <project>/src, Vite/webpack alias @proj).
 *  Declared as an any module: the promo project is not subject to this project's strict tsc — its own sources are authoritative. */
declare module "@proj/*";

/** Shot-card demo sources (workbench/demosrc → ../demos, alias @demos).
 *  Also exempt from strict tsc here: demo sources are guarded by the repo CI's own tsc gate. */
declare module "@demos/*";
