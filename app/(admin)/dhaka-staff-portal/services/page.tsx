import ServiceHomePage from '@/components/admin/Services/ServiceHomePage';
import { getServices } from "@/lib/data/getService"; 
import { Plus } from 'lucide-react';
import Link from 'next/link';

const Page = async () => {
  // Fetch data here on the server
  const result = await getServices();
  const services = result.success ? result.data : [];

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Service Image</h1>
          <p className="text-gray-500">Manage your showcase projects</p>
        </div>
        <Link
          href="/dhaka-staff-portal/services/add-service-image"
          className="flex items-center gap-2 bg-[#2A9D8F] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#23857a] transition-all"
        >
          <Plus size={20} />
          Add New Service Image
        </Link>
      </div>
      <ServiceHomePage initialServices={services} />
    </div>
  );
};

export default Page;