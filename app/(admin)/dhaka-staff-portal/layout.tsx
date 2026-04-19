import Sidebar from "@/components/admin/Sidebar/Sidebar";
import { auth } from "@/auth"; 

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  const session = await auth();
  
  const adminName = session?.user?.name || "Admin User";
 
  const adminRole = session?.user?.role || "Super Admin";

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Desktop Top Header */}
        <header className="hidden lg:flex h-16 bg-white border-b border-gray-200 items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
          <div>
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Admin Portal</h2>
            <p className="text-xs text-[#2A9D8F] font-bold">System Management</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800 leading-none">
                {adminName}
              </p>
              <span className="text-[10px] text-[#2A9D8F] font-bold uppercase tracking-tighter">
                {adminRole}
              </span>
            </div>
            
            {/* প্রোফাইল আইকন */}
            <div className="w-10 h-10 bg-gradient-to-br from-[#2A9D8F] to-[#23857a] rounded-xl flex items-center justify-center text-white text-xs font-black shadow-lg shadow-[#2A9D8F]/20 uppercase">
              {adminName.substring(0, 2)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}