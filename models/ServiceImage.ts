import { Schema, model, models } from "mongoose";

const ServiceImageSchema = new Schema({
    categoryName: { type: String, required: true },
    imageUrl: { type: String, required: true },
}, { timestamps: true });

const ServiceImage = models.ServiceImage || model("ServiceImage", ServiceImageSchema);
export default ServiceImage;