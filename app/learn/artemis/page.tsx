import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "NASA Artemis Program",
    href: "https://www.nasa.gov/artemis",
    description: "Official NASA page",
  },
  {
    label: "Artemis 1 Launch",
    href: "https://www.youtube.com/watch?v=aDqMnVBnGwU",
    description: "YouTube",
  },
  {
    label: "What is the Artemis Program?",
    href: "https://www.youtube.com/watch?v=00lJe5RVKBA",
    description: "YouTube",
  },
  {
    label: "Space Launch System Overview",
    href: "https://www.nasa.gov/space-launch-system",
    description: "Official NASA page",
  },
  {
    label: "Orion Spacecraft",
    href: "https://www.nasa.gov/orion",
    description: "Official NASA page",
  },
  {
    label: "The Lunar Gateway Explained",
    href: "https://www.youtube.com/watch?v=dxGrntDnFBc",
    description: "YouTube",
  },
];

export default function Artemis() {
  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/artemis-earthset.jpg"
          alt="Artemis earthset"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="mx-auto max-w-4xl px-8 py-16">
          <p className="mb-4 font-mono text-xs tracking-widest uppercase text-sky-400">
            NASA · 2017-Present
          </p>
          <h1 className="text-6xl font-bold mb-8">Artemis Program</h1>
          <p className="text-xl leading-relaxed">
            Artemis is NASA&apos;s program to return humans to the Moon for the
            first time since Apollo 17 in 1972. Named after the twin sister of
            Apollo in Greek mythology, the program aims to land the first woman
            and first person of color on the lunar surface — and to establish a
            sustainable human presence there as a stepping stone to Mars.
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-16 px-8 py-16">
        {/* Origins */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Return to the Moon?</h2>
          <p className="leading-relaxed">
            When the last Apollo astronaut left the Moon in 1972, it was assumed
            humans would return within a decade. That never happened. Shifting
            budgets, changing priorities, and the enormous cost of deep space
            exploration kept NASA in low Earth orbit for the next fifty years.
            The Artemis program, formally authorized in 2017, represents the
            most serious and sustained effort to change that.
          </p>
          <p className="leading-relaxed">
            Unlike Apollo, which was driven primarily by Cold War politics,
            Artemis is built around long-term scientific and economic goals. The
            lunar south pole — Artemis&apos;s target region — is believed to
            contain billions of tons of water ice in permanently shadowed
            craters. That ice could be split into hydrogen and oxygen, providing
            both breathable air and rocket propellant, making the Moon a
            potential refueling depot for missions deeper into the solar system.
          </p>
          <p className="leading-relaxed">
            NASA also envisions Artemis as the foundation of a broader
            international and commercial effort. More than 30 countries have
            signed the Artemis Accords — a set of principles for peaceful and
            transparent cooperation in space — and private companies are central
            to the program in a way that Apollo never was.
          </p>
        </section>

        {/* SLS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Space Launch System</h2>
          <p className="leading-relaxed">
            Artemis missions launch on the Space Launch System, or SLS —
            NASA&apos;s most powerful rocket since the Saturn V. The initial
            Block 1 configuration stands 322 feet tall and generates 8.8 million
            pounds of thrust at liftoff, making it the most powerful rocket ever
            successfully flown. Its core stage burns liquid hydrogen and liquid
            oxygen, assisted by two solid rocket boosters derived from the Space
            Shuttle program.
          </p>
          <p className="leading-relaxed">
            Development of the SLS took over a decade and cost significantly
            more than originally projected, drawing criticism from those who
            preferred a faster commercial approach. Nonetheless, it performed
            flawlessly on its first flight in November 2022, sending the
            uncrewed Orion capsule on a 25-day journey around the Moon and back.
          </p>
        </section>

        {/* Orion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Orion Capsule</h2>
          <p className="leading-relaxed">
            The crew vehicle for Artemis is Orion, a capsule designed to carry
            up to four astronauts on deep space missions. Larger than the Apollo
            Command Module, Orion has about 50% more interior volume and is
            built to sustain a crew for up to 21 days without docking to another
            spacecraft. It is designed to survive re-entry from lunar return
            speeds — about 25,000 mph — making its heat shield one of the most
            demanding ever built.
          </p>
          <p className="leading-relaxed">
            On the Artemis 1 mission, an uncrewed Orion traveled 40,000 miles
            beyond the Moon — farther from Earth than any human-rated spacecraft
            has ever traveled — before returning and splashing down in the
            Pacific Ocean in December 2022. The capsule&apos;s heat shield and
            systems performed as expected, clearing the way for crewed flights.
          </p>
        </section>

        {/* Artemis 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Artemis 1: The First Flight
          </h2>
          <p className="leading-relaxed">
            Artemis 1 launched on November 16, 2022, after years of delays and
            several scrubbed attempts. The uncrewed mission sent an Orion
            capsule — carrying a mannequin torso fitted with radiation sensors —
            on a sweeping trajectory around the Moon called a distant retrograde
            orbit. The mission lasted 25 days and 10 hours before Orion splashed
            down successfully in the Pacific.
          </p>
          <p className="leading-relaxed">
            The primary objectives were to stress-test the SLS and Orion under
            real flight conditions and to validate the heat shield during
            high-speed lunar return re-entry. Both were successful, though
            post-flight analysis revealed unexpected erosion on parts of the
            heat shield — an issue engineers studied carefully before proceeding
            with crewed missions.
          </p>
        </section>

        {/* Artemis 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Artemis 2: First Crew to the Moon Since Apollo
          </h2>
          <p className="leading-relaxed">
            Artemis 2 will be the first crewed mission of the program and the
            first time humans have traveled to the Moon since December 1972. The
            four-person crew — Reid Wiseman, Victor Glover, Christina Koch, and
            Canadian astronaut Jeremy Hansen — will fly a free-return trajectory
            around the Moon without landing. The mission is designed to validate
            all crewed systems before committing to a landing attempt.
          </p>
          <p className="leading-relaxed">
            Christina Koch will become the first woman to travel to the Moon,
            and Victor Glover the first person of color to do so. Jeremy Hansen
            will be the first Canadian — and first non-American — to fly a lunar
            mission. The flight is planned to last roughly ten days.
          </p>
        </section>

        {/* Artemis 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Artemis 3: The Landing</h2>
          <p className="leading-relaxed">
            Artemis 3 is planned to be the first crewed lunar landing since
            Apollo 17. Unlike Apollo, which landed near the equator, Artemis 3
            will target the lunar south pole — terrain that no human has ever
            visited. The region is of intense scientific interest because of its
            permanently shadowed craters, which may hold ancient water ice that
            has been accumulating for billions of years.
          </p>
          <p className="leading-relaxed">
            The landing itself will not use the SLS directly. Instead,
            astronauts will transfer in lunar orbit to a Human Landing System
            built by SpaceX — a variant of the Starship vehicle adapted for the
            Moon. Two astronauts will descend to the surface while the remaining
            crew waits in Orion. The surface stay is expected to last about a
            week, with astronauts conducting multiple moonwalks in new NASA
            exploration spacesuits designed for the south pole environment.
          </p>
        </section>

        {/* Gateway */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Lunar Gateway</h2>
          <p className="leading-relaxed">
            A key element of NASA&apos;s long-term lunar strategy is the Gateway
            — a small space station that will orbit the Moon rather than Earth.
            Unlike the ISS, Gateway will not be permanently crewed; astronauts
            will visit for stays of one to three months during Artemis missions.
            It will serve as a staging point for lunar surface operations and
            eventually as a hub for deep space exploration.
          </p>
          <p className="leading-relaxed">
            Gateway is being built with international partners including the
            European Space Agency, the Japan Aerospace Exploration Agency, and
            the Canadian Space Agency. Its first two modules — the Power and
            Propulsion Element and the Habitation and Logistics Outpost — are
            planned to launch together aboard a commercial rocket ahead of a
            crewed Artemis mission.
          </p>
        </section>

        {/* Road to Mars */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Road to Mars</h2>
          <p className="leading-relaxed">
            NASA frames Artemis not as a destination but as a proving ground. A
            sustained human presence on and around the Moon will force solutions
            to problems that must be solved before anyone can go to Mars: how to
            grow food and recycle water in deep space, how to protect astronauts
            from cosmic radiation, how to extract resources from an alien
            environment, and how to maintain complex systems far from Earth with
            minimal resupply.
          </p>
          <p className="leading-relaxed">
            The Moon is three days away. Mars, at closest approach, is seven
            months. Every lesson learned at the lunar south pole — every failure
            fixed, every system validated — is a lesson that may one day keep a
            Mars crew alive. Artemis is, in this sense, the first chapter of a
            much longer story.
          </p>
        </section>

        <iframe
          src="https://www.youtube.com/embed/o593JmtLyMU"
          allowFullScreen
          className="w-full aspect-video rounded-xl"
        />
      </article>

      <footer className="border-t">
        <div className="mx-auto max-w-4xl px-8 py-16">
          <h2 className="text-2xl font-semibold mb-2">Learn More</h2>
          <p className="text-sm mb-8">
            Further reading and viewing on the Artemis program.
          </p>
          <ul className="space-y-4 mb-16">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="shrink-0 font-mono text-xs">
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs tracking-widest uppercase">
            Artemis Program · 2017-Present · NASA
          </p>
        </div>
      </footer>
    </>
  );
}
