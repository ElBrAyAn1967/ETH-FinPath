/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpilar paquetes problemáticos de node_modules
  transpilePackages: [
    "@privy-io/react-auth",
    "@privy-io/wagmi",
    "@reown/appkit",
    "@reown/appkit-controllers",
    "@reown/appkit-utils",
    "@noble/hashes",
    "@noble/curves",
    "@noble/ciphers",
  ],

  // Deshabilitar generación estática completamente
  output: "standalone",

  // Webpack config para resolver módulos correctamente
  webpack: (config, { isServer }) => {
    // Excluir dependencias de Node.js que causan errores en el browser
    if (!isServer) {
      config.externals.push(
        "pino-pretty",
        "lokijs",
        "encoding",
        "@react-native-async-storage/async-storage"
      );
    }

    // Polyfills para módulos de Node.js en el navegador
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
      path: false,
      os: false,
    };

    // Resolver extensiones .js correctamente (fix para @noble/hashes)
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx", ".jsx"],
    };

    // Asegurar que se resuelvan todas las extensiones
    config.resolve.extensions = [
      ".js",
      ".mjs",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
    ];

    return config;
  },
};

export default nextConfig;
