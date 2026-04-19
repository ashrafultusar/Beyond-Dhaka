"use server";

import { connectDB } from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio";

export async function getPortfolios() {
    try {
        await connectDB();
        const portfolios = await Portfolio.find().sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(portfolios));
    } catch (error) {
        console.error("Failed to fetch portfolios", error);
        return [];
    }
}

export async function getPortfolioById(id: string) {
    try {
        await connectDB();
        const portfolio = await Portfolio.findById(id);
        return JSON.parse(JSON.stringify(portfolio));
    } catch (error) {
        console.error("Failed to fetch portfolio by ID", error);
        return null;
    }
}
