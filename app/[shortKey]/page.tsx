import { redirect } from "next/navigation";
import Link from "next/link";

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ shortKey: string }>;
}) {
  const { shortKey } = await params;
  console.log("shortKey:", shortKey);

  const BACKEND_URL =
    process.env.BACKEND_URL || "http://localhost:8080";
  const res = await fetch(`${BACKEND_URL}/${shortKey}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
          <p className="text-gray-600 mb-6">Page not found — this short link doesn't exist or has expired.</p>
          <Link href="/" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Go home</Link>
        </div>
      </div>
    );
  }

  const longUrl = await res.text();

  redirect(longUrl);
}
