"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, X } from "lucide-react";
import { uploadService } from "@/actions/serviceAction";
import Image from "next/image";
import toast from "react-hot-toast";

const ImageForm = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null); // ফর্ম রেফারেন্স
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // সরাসরি কারেন্ট টার্গেট থেকে FormData নেয়া
    const formData = new FormData(e.currentTarget);

    const result = await uploadService(formData);

    if (result.success) {
      toast.success("upload successfully");
      formRef.current?.reset();
      setPreview(null);
      router.push("/dhaka-staff-portal/services");
      router.refresh();
    } else {
      toast.error("Error: " + result.error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <button
        onClick={() => router.back()}
        className="self-start mb-6 flex items-center text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to Gallery
      </button>

      <div className="w-full max-w-2xl bg-white rounded-[20px] shadow-sm border p-10">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Add New Service Image
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              name="categoryName"
              list="categories"
              required
              className="w-full bg-gray-50 border p-3 rounded-xl outline-none"
              placeholder="Enter or select category"
            />
            <datalist id="categories">
              <option value="UI/UX Design" />
              <option value="Web Development" />
              <option value="Digital Marketing" />
              <option value="Image Editing" />
              <option value="Lead Generation" />
              <option value="SEO Optimization" />
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Thumbnail Image
            </label>
            <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-50 min-h-[200px]">
              {/* ইনপুট ফিল্ড সবসময় ফর্মে থাকতে হবে যাতে FormData ডাটা পায় */}
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required={!preview}
                className={`absolute inset-0 z-10 cursor-pointer ${
                  preview ? "hidden" : "opacity-0"
                }`}
              />

              {preview ? (
                <div className="relative w-full h-48 z-20">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-contain rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setPreview(null)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 shadow-lg"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <Upload className="mx-auto mb-2" size={32} />
                  <p className="text-sm font-medium text-blue-400">
                    Click to upload
                  </p>
                  <p className="text-xs">Max 2MB</p>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#34A096] hover:bg-[#2a817a] text-white font-bold py-4 rounded-xl disabled:bg-gray-400 transition-colors"
          >
            {loading ? "Uploading to Cloudinary..." : "Publish Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageForm;
