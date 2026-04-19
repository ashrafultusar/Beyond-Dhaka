import BuiltForResults from "@/components/main/home/BuiltForResults/BuiltForResults";
import Gallery from "@/components/main/home/Gallery/Gallery";
import Hero from "@/components/main/home/Hero/Hero";
import Services from "@/components/main/home/Services/Services";
import Reviews from "@/components/main/reviews/Reviews";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import PortfolioGrid from "@/components/shared/PortfolioGrid/PortfolioGrid";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <BuiltForResults />
     <div className="container mx-auto px-6 max-w-[1200px]">
     <PortfolioGrid limit={3} showSeeMoreBtn={true} />
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

export default page;
