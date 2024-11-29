/** @type {import('next').NextConfig} */

export default {
  async redirects() {
    return [
      {
        source: "/strato",
        destination: "https://github.com/crnicholson/StratoSoar-MK3",
        permanent: true, // 308 for permanent redirect
      },
    ];
  },
};
