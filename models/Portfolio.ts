import { Schema, model, models } from "mongoose";

const PortfolioSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    projectUrl: { type: String }, 
}, { timestamps: true });

const Portfolio = models.Portfolio || model("Portfolio", PortfolioSchema);
export default Portfolio;