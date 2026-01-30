export default function Features() {
  return (
    <section className="relative max-w-5xl mx-auto">

      <div className="absolute grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Feature 1 */}
      <div className="bg-white shadow-md rounded-2xl p-8">
        <h3 className="text-xl font-bold text-blue-700">⚡ Fast & Easy</h3>
        <p className="mt-2 text-gray-600">
          Shorten URLs in seconds.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white shadow-md rounded-2xl p-8">
        <h3 className="text-xl font-bold text-blue-700">📊 Track Clicks</h3>
        <p className="mt-2 text-gray-600">
          Monitor link analytics.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white shadow-md rounded-2xl p-8">
        <h3 className="text-xl font-bold text-blue-700">✏️ Custom Aliases</h3>
        <p className="mt-2 text-gray-600">
          Create your own short links.
        </p>
      </div>
        </div>

    </section>
  );
}
