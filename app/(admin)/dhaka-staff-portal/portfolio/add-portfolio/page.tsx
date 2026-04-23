"use client";

import { createPortfolioAction } from "@/actions/portfolioActions";
import { useState } from "react";
import { ArrowLeft, Image as ImageIcon, Loader2 } from "lucide-react";
import Link from "next/link";

export default function AddPortfolio() {
  const [loading, setLoading] = useState(false); 

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link
        href="/dhaka-staff-portal/portfolio"
        className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Gallery
      </Link>

      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Add New Project</h1>

        <form
          action={async (formData) => {
            setLoading(true);
            await createPortfolioAction(formData);
            setLoading(false);
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Project Title</label>
              <input
                name="title"
                required
                placeholder="e.g. Real Estate App"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Category</label>
              <select
                name="category"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none transition-all"
              >
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Live Project URL (Optional)</label>
            <input
              name="projectUrl"
              type="url"
              placeholder="https://example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Thumbnail Image</label>
            <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-8 hover:bg-gray-50 transition-colors">
              <input
                type="file"
                name="image"
                required
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                <ImageIcon size={32} />
                <p className="text-sm">Click to upload or drag and drop</p>
                <p className="text-xs">PNG, JPG or WEBP (Max 2MB)</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2A9D8F] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#2A9D8F]/20 hover:bg-[#23857a] disabled:opacity-70 flex items-center justify-center gap-2 transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Uploading...
              </>
            ) : (
              "Publish Project"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}