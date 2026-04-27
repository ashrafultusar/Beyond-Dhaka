import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Layers, Globe, Calendar } from "lucide-react";
import { getPortfolioById } from "@/lib/data/data";
import CallToAction from "@/components/shared/CallToAction/CallToAction";

const PortfolioDetailPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const portfolio = await getPortfolioById(id);

    if (!portfolio) {
        notFound();
    }

    const formattedDate = portfolio.createdAt
        ? new Date(portfolio.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;

    return (
        <main className="min-h-screen bg-[#fafcfb]">
            {/* ═══════════ HERO SECTION ═══════════ */}
            <section className="relative bg-[#0b2f1d] overflow-hidden mt-12">
                {/* Ambient Glow Effects */}
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#f96f1f]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0d6335]/30 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[70vh]">
                        {/* Left — Text Content */}
                        <div className="pt-24 pb-12 lg:py-32 lg:pr-12">
                            {/* Back Link */}
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 text-[#f96f1f] font-semibold text-sm uppercase tracking-wider mb-8 hover:gap-3 transition-all duration-300 group"
                            >
                                <ArrowLeft
                                    size={16}
                                    className="group-hover:-translate-x-1 transition-transform"
                                />
                                All Projects
                            </Link>

                            {/* Category Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full text-[#f97316] text-[11px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
                                    <Layers size={14} />
                                    {portfolio.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] font-extrabold text-white mb-6 tracking-tight">
                                {portfolio.title}
                            </h1>

                            {/* Meta Info Row */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
                                {/* Country Flag */}
                                {portfolio.countryFlag && (
                                    <div className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                        <div className="relative w-7 h-5 rounded-sm overflow-hidden border border-white/20 shadow-sm">
                                            <Image
                                                src={portfolio.countryFlag}
                                                alt="Client Country"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-white/70 text-[13px] font-medium">
                                            Client Region
                                        </span>
                                    </div>
                                )}

                                {/* Date */}
                                {formattedDate && (
                                    <div className="flex items-center gap-2 text-white/50 text-[13px] font-medium">
                                        <Calendar size={14} />
                                        {formattedDate}
                                    </div>
                                )}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                {portfolio.projectUrl && (
                                    <a
                                        href={portfolio.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#f97316] hover:bg-[#ea6c10] text-white text-[14px] font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#f97316]/30 hover:scale-105"
                                    >
                                        <Globe size={18} />
                                        Visit Live Site
                                        <ExternalLink size={14} className="opacity-70" />
                                    </a>
                                )}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/20 text-white text-[14px] font-bold rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    Start Similar Project
                                </Link>
                            </div>
                        </div>

                        {/* Right — Hero Image */}
                        <div className="relative lg:h-[70vh] h-[50vh] rounded-t-2xl lg:rounded-none overflow-hidden">
                            {/* Decorative border glow */}
                            <div className="absolute -inset-px bg-gradient-to-br from-[#f97316]/30 via-transparent to-[#0d6335]/30 rounded-t-2xl lg:rounded-none z-10 pointer-events-none"></div>

                            <Image
                                src={portfolio.image}
                                alt={portfolio.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />

                            {/* Gradient overlay for text readability on mobile */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2f1d]/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#0b2f1d]/40 lg:via-transparent lg:to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ PROJECT SHOWCASE — Full Width Image ═══════════ */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <p className="text-[#f96f1f] font-bold uppercase tracking-[0.2em] text-[12px] md:text-[13px] mb-3">
                            Project Showcase
                        </p>
                        <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#0d6335] tracking-tight leading-tight">
                            Visual Preview
                        </h2>
                    </div>

                    {/* Large Showcase Image */}
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-[#0b2f1d]/10 border border-[#e5f1e8] group">
                        <Image
                            src={portfolio.image}
                            alt={`${portfolio.title} — Full Preview`}
                            fill
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />

                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2f1d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Bottom label */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-[#0b2f1d]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                            <p className="text-white/90 text-sm font-semibold">
                                {portfolio.title}
                            </p>
                            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">
                                {portfolio.category}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ PROJECT INFO CARDS ═══════════ */}
            <section className="bg-[#f5f9f7] py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-[1000px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Category Card */}
                        <div className="bg-white rounded-2xl p-7 border border-[#e5f1e8] hover:shadow-lg hover:border-[#f97316]/20 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#0d6335]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#f97316]/10 transition-colors duration-300">
                                <Layers
                                    size={22}
                                    className="text-[#0d6335] group-hover:text-[#f97316] transition-colors duration-300"
                                />
                            </div>
                            <p className="text-[11px] uppercase tracking-[0.15em] text-[#718a7c] font-bold mb-1.5">
                                Category
                            </p>
                            <p className="text-[#1a3a2a] text-[18px] font-bold">
                                {portfolio.category}
                            </p>
                        </div>

                        {/* Date Card */}
                        <div className="bg-white rounded-2xl p-7 border border-[#e5f1e8] hover:shadow-lg hover:border-[#f97316]/20 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#0d6335]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#f97316]/10 transition-colors duration-300">
                                <Calendar
                                    size={22}
                                    className="text-[#0d6335] group-hover:text-[#f97316] transition-colors duration-300"
                                />
                            </div>
                            <p className="text-[11px] uppercase tracking-[0.15em] text-[#718a7c] font-bold mb-1.5">
                                Completed
                            </p>
                            <p className="text-[#1a3a2a] text-[18px] font-bold">
                                {formattedDate || "—"}
                            </p>
                        </div>

                        {/* Live URL Card */}
                        <div className="bg-white rounded-2xl p-7 border border-[#e5f1e8] hover:shadow-lg hover:border-[#f97316]/20 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#0d6335]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#f97316]/10 transition-colors duration-300">
                                <Globe
                                    size={22}
                                    className="text-[#0d6335] group-hover:text-[#f97316] transition-colors duration-300"
                                />
                            </div>
                            <p className="text-[11px] uppercase tracking-[0.15em] text-[#718a7c] font-bold mb-1.5">
                                Live Website
                            </p>
                            {portfolio.projectUrl ? (
                                <a
                                    href={portfolio.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#f97316] text-[16px] font-bold hover:underline inline-flex items-center gap-1.5"
                                >
                                    Visit Site
                                    <ExternalLink size={14} />
                                </a>
                            ) : (
                                <p className="text-[#1a3a2a] text-[18px] font-bold">—</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA SECTION ═══════════ */}
            <CallToAction
                title="Loved this project?"
                description="Let's create something equally impactful for your brand."
                primaryBtnText="Get Free Consultation"
                primaryBtnLink="/contact"
                secondaryBtnText="WhatsApp Now"
                secondaryBtnLink="https://wa.me/8801700000000"
                gradientClass="from-[#0d5435] via-[#0b4129] to-[#083320]"
            />
        </main>
    );
};

export default PortfolioDetailPage;
