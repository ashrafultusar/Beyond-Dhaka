import { connectDB } from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio";
import EditPortfolioForm from "@/components/admin/EditPortfolio/EditPortfolioForm";
import { notFound } from "next/navigation";

export default async function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    await connectDB();
    const portfolio = await Portfolio.findById(id).lean() as any;

    if (!portfolio) {
        notFound();
    }

    // Serialize Mongoose object to pass to client component
    const serializedPortfolio = {
        _id: portfolio._id.toString(),
        title: portfolio.title,
        category: portfolio.category,
        projectUrl: portfolio.projectUrl || "",
        image: portfolio.image,
        countryFlag: portfolio.countryFlag,
    };

    return <EditPortfolioForm portfolio={serializedPortfolio} />;
}
