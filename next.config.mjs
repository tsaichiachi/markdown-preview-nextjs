// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/markdown-preview-nextjs/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;