import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "NASA International Space Station",
    href: "https://www.nasa.gov/international-space-station",
    description: "Official NASA page",
  },
  {
    label: "ISS: Building the International Space Station",
    href: "https://www.youtube.com/watch?v=GASgOmEOcNM",
    description: "YouTube",
  },
  {
    label: "A Day in the Life Aboard the ISS",
    href: "https://www.youtube.com/watch?v=_kRI92V0Kh0",
    description: "YouTube",
  },
  {
    label: "ISS 360° Tour with NASA Astronaut",
    href: "https://www.youtube.com/watch?v=SDe9KlVSJgk",
    description: "YouTube",
  },
  {
    label: "Tracking the ISS Live",
    href: "https://spotthestation.nasa.gov",
    description: "NASA Spot the Station",
  },
  {
    label: "ISS National Lab",
    href: "https://www.issnationallab.org",
    description: "Research aboard the station",
  },
];

export default function Iss() {
  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/iss-eva.jpg"
          alt="The International Space Station"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="mx-auto max-w-4xl px-8 py-16">
          <p className="mb-4 font-mono text-xs tracking-widest uppercase text-green-400">
            NASA · 1998-Present
          </p>
          <h1 className="text-6xl font-bold mb-8">
            International Space Station
          </h1>
          <p className="text-xl leading-relaxed">
            The International Space Station is the largest structure humans have
            ever built in space. Orbiting Earth at roughly 250 miles altitude,
            it has been continuously inhabited since November 2000 — making it
            the longest sustained human presence off our planet. It is a
            laboratory, a test bed, and a symbol of what nations can accomplish
            when they work together.
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-16 px-8 py-16">
        {/* Origins */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Origins</h2>
          <p className="leading-relaxed">
            The idea of a permanent crewed space station had been part of
            NASA&apos;s long-range plans since the 1960s. Several proposals came
            and went, and the United States did operate Skylab — a single-module
            station — briefly in the early 1970s. But a truly permanent,
            multi-national station remained out of reach until the Cold War
            ended and a new era of cooperation became possible.
          </p>
          <p className="leading-relaxed">
            In 1993, the United States invited Russia to join what had been a
            solely American project called Space Station Freedom. The resulting
            redesign became the International Space Station, with Russia
            contributing key modules and expertise from its decades of
            experience with the Mir and Salyut stations. Canada, Japan, and the
            European Space Agency joined as primary partners, and the program
            grew into the most complex international engineering project ever
            undertaken.
          </p>
          <p className="leading-relaxed">
            The first module — Zarya, a Russian-built functional cargo block —
            launched on November 20, 1998, atop a Proton rocket. Two weeks
            later, the American Unity connecting node was delivered by Space
            Shuttle Endeavour and attached by spacewalking astronauts. Assembly
            had begun.
          </p>
        </section>

        {/* Construction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Building It Piece by Piece</h2>
          <p className="leading-relaxed">
            Assembling the ISS took more than a decade and required 42 assembly
            flights — 37 by the Space Shuttle and 5 by Russian Proton and Soyuz
            rockets. Each mission added modules, trusses, solar arrays, or
            equipment, with astronauts and cosmonauts performing over 160
            spacewalks to connect hardware, route cables, and install systems in
            the vacuum of space.
          </p>
          <p className="leading-relaxed">
            The station grew in stages. The Russian segment, built around Zarya
            and the Zvezda service module, provided early propulsion and living
            quarters. The American segment expanded around Unity and later the
            Destiny laboratory module, which became the primary research
            facility. Japan&apos;s Kibo laboratory — the largest single module
            on the station — and the European Columbus module added further
            scientific capacity. Canada contributed Canadarm2, a 57-foot robotic
            arm that became essential for capturing cargo vehicles and assisting
            spacewalkers.
          </p>
          <p className="leading-relaxed">
            When assembly was declared complete in 2011, the station stretched
            357 feet from end to end — longer than a football field — and
            covered an area roughly the size of a six-bedroom house in habitable
            volume, at 13,696 cubic feet.
          </p>
        </section>

        {/* Living there */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Life Aboard the Station</h2>
          <p className="leading-relaxed">
            The ISS orbits Earth at roughly 17,500 miles per hour, completing a
            full orbit every 90 minutes. Crew members witness 16 sunrises and
            sunsets every single day. A typical expedition lasts about six
            months, though some astronauts have stayed considerably longer —
            NASA astronaut Mark Vande Hei spent 355 consecutive days aboard in
            2021 and 2022, setting a record for the longest single spaceflight
            by an American.
          </p>
          <p className="leading-relaxed">
            Daily life requires constant adaptation to microgravity. Water
            doesn&apos;t pour — it floats in spherical droplets. Sleep happens
            in small personal cabins where crew members zip themselves into
            sleeping bags to avoid drifting. Exercise is not optional: without
            it, muscles and bones deteriorate rapidly in the absence of gravity.
            Astronauts spend about two hours every day on a treadmill, a
            stationary bike, or a resistive exercise device to preserve their
            physical health.
          </p>
          <p className="leading-relaxed">
            Food arrives on resupply missions and is mostly freeze-dried or
            thermostabilized. Water is almost entirely recycled — including from
            urine — through the station&apos;s Environmental Control and Life
            Support System. The station generates its own electricity from eight
            solar array wings, which together span 239 feet and produce up to
            120 kilowatts of power.
          </p>
        </section>

        {/* Science */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">A Laboratory in Orbit</h2>
          <p className="leading-relaxed">
            The ISS&apos;s primary purpose is scientific research, and the
            microgravity environment enables experiments that simply cannot be
            done on Earth. Fluids behave differently without gravity. Flames
            burn in perfect spheres. Protein crystals grow larger and more
            uniformly than on the ground, aiding drug development. Materials can
            be processed without the contamination that containers introduce on
            Earth.
          </p>
          <p className="leading-relaxed">
            Thousands of experiments have been conducted across fields including
            biology, physics, medicine, materials science, and Earth
            observation. Research on the ISS has contributed to advances in
            cancer treatment, osteoporosis drugs, water purification technology,
            and our understanding of how the human body changes in long-duration
            spaceflight — knowledge that will be essential for any future
            mission to Mars.
          </p>
          <p className="leading-relaxed">
            The station also serves as a test bed for spacecraft systems and
            technologies. Solar panels, life support equipment, communications
            systems, and human factors research conducted on the ISS inform the
            design of every future deep space vehicle NASA and its partners are
            developing.
          </p>
        </section>

        {/* Commercial */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Commercial Era</h2>
          <p className="leading-relaxed">
            After the Space Shuttle retired in 2011, NASA relied entirely on
            Russian Soyuz spacecraft to transport astronauts to the ISS —
            purchasing seats at a cost of up to $90 million each. That changed
            on May 30, 2020, when SpaceX&apos;s Crew Dragon became the first
            commercial spacecraft to carry astronauts to the station, launching
            NASA astronauts Doug Hurley and Bob Behnken on the Demo-2 mission.
            It was the first crewed orbital launch from American soil since
            Atlantis flew in 2011.
          </p>
          <p className="leading-relaxed">
            Boeing&apos;s Starliner capsule is also in development as a second
            commercial crew vehicle, offering NASA redundancy in its access to
            the station. Cargo has been resupplied commercially for years by
            SpaceX&apos;s Dragon and Northrop Grumman&apos;s Cygnus spacecraft,
            fundamentally changing how the station is serviced and reducing
            NASA&apos;s dependence on government-operated rockets.
          </p>
        </section>

        {/* Future */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Future of the Station</h2>
          <p className="leading-relaxed">
            NASA has committed to operating the ISS through 2030, after which it
            plans to deorbit the station in a controlled manner, bringing it
            down over a remote stretch of ocean. The transition will not leave a
            gap in low Earth orbit human spaceflight — NASA intends to hand off
            to commercially operated space stations, several of which are
            already in development from companies including Axiom Space, Blue
            Origin, and Northrop Grumman.
          </p>
          <p className="leading-relaxed">
            The ISS will have been inhabited for three decades by the time it
            comes down. In that time it will have hosted more than 270 people
            from 21 countries, traveled over 1.5 billion miles, and orbited
            Earth more than 100,000 times. Whatever comes next in low Earth
            orbit will be built on what the ISS proved possible.
          </p>
        </section>

        <iframe
          src="https://www.youtube.com/embed/FhKOuxhGlmI"
          allowFullScreen
          className="w-full aspect-video rounded-xl"
        />
      </article>

      <footer className="border-t">
        <div className="mx-auto max-w-4xl px-8 py-16">
          <h2 className="text-2xl font-semibold mb-2">Learn More</h2>
          <p className="text-sm mb-8">
            Further reading and viewing on the International Space Station.
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
            International Space Station · 1998-Present · NASA
          </p>
        </div>
      </footer>
    </>
  );
}
