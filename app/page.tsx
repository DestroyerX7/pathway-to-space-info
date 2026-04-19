import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { LucideCircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header className="fixed left-0 right-0" />

      <section className="relative h-screen flex justify-center items-center">
        <Image
          src="/stars.jpg"
          alt="Stars"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="text-center space-y-4 px-8">
          <h1 className="text-6xl font-bold">Pathway to all things space</h1>

          <p className="text-xl">Discover your interest in the cosmos</p>

          <Button className="px-8 py-6" asChild>
            <Link href="/learn">Learn</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-16 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-4">
        <div className="space-y-4">
          <div className="relative aspect-4/3">
            <Image
              src="/apollo-11-launch.jpg"
              alt="Apollo 11 launch"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <p>
            On July 16, 1969, a Saturn V rocket carrying Neil Armstrong, Buzz
            Aldrin, and Michael Collins lifted off from Kennedy Space Center,
            fulfilling President Kennedy&apos;s 1961 challenge to land on the Moon
            before decade&apos;s end. Four days later, Armstrong and Aldrin descended
            to the lunar surface in the Eagle, while Collins orbited above in
            the command module Columbia. Armstrong&apos;s first steps were broadcast
            live to an estimated 600 million viewers — making it one of the
            most-watched television events in history. The crew returned safely
            to Earth on July 24, completing an eight-day mission that defined a
            generation.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-4/3">
            <Image
              src="/iss.jpg"
              alt="ISS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <p>
            The International Space Station is the largest structure ever built
            in space — stretching 109 meters end to end, roughly the size of a
            football field — and has been continuously inhabited since November
            2000. A joint effort between NASA, Roscosmos, ESA, JAXA, and the
            Canadian Space Agency, it orbits Earth at about 400 kilometers
            altitude, completing a full orbit every 90 minutes at 27,600
            kilometers per hour. Crews of up to seven astronauts live and work
            aboard, conducting thousands of experiments in microgravity. As of
            2025, more than 290 people from 26 countries have visited the
            station.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-4/3">
            <Image
              src="/mars.jpg"
              alt="Mars"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <p>
            Mars, the fourth planet from the Sun, earned its nickname &quot;the Red
            Planet&quot; because iron minerals in its soil oxidize, or rust, giving
            the surface its distinctive color. Though cold and desert-like
            today, NASA missions have found compelling evidence that Mars was
            once warmer and wetter, with ancient riverbeds, lake beds, and
            minerals that only form in the presence of liquid water. Mars
            remains the primary target for future crewed exploration, with NASA
            and SpaceX both working toward human missions to the surface.
          </p>
        </div>
      </section>

      <section className="relative h-screen flex justify-center items-center">
        <Image
          src="/artemis-earthset.jpg"
          alt="Earthset"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="mx-auto max-w-2xl px-8 space-y-4">
          <h1 className="text-6xl font-bold">Artemis</h1>

          <p className="text-xl">
            Learn about NASA&apos;s plan to send astronauts on increasingly difficult
            missions to explore more of the Moon for scientific discovery,
            economic benefits, and to build on our foundation for the first
            crewed missions to Mars.
          </p>

          <Link
            href="/learn/artemis"
            className="inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
          >
            <p className="text-xl font-bold">Moon to Mars</p>
            <LucideCircleArrowRight color="#FC3D21" />
          </Link>
        </div>
      </section>

      <footer className="px-16 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* Top row */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            {/* Branding */}
            <div className="flex flex-col gap-2 max-w-xs">
              <h2 className="text-lg font-semibold tracking-tight">
                Pathway To Space Info
              </h2>
              <p className="text-sm text-muted-foreground">
                Tracking humanity&apos;s journey beyond Earth — from the Moon
                landings to Mars and beyond.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-center">
                  Space Agencies
                </p>
                {[
                  { label: "NASA", href: "https://www.nasa.gov/" },
                  { label: "ESA", href: "https://www.esa.int/" },
                  { label: "JAXA", href: "https://www.jaxa.jp/index_e.html" },
                  { label: "Roscosmos", href: "https://www.roscosmos.ru/en/" },
                  { label: "ISRO", href: "https://www.isro.gov.in/" },
                ].map(({ label, href }) => (
                  <Button
                    key={label}
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-center">
                  Private Sector
                </p>
                {[
                  { label: "SpaceX", href: "https://www.spacex.com/" },
                  { label: "Blue Origin", href: "https://www.blueorigin.com/" },
                  { label: "ULA", href: "https://www.ulalaunch.com/" },
                  {
                    label: "Rocket Lab",
                    href: "https://www.rocketlabusa.com/",
                  },
                  {
                    label: "Virgin Galactic",
                    href: "https://www.virgingalactic.com/",
                  },
                ].map(({ label, href }) => (
                  <Button
                    key={label}
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-center">Learn More</p>
                {[
                  { label: "Space.com", href: "https://www.space.com/" },
                  {
                    label: "The Planetary Society",
                    href: "https://www.planetary.org/",
                  },
                  {
                    label: "Sky & Telescope",
                    href: "https://skyandtelescope.org/",
                  },
                  {
                    label: "Spaceflight Now",
                    href: "https://spaceflightnow.com/",
                  },
                  { label: "NASA Science", href: "https://science.nasa.gov/" },
                ].map(({ label, href }) => (
                  <Button
                    key={label}
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-8 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Pathway To Space Info. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
