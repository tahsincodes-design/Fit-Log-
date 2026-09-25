import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-zinc-800/80 py-6 px-4 sm:px-8">
            <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-wider text-white">
                    <Image
                        src={logo}
                        alt="FITLOG Logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                    />
                    <span>FITLOG</span>
                </Link>

                <p className="text-zinc-500 text-xs sm:text-sm text-center md:text-right font-medium">
                    © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;