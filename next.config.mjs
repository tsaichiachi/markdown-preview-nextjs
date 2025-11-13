// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

// next.config.mjs
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
export default {
  output: "export",
  basePath: isProd ? "/markdown-preview-nextjs" : "",
  assetPrefix: isProd ? "/markdown-preview-nextjs/" : undefined,
  images: { unoptimized: true },
  trailingSlash: true, // 關鍵：讓 export 真的產出完整靜態結構
};
