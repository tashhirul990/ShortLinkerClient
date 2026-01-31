"use client";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UrlShortenerBox() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  const [shortenClicked, setShortenClicked] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);
  const [shareClicked, setShareClicked] = useState(false);

  const notify = () => toast("Copied to clipboard!");

  const handleShorten = async () => {
    if (!longUrl) return alert("Please enter a URL");
    console.log("Long URL:", longUrl);
    setLoading(true);
    console.log("API_URL:", API_URL);
    console.log("BASE_URL:", BASE_URL);

    try {
      const response = await axios.post(
        `${API_URL}/short`,
        {"longUrl": longUrl},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If response.data is already a full URL, use it as-is; otherwise prepend BASE_URL
      const finalUrl = response.data.startsWith("http") 
        ? response.data 
        : `${BASE_URL}/${response.data}`;
      setShortUrl(finalUrl);
    } catch (error) {
      alert("Error while shortening URL");
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    notify();

    setCopyClicked(true);
    setTimeout(() => setCopyClicked(false), 600);
  };

  const handleShare = () => {
    setShareClicked(true);
    setTimeout(() => setShareClicked(false), 600);

    alert("Share feature coming soon 🚀");
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-8 px-4 w-full">
      <ToastContainer />

      <div
        className="
          w-full max-w-2xl bg-white shadow-xl rounded-2xl 
          flex flex-col md:flex-row overflow-hidden
        "
      >
        <input
          type="text"
          placeholder="Enter your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="flex-1 px-6 py-4 outline-none text-gray-700 w-full"
        />

        <button
          onClick={handleShorten}
          className={`
            px-8 py-4 font-semibold text-white w-full md:w-auto
            transition-all duration-300 ease-in-out
            active:scale-95
            ${
              shortenClicked
                ? "bg-indigo-500 scale-105"
                : "bg-blue-600 hover:bg-blue-700"
            }
          `}
        >
          Shorten URL →
        </button>
      </div>

      {/* ✅ Output Box */}
      {shortUrl && (
        <div
          className="
            w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 
            flex flex-col md:flex-row 
            md:justify-between md:items-center
            gap-6
          "
        >
          {/* URL Text */}
          <div className="break-words">
            <p className="text-gray-500 text-sm">Your Shortened URL</p>
            <a
              href={shortUrl}
              target="_blank"
              className="text-blue-600 font-semibold underline"
            >
              {shortUrl}
            </a>
          </div>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`
                px-5 py-2 rounded-xl text-white font-semibold
                w-full sm:w-auto
                transition-all duration-300 ease-in-out
                active:scale-95
                ${
                  copyClicked
                    ? "bg-emerald-400 scale-105"
                    : "bg-green-600 hover:bg-green-700"
                }
              `}
            >
              Copy
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className={`
                px-5 py-2 rounded-xl text-white font-semibold
                w-full sm:w-auto
                transition-all duration-300 ease-in-out
                active:scale-95
                ${
                  shareClicked
                    ? "bg-gray-500 scale-105"
                    : "bg-gray-700 hover:bg-gray-800"
                }
              `}
            >
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
