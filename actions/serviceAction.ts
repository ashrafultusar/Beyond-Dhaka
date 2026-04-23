"use server";

import { connectDB } from "@/db/dbConfig";
import { uploadImage } from "@/lib/cloudinary";
import ServiceImage from "@/models/ServiceImage";
import { revalidatePath } from "next/cache";

export type ActionResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

// সার্ভিস আপলোড ফাংশন
export const uploadService = async (formData: FormData): Promise<ActionResponse> => {
  try {
    await connectDB();

    const categoryName = formData.get("categoryName") as string;
    const file = formData.get("image") as File | null;

    if (!categoryName || !file || file.size === 0) {
      return { success: false, error: "সবগুলো তথ্য সঠিক ভাবে পূরণ করুন!" };
    }

    const MAX_FILE_SIZE = 10 * 1024 * 1024; 
    if (file.size > MAX_FILE_SIZE) {
      return { success: false, error: "ইমেজ ১০ এমবি এর বেশি হতে পারবে না।" };
    }

    const imageUrl = await uploadImage(file, "services");

    if (!imageUrl) {
      return { success: false, error: "ইমেজ আপলোড করতে সমস্যা হয়েছে।" };
    }

    const newService = new ServiceImage({ categoryName, imageUrl });
    await newService.save();

    revalidatePath("/dhaka-staff-portal/services");
    return { success: true, message: "সার্ভিস সফলভাবে আপলোড হয়েছে!" };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "কিছু একটা ভুল হয়েছে";
    return { success: false, error: errorMessage };
  }
};

// সার্ভিস ডিলিট ফাংশন
export const deleteService = async (id: string): Promise<ActionResponse> => {
  try {
    await connectDB();
    const deletedItem = await ServiceImage.findByIdAndDelete(id);
    
    if (!deletedItem) {
      return { success: false, error: "আইটেমটি খুঁজে পাওয়া যায়নি।" };
    }

    revalidatePath("/dhaka-staff-portal/services");
    return { success: true, message: "সফলভাবে ডিলিট করা হয়েছে!" };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "ডিলিট করতে সমস্যা হয়েছে";
    return { success: false, error: errorMessage };
  }
};