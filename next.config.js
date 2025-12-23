// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Handle @splinetool/react-spline
    config.resolve.alias = {
      ...config.resolve.alias,
      "@splinetool/react-spline$":
        "@splinetool/react-spline/dist/react-spline.js",
    };

    return config;
  },
  transpilePackages: ["@splinetool/runtime", "@splinetool/react-spline"],
};

module.exports = nextConfig;
