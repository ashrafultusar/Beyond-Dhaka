"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
    images: { _id: string; imageUrl: string }[];
    altPrefix: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, altPrefix }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const isOpen = currentIndex !== null;

    const close = useCallback(() => setCurrentIndex(null), []);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) =>
            prev !== null ? (prev - 1 + images.length) % images.length : null
        );
    }, [images.length]);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev !== null ? (prev + 1) % images.length : null
        );
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, close, goPrev, goNext]);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <div
                        key={img._id}
                        onClick={() => setCurrentIndex(index)}
                        className="group relative overflow-hidden rounded-2xl border border-[#e5f1e8]/70 hover:border-[#f97316]/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 cursor-pointer"
                    >
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={img.imageUrl}
                                alt={`${altPrefix} work sample ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {isOpen && currentIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-md p-8 md:p-16"
                    onClick={close}
                >
                    {/* Close Button */}
                    <button
                        onClick={close}
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer backdrop-blur-sm"
                    >
                        <X className="cursor-pointer" size={28} />
                    </button>

                    {/* Previous Arrow */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-4 md:left-10 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 hover:scale-110 cursor-pointer backdrop-blur-sm"
                        >
                            <ChevronLeft size={32} />
                        </button>
                    )}

                    {/* Image */}
                    <div
                        className="relative w-full h-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[currentIndex].imageUrl}
                            alt={`${altPrefix} work sample ${currentIndex + 1}`}
                            fill
                            className="object-contain drop-shadow-2xl"
                            sizes="85vw"
                            priority
                        />
                    </div>

                    {/* Next Arrow */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 hover:scale-110 cursor-pointer"
                        >
                            <ChevronRight size={32} />
                        </button>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageLightbox;
