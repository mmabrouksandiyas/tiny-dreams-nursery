// src/vite-env.d.ts  (or any global d.ts inside src)
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
