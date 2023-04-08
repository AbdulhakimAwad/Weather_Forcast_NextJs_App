/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;
module.exports = {
  env: {
    _WEATHER_APP_KEY: `02c90dfcbabd99f782f039cf94ad52d1`,
  },
  images: {
    domains: ["images.unsplash.com", "openweathermap.org"],
  },
};
