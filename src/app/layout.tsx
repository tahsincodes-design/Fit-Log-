import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import "./globals.css";
import { WorkoutProvider } from "@/Context/WorkoutContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import type { Metadata } from 'next';

// Export metadata configuration
export const metadata: Metadata = {
  title: 'FitLog — Workout Library',
  description: 'Train hard, log honest.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white min-h-screen antialiased">
        <WorkoutProvider>

          <Navbar />
          <main className="grow mx-auto w-full">
            {children}
          </main>
          <Footer />

          <ToastContainer position="top-right" autoClose={3000} theme="dark" />

        </WorkoutProvider>
      </body>
    </html>
  );
}