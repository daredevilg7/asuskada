export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(src: string): string {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  return `${BASE_PATH}${cleanSrc}`;
}
