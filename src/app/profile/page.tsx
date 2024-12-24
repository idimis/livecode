"use client";

import { useState } from "react";
import Header from "@/components/Header";

const Profile = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch(
        "https://api.sepasangselamanya.tech/api/v1/publicupload",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      alert("Image uploaded successfully: " + result.message);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="flex items-center justify-center pt-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Profile Page
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              <input
                type="file"
                onChange={handleImageChange}
                className="p-3 border border-gray-300 rounded-md w-full max-w-xs text-gray-700"
              />
            </div>

            <button
              type="submit"
              className={`w-full p-3 bg-blue-600 text-white rounded-md ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload Image"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
