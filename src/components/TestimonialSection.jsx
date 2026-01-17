import React from 'react';

const TestimonialSection = () => {
    const videos = [
        "/testimonial2.mp4",
        "/testimonial3.mp4",
        "/testimonial4.mp4"
    ];

    return (
        <div className="mb-20">
            <div className="text-center mb-12">
                <span className="text-[#D4AF37] text-xs font-medium tracking-[0.3em] uppercase">Testimonials</span>
                <h3 className="font-serif text-3xl md:text-4xl mt-3">Words from our Patrons</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                    <div key={index} className="relative group rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a]">
                        <div className="aspect-[9/16] w-full">
                            <video
                                controls
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-cover"
                                poster="/logo.png"
                            >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
