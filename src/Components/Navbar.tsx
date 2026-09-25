import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

const Navbar = () => {

    return (

        <div className="navbar bg-[#0C0D10] text-white px-4 sm:px-8 border-b border-zinc-800">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#0C0D10] rounded-box z-50 mt-3 w-52 p-2 shadow text-zinc-300">
                        <li>
                            <Link href="#">Workouts</Link>
                        </li>
                        <li>
                            <Link href="#">My Plan</Link>
                        </li>
                        <li className="mt-2 border-t border-zinc-700 pt-2">
                            <Link href="#" className="flex justify-between">
                                Plan <span className="badge bg-lime-400 text-black border-none font-bold"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex justify-between">
                                Saved <span className="badge bg-lime-400 text-black border-none font-bold"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-wider text-white">
                    <Image
                        src={logo}
                        alt="FITLOG Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"/>
                    <span>FITLOG</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <div className="bg-[#0C0D10] p-1 rounded-full border border-zinc-800 flex items-center gap-1 text-sm font-medium">

                    <Link
                        href="#"
                        className="text-zinc-400 hover:text-[#C2F800]  hover:bg-[#354923] px-5 py-1.5 rounded-full transition">
                        Workouts
                    </Link>

                    <Link
                        href="#"
                        className="text-zinc-400 hover:text-[#C2F800] hover:bg-[#354923] px-5 py-1.5 rounded-full transition">
                        My Plan
                    </Link>
                </div>
            </div>

            <div className="navbar-end flex items-center gap-5 text-sm font-semibold">
                <div className="flex items-center gap-2 cursor-pointer text-zinc-300 hover:text-white transition">
                    <span>Plan</span>
                    <span className="bg-lime-400 text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                    </span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer text-zinc-300 hover:text-white transition">
                    <span>Saved</span>
                    <span className="bg-lime-400 text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;