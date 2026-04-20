import Portfolio from "@/models/Portfolio";
import { connectDB } from "@/db/dbConfig";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import PortfolioGrid from "@/components/Card/PortfolioGrid/PortfolioGrid";

const PortfolioPage = async () => {
  await connectDB(); // ডাটাবেস কানেক্ট করা
  const projects = await Portfolio.find().sort({ createdAt: -1 }); // সব প্রজেক্ট আনা

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#0b2f1d] py-24 md:py-32 px-6 mt-12 md:px-12 overflow-hidden w-full">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f96f1f]/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            {/* Eyebrow Text (Small Title) */}
            <p className="text-[#f96f1f] font-bold tracking-wider text-sm uppercase mb-4">
              Portfolio
            </p>

            {/* Main Heading */}
            <h1 className="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] font-extrabold text-white mb-6 uppercase tracking-tight">
              Work that moved
                  <span className="text-[#f96f1f]"> the needle</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-gray-300 text-lg md:text-[20px] max-w-2xl font-normal leading-relaxed">
            A glimpse into campaigns, creatives and brand systems we crafted for ambitious businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-24">
          
            <PortfolioGrid data={JSON.parse(JSON.stringify(projects))} />
          </div>
        </div>
      </section>

      <CallToAction
        title="Like what you see? "
        description="Let's build yours next."
        primaryBtnText="Get Free Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="WhatsApp Now"
        secondaryBtnLink="https://wa.me/8801700000000"
       gradientClass="from-[#0d5435] via-[#0b4129] to-[#083320]"
      />
    </div>
  );
};

export default PortfolioPage;
