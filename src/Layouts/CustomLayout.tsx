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
      <div className="mx-auto  w-100 bg-white text-black   min-h-[95vh]">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
