import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MassEnergize from "@/components/experiences/MassEnergize";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section className="snap-center">
        <div className="h-screen flex flex-col justify-center items-center text-white">
          <p className="text-tighter leading-3">Let's talk about my</p>
          <h1 className="text-6xl font-bold tracking-[10px]">EXPERIENCES</h1>
        </div>
      </section>
      <section className="snap-start">
        <MassEnergize />
      </section>
      <section className="snap-center">
        <div className="h-screen flex flex-col justify-center items-center text-white">
          <p className="text-tighter leading-3">Now, let's talk about my</p>
          <h1 className="text-6xl font-bold tracking-[10px]">PROJECTS</h1>
          <h1 className="text-6xl font-bold tracking-[10px] text-red-500">WORK IN PROGRESS</h1>
        </div>
        </section>
    </div>
  );
}
