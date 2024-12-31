import Header from "@/Components/HomepageComponents/Header";
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
        <Header />
        {/* <Navbar /> */}
      </div>
      <div className="mx-auto py-2  w-100 bg-white text-black  pt-[50px] min-h-[95vh]">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
