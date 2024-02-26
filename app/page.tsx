import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-screen  overflow-y-scroll snap-y snap-mandatory z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
}
