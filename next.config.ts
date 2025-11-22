import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Excluir archivos problemáticos de node_modules durante el build
  transpilePackages: [
    "@privy-io/react-auth",
    "@privy-io/wagmi",
    "@reown/appkit",
    "@reown/appkit-controllers",
    "@reown/appkit-utils",
  ],
  // Webpack config para producción (evita issues de Turbopack con Web3)
  webpack: (config, { isServer }) => {
    // Excluir dependencias problemáticas que causan errores en el browser
    config.externals.push("pino-pretty", "lokijs", "encoding");

    // Polyfills para Node.js modules en el navegador
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };

    // Fix para @noble/hashes - resolver extensiones .js correctamente
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx', '.jsx'],
    };

    return config;
  },
};

export default nextConfig;
