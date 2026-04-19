import DynamicCTA from "@/components/shared/CallToAction/CallToAction";
import PortfolioGrid from "@/components/shared/PortfolioGrid/PortfolioGrid";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-[#fafcff] py-20 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7a48fb] mb-4 block">
              PORTFOLIO
            </span>
            <h2 className="text-[40px] md:text-[48px] font-bold text-[#0f172a] mb-4 tracking-tight leading-tight">
              Work that <span className="text-[#7a48fb]">speaks</span> for
              itself
            </h2>
            <p className="text-[#64748b] text-[16px] max-w-2xl mx-auto font-medium">
              A selection of recent projects across marketing, design, and image
              editing.
            </p>
          </div>
        </div>
      </section>
      {/* Grid & CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-24">
          
            <PortfolioGrid />
          </div>
        </div>
      </section>{" "}
      <DynamicCTA
        title="Like what you see?"
        description="Let's create something amazing for your business."
        primaryBtnText="Start a Project \u2192"
        primaryBtnLink="/contact"
        gradientClass="from-[#7a48fb] to-[#9b6cfb]"
      />
    </div>
  );
};

export default PortfolioPage;
