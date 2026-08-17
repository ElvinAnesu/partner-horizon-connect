const modules = import.meta.glob("../assets/img/gallery/*.{jpg,JPG,jpeg,JPEG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function fileName(path: string) {
  return path.split("/").pop() ?? path;
}

/** All images in `src/assets/img/gallery`, sorted naturally by filename. */
export const galleryImages: string[] = Object.entries(modules)
  .sort(([a], [b]) =>
    fileName(a).localeCompare(fileName(b), undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([, src]) => src);

export const galleryItems = galleryImages.map((src, i) => ({
  src,
  cap: `Hesu gallery ${i + 1}`,
}));
