// Deshabilitar generación estática para esta página
export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/80 mb-8">Página no encontrada</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-white/90 transition"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
