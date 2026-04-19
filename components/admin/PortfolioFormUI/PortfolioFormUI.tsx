import { ImageIcon, Loader2, Link as LinkIcon } from "lucide-react";

interface FormUIProps {
  initialData?: any;
  loading: boolean;
  isEdit?: boolean;
}

export default function PortfolioFormUI({ initialData, loading, isEdit }: FormUIProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Project Title</label>
          <input
            name="title"
            required
            defaultValue={initialData?.title}
            placeholder="e.g. Creative Agency Website"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Category</label>
          <select
            name="category"
            required
            defaultValue={initialData?.category || "UI/UX Design"}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2A9D8F] outline-none bg-white"
          >
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphics Design">Graphics Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Project URL (Optional)</label>
        <div className="relative">
          <LinkIcon className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            name="projectUrl"
            type="url"
            defaultValue={initialData?.projectUrl}
            placeholder="https://example.com"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2A9D8F] outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          {isEdit ? "Update Image (Optional)" : "Project Thumbnail"}
        </label>
        <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-10 hover:bg-gray-50 transition-all text-center group">
          <input
            type="file"
            name="image"
            required={!isEdit}
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-gray-400 group-hover:text-[#2A9D8F]">
            <ImageIcon size={40} strokeWidth={1.5} />
            <p className="text-sm font-medium">Click to upload or drag & drop</p>
            <p className="text-xs">Recommended size: 1200x800px</p>
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
            {isEdit ? "Updating..." : "Publishing..."}
          </>
        ) : (
          <>{isEdit ? "Save Changes" : "Create Project"}</>
        )}
      </button>
    </div>
  );
}