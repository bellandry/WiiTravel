import { FloatingScrollTop } from "@/components/floating-scroll-top";
import { Header } from "@/components/header";
import { Download } from "@/components/sections/download";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Partners } from "@/components/sections/partners";
import { RouteMap } from "@/components/sections/route-map";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Partners />
      <Testimonials />
      <RouteMap />
      <HowItWorks />
      <Download />
      <Footer />
      <FloatingScrollTop />
    </main>
  );
}
