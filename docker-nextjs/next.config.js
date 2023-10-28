/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

// module.exports = {
//   ...nextConfig, // İlk yapılandırmayı dahil edin
//   // Diğer ayarlar buraya eklenebilir
//   webpackDevMiddleware: (config) => {
//     // API rotalarının değişikliklerini izlemesini sağlar
//     config.watchOptions = {
//       poll: 1000, // Değişiklikleri her 1 saniyede bir izler
//       aggregateTimeout: 300, // 300 ms içindeki tüm değişiklikleri birleştirir
//     };
//     return config;
//   },
// };