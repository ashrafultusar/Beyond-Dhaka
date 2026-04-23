import { connectDB } from "@/db/dbConfig";
import Service from "@/models/ServiceImage";

export const getServices = async () => {
  try {
    await connectDB();
    const services = await Service.find({}).sort({ createdAt: -1 });
    return { success: true, data: JSON.parse(JSON.stringify(services)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getServiceImagesByCategory = async (categoryName: string) => {
  try {
    await connectDB();
    const images = await Service.find({ categoryName }).sort({ createdAt: -1 });
    return { success: true, data: JSON.parse(JSON.stringify(images)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};