import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            About
          </p>
          <h1 className="text-6xl tracking-tight mb-4 font-serif">
            Pathway To Space Info
          </h1>
          <Separator className="mb-8" />
          <p className="text-xl leading-relaxed text-muted-foreground">
            Pathway To Space Info is an educational website dedicated to making
            the the history and science of space exploration accessible to
            everyone — from curious beginners to lifelong enthusiasts.
          </p>
        </section>

        {/* Body */}
        <section className="max-w-6xl mx-auto px-8 pb-16 flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-serif">Our Mission</h2>
            <Separator />
            <p className="text-muted-foreground leading-relaxed">
              Space exploration is one of humanity&apos;s greatest achievements,
              yet the history, science, and ambition behind it can feel distant
              or overwhelming. Pathway To Space Info exists to close that gap —
              breaking down complex missions, spacecraft, and discoveries into
              clear, engaging stories that anyone can follow and appreciate.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-serif">What You&apos;ll Find Here</h2>
            <Separator />
            <p className="text-muted-foreground leading-relaxed">
              From the Apollo Moon landings of the 1960s to the Artemis program
              pushing humanity back toward the lunar surface, from the Space
              Shuttle era to life aboard the International Space Station, and
              from our own solar system out to the farthest reaches of the
              observable universe — Pathway To Space Info covers the full arc of
              human spaceflight and astronomical discovery.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-serif">Built for Curiosity</h2>
            <Separator />
            <p className="text-muted-foreground leading-relaxed">
              No background in science or engineering is required. Whether
              you&apos;re a student doing research, a parent exploring with your
              kids, or simply someone who looked up at the night sky and wanted
              to know more — this site is for you. Every article is written to
              inform, inspire, and invite you to look a little further.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
