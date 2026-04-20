import BuiltForResults from "@/components/main/home/BuiltForResults/BuiltForResults";
import Hero from "@/components/main/home/Hero/Hero";
import TrustMarquee from "@/components/main/home/Marquee/TrustMarquee";
import ProcessSection from "@/components/main/home/ProcessItem/ProcessItem";
import Services from "@/components/main/home/Services/Services";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import PortfolioGrid from "@/components/Card/PortfolioGrid/PortfolioGrid";
import { connectDB } from "@/db/dbConfig";
import Portfolio from "@/models/Portfolio";

const Home = async () => {
  await connectDB();
  const projects = await Portfolio.find().sort({ createdAt: -1 }).limit(3);

  return (
    <div>
      <Hero />
      <TrustMarquee />
      <Services />

      <div className="container mx-auto px-6 bg-white py-20">
        <p className="text-[#f96f1f] font-bold text-center uppercase tracking-[0.2em] text-[13px]">
          Recent work
        </p>
        <h1 className="text-[36px] text-center md:text-[48px] font-extrabold text-[#0d6335] mb-4 tracking-tight leading-tight uppercase">
          Portfolio that performs
        </h1>
        <PortfolioGrid
          data={JSON.parse(JSON.stringify(projects))}
          showSeeMoreBtn={true}
        />
      </div>

      <ProcessSection />
      <BuiltForResults />
      <CallToAction
        title="Ready to grow your business?"
        description="Get a free consultation and a custom growth plan in 24 hours."
        primaryBtnText="Get Free Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="WhatsApp Now"
        secondaryBtnLink="https://wa.me/8801700000000"
       gradientClass="from-[#0d5435] via-[#0b4129] to-[#083320]"
      />
    </div>
  );
};

export default Home;
