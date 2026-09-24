import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const HeroBanner = () => {
    return (
        <section className="px-4 py-6 md:px-8 bg-[#0f0f0f]">
            {/* Hero Container Card */}
            <div className="bg-[#18181c] rounded-2xl p-8 md:p-12 lg:p-14 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 border border-zinc-800/60">

                {/* Left Text Content */}
                <div className="flex-1 max-w-xl text-left">
                    {/* Subheading / Category Badge */}
                    <span className="text-lime-400 text-xs font-bold uppercase tracking-widest block mb-3">
                        WORKOUT LIBRARY
                    </span>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-wide uppercase mb-4">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* Call To Action Button */}
                    <button className="btn bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-wider text-xs md:text-sm border-none px-6 rounded-md">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right Illustration/Banner Image */}
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <Image
                        src={banner}
                        alt="Workout Exercise Illustration"
                        width={450}
                        height={450}
                        className="w-full max-w-md object-contain"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default HeroBanner;