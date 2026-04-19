"use server";

import { uploadImage } from '@/lib/cloudinary';
import { connectDB } from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Create Project
export async function createPortfolioAction(formData: FormData) {
    try {
        await connectDB();
        const title = formData.get("title") as string;
        const category = formData.get("category") as string;
        const projectUrl = formData.get("projectUrl") as string;
        const imageFile = formData.get("image") as File;

        let imageUrl = "";
        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, "portfolio");
        }

        await Portfolio.create({ title, category, projectUrl, image: imageUrl });
    } catch (error) {
        return { error: "Failed to create project." };
    }

    revalidatePath("/dhaka-staff-portal/portfolio");
    redirect("/dhaka-staff-portal/portfolio");
}

// Update Project
export async function updatePortfolioAction(id: string, formData: FormData) {
    try {
        await connectDB();
        const title = formData.get("title") as string;
        const category = formData.get("category") as string;
        const projectUrl = formData.get("projectUrl") as string;
        const imageFile = formData.get("image") as File;

        const updateData: any = { title, category, projectUrl };

        if (imageFile && imageFile.size > 0) {
            updateData.image = await uploadImage(imageFile, "portfolio");
        }

        await Portfolio.findByIdAndUpdate(id, updateData);
    } catch (error) {
        return { error: "Update failed" };
    }

    revalidatePath("/dhaka-staff-portal/portfolio");
    redirect("/dhaka-staff-portal/portfolio");
}

// Delete Project
export async function deletePortfolioAction(id: string) {
    try {
        await connectDB();
        await Portfolio.findByIdAndDelete(id);
        revalidatePath("/dhaka-staff-portal/portfolio");
        return { success: true };
    } catch (error) {
        return { error: "Delete failed" };
    }
}