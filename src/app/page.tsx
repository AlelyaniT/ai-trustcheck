export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">🤖 AI-TrustCheck</h1>
      <p className="text-xl text-center max-w-xl mb-6">
        Assess and enhance the trustworthiness of AI-powered healthcare systems.
        Designed for transparency, accountability, and stakeholder confidence.
      </p>
      <a
        href="#"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Launch the Tool
      </a>
    </main>
  );
}