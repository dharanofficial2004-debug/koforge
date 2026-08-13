import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";
import MobileBottomBar from "@/components/ui/MobileBottomBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <StickyWhatsApp />
      <MobileBottomBar />
    </>
  );
}
