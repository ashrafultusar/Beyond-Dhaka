import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { servicesData, generateSlug } from "@/data/servicesData";
import { getServiceImagesByCategory } from "@/lib/data/getService";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import ImageLightbox from "@/components/shared/ImageLightbox/ImageLightbox";

interface ServiceImage {
    _id: string;
    categoryName: string;
    imageUrl: string;
    createdAt: string;
}

const ServiceDetailPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    // Find service by matching generated slug from title
    const service = servicesData.find((s) => generateSlug(s.title) === slug);

    if (!service) {
        notFound();
    }

    // Fetch images using categoryName (same as service.title)
    const result = await getServiceImagesByCategory(service.title);
    const images: ServiceImage[] = result.success ? result.data : [];

    return (
        <main>
            {/* Hero Banner */}
            <section className="relative bg-[#0b2f1d] py-24 md:py-32 px-6 mt-12 md:px-12 overflow-hidden w-full">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f96f1f]/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-3xl text-left">
                        {/* Back Link */}
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-[#f96f1f] font-semibold text-sm uppercase tracking-wider mb-6 hover:gap-3 transition-all duration-300"
                        >
                            <ArrowLeft size={16} />
                            All Services
                        </Link>

                        {/* Main Heading */}
                        <h1 className="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] font-extrabold text-white mb-6 uppercase tracking-tight">
                            {service.title}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-lg md:text-[20px] max-w-2xl font-normal leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="container mx-auto px-6 py-16 bg-white">
                {images.length > 0 ? (
                    <>
                        <p className="text-[#f96f1f] font-bold uppercase tracking-[0.2em] text-[13px] mb-3 text-center">
                            Our Work
                        </p>
                        <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#0d6335] mb-12 tracking-tight leading-tight uppercase text-center">
                            {service.title} Portfolio
                        </h2>

                        <ImageLightbox images={images} altPrefix={service.title} />
                    </>

                ) : (
                    <div className="text-center py-20">
                        <p className="text-[#718a7c] text-lg">
                            No images available for this service yet. Check back soon!
                        </p>
                    </div>
                )}
            </section>

            <CallToAction
                title="Interested in this service?"
                description="Get a free consultation and we'll create a custom plan for your needs."
                primaryBtnText="Get Free Consultation"
                primaryBtnLink="/contact"
                secondaryBtnText="WhatsApp Now"
                secondaryBtnLink="https://wa.me/8801700000000"
                gradientClass="from-[#0d5435] via-[#0b4129] to-[#083320]"
            />
        </main>
    );
};

export default ServiceDetailPage;
