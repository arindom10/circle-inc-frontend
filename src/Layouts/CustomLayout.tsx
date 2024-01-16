import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div style={{ position: "fixed", width: "100%", zIndex: 999 }}>
        <Navbar />
      </div>
      <div className="mx-auto py-2 md:px-32 sm:px-6 px-2 w-100 bg-white font-black pt-[90px] min-h-[95vh]">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
