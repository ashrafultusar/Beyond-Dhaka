"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trash2, Loader2 } from "lucide-react";

import { toast } from "react-hot-toast";
import { deleteService } from "@/actions/serviceAction";

interface Service {
    _id: string;
    categoryName: string;
    imageUrl: string;
  }


const ServiceHomePage = ({ initialServices }: { initialServices: Service[] }) => {
  
  const [services, setServices] = useState<Service[]>(initialServices);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    setDeletingId(id);
    try {
      const res = await deleteService(id);
      if (res.success) {
        setServices(prev => prev.filter(s => s._id !== id));
        toast.success("Deleted");
      }
    } catch (error) {
      toast.error("Error deleting");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <div key={service._id} className="border rounded-xl p-4">
          <div className="relative h-48 w-full">
             <Image src={service.imageUrl} alt={service.categoryName} fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3>{service.categoryName}</h3>
            <button onClick={() => handleDelete(service._id)} disabled={deletingId === service._id}>
              {deletingId === service._id ? <Loader2 className="animate-spin" /> : <Trash2 />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceHomePage;