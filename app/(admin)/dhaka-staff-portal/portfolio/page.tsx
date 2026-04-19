import Link from "next/link";
import Image from "next/image";
import { Plus, Trash2, ExternalLink, PencilLine } from "lucide-react";
import { connectDB } from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio";
import { deletePortfolioAction } from "@/actions/portfolioActions";

export default async function ManagePortfolio() {
  await connectDB();
  const projects = await Portfolio.find().sort({ createdAt: -1 });

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Portfolio Management</h1>
          <p className="text-gray-500">Manage your showcase projects</p>
        </div>
        <Link
          href="/dhaka-staff-portal/portfolio/add-portfolio"
          className="flex items-center gap-2 bg-[#2A9D8F] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#23857a] transition-all"
        >
          <Plus size={20} />
          Add New Project
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id.toString()} className="bg-white  rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Image Preview */}
            <div className="relative h-48 w-full bg-gray-100">
              {project.image ? (
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-xs">No Image Preview</div>
              )}
              <div className="absolute top-3 right-3">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[#2A9D8F] shadow-sm uppercase">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">{project.title}</h3>
              {project.projectUrl && (
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                  <ExternalLink size={14} />
                  <span className="truncate">{new URL(project.projectUrl).hostname}</span>
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-xs text-gray-400 italic">
                  {new Date(project.createdAt).toLocaleDateString()}
                </span>

                <div className="flex items-center gap-2">
                  {/* Edit Button */}
                  <Link
                    href={`/dhaka-staff-portal/portfolio/edit/${project._id.toString()}`}
                    className="p-2 text-[#2A9D8F] hover:bg-teal-50 rounded-lg transition-colors"
                  >
                    <PencilLine size={20} />
                  </Link>

                  {/* Delete Button */}
                  <form action={async () => {
                    "use server";
                    await deletePortfolioAction(project._id.toString());
                  }}>
                    <button
                      type="submit"
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">
            No projects found. Start by adding one!
          </p>
        </div>
      )}
    </div>
  );
}