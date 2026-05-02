"use client";

import { updatePortfolioAction } from "@/actions/portfolioActions";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Image as ImageIcon, Loader2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

interface Portfolio {
  _id: string;
  title: string;
  category: string;
  projectUrl?: string;
  image: string;
  countryFlag: string;
}

export default function EditPortfolioForm({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  const [loading, setLoading] = useState(false);
  const [flagPreview, setFlagPreview] = useState<string | null>(
    portfolio.countryFlag || null
  );
  const [imagePreview, setImagePreview] = useState<string | null>(
    portfolio.image || null
  );
  const flagInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (flagPreview?.startsWith("blob:")) URL.revokeObjectURL(flagPreview);
      if (imagePreview?.startsWith("blob:")) URL.revokeObjectURL(imagePreview);
    };
  }, [flagPreview, imagePreview]);

  const handleFilePreview = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (url: string | null) => void,
    oldUrl: string | null
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (oldUrl?.startsWith("blob:")) URL.revokeObjectURL(oldUrl);
      const url = URL.createObjectURL(file);
      setter(url);
    }
  };

  const clearPreview = (
    setter: (url: string | null) => void,
    inputRef: React.RefObject<HTMLInputElement | null>,
    oldUrl: string | null
  ) => {
    if (oldUrl?.startsWith("blob:")) URL.revokeObjectURL(oldUrl);
    setter(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await updatePortfolioAction(portfolio._id, formData);

    if (result?.error) {
      toast.error(result.error);
      setLoading(false);
    } else {
      toast.success("Project updated successfully!");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link
        href="/dhaka-staff-portal/portfolio"
        className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Gallery
      </Link>

      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <h1 className="text-black text-2xl font-bold mb-6">Edit Project</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Project Title
              </label>
              <input
                name="title"
                defaultValue={portfolio.title}
                required
                placeholder="e.g. Real Estate App"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Category
              </label>
              <select
                name="category"
                defaultValue={portfolio.category}
                required
                className="w-full px-4 py-3 rounded-xl border text-black border-gray-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none transition-all"
              >
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Image Editing">Image Editing</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="SEO Optimization">SEO Optimization</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Live Project URL (Optional)
            </label>
            <input
              name="projectUrl"
              defaultValue={portfolio.projectUrl}
              type="url"
              placeholder="https://example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2A9D8F] text-black  focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Country Flag
              </label>
              <div
                className={`relative rounded-xl p-6 transition-colors ${
                  flagPreview
                    ? "border-2 border-[#2A9D8F] bg-gray-50"
                    : "border-2 border-dashed border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  ref={flagInputRef}
                  type="file"
                  name="countryFlag"
                  accept="image/*"
                  onChange={(e) =>
                    handleFilePreview(e, setFlagPreview, flagPreview)
                  }
                  className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${
                    flagPreview ? "pointer-events-none" : ""
                  }`}
                />
                {flagPreview ? (
                  <div className="flex flex-col items-center justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        clearPreview(setFlagPreview, flagInputRef, flagPreview)
                      }
                      className="absolute top-2 right-2 z-20 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-md"
                    >
                      <X size={14} />
                    </button>
                    <Image
                      src={flagPreview}
                      alt="Flag preview"
                      width={120}
                      height={80}
                      className="rounded-lg object-contain max-h-[80px]"
                    />
                    <p className="text-xs text-center text-[#2A9D8F] font-medium mt-2">
                      Flag selected ✓
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                    <span className="text-3xl">🏳️</span>
                    <p className="text-sm">Upload New Flag</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Thumbnail Image
              </label>
              <div
                className={`relative rounded-xl p-6 transition-colors ${
                  imagePreview
                    ? "border-2 border-[#2A9D8F] bg-gray-50"
                    : "border-2 border-dashed border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  ref={imageInputRef}
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) =>
                    handleFilePreview(e, setImagePreview, imagePreview)
                  }
                  className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${
                    imagePreview ? "pointer-events-none" : ""
                  }`}
                />
                {imagePreview ? (
                  <div className="flex flex-col items-center justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        clearPreview(
                          setImagePreview,
                          imageInputRef,
                          imagePreview
                        )
                      }
                      className="absolute top-2 right-2 z-20 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-md"
                    >
                      <X size={14} />
                    </button>
                    <Image
                      src={imagePreview}
                      alt="Thumbnail"
                      width={200}
                      height={130}
                      className="rounded-lg object-cover max-h-[100px]"
                    />
                    <p className="text-xs text-center text-[#2A9D8F] font-medium mt-2">
                      Image selected ✓
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                    <ImageIcon size={32} />
                    <p className="text-sm">Upload New Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2A9D8F] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#2A9D8F]/20 hover:bg-[#23857a] disabled:opacity-70 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Updating...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
