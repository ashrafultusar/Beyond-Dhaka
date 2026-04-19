import BuiltForResults from "@/components/main/home/BuiltForResults/BuiltForResults";
import Hero from "@/components/main/home/Hero/Hero";
import Services from "@/components/main/home/Services/Services";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import PortfolioGrid from "@/components/shared/PortfolioGrid/PortfolioGrid";
import { connectDB } from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio";

const Home = async () => {
  await connectDB();
  const projects = await Portfolio.find().sort({ createdAt: -1 }).limit(3);

  return (
    <div>
      <Hero />
      <Services />
      <BuiltForResults />
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
       
        <PortfolioGrid
          data={JSON.parse(JSON.stringify(projects))}
          showSeeMoreBtn={true}
        />
      </div>
      <CallToAction
        title="Ready to grow your business?"
        description="Get a free consultation and a custom growth plan in 24 hours."
        primaryBtnText="Get Free Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="WhatsApp Now"
        secondaryBtnLink="https://wa.me/8801700000000"
        gradientClass="from-[#7a48fb] to-[#9b6cfb]"
      />
    </div>
  );
};

export default Home;
