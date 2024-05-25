import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "../components/footer";
type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="felx-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>

  );
};

export default Layout;