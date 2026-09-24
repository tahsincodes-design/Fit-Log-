import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white min-h-screen flex flex-col justify-between antialiased">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="grow mx-auto w-full ">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}