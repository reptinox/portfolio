/** Resolve public/ files relative to the deployment, including repository Pages sites. */
export function assetUrl(path: string): string {
  if (/^(?:https?:|mailto:|tel:)/i.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}
