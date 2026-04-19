import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "NASA Space Shuttle Program",
    href: "https://www.nasa.gov/space-shuttle",
    description: "Official NASA archive",
  },
  {
    label: "Space Shuttle Discovery's Final Flight",
    href: "https://www.youtube.com/watch?v=4DnOEt3GNmQ",
    description: "YouTube",
  },
  {
    label: "Challenger Disaster — What Happened?",
    href: "https://www.youtube.com/watch?v=xOqMcPBDBSI",
    description: "YouTube",
  },
  {
    label: "Columbia: The Untold Story",
    href: "https://www.youtube.com/watch?v=PnFsGABxoAA",
    description: "YouTube",
  },
  {
    label: "Smithsonian — Space Shuttle Discovery",
    href: "https://airandspace.si.edu/collection-objects/space-shuttle-discovery",
    description: "Smithsonian Air and Space",
  },
  {
    label: "STS-1 First Launch of Columbia",
    href: "https://www.youtube.com/watch?v=3_I-LBk0FaE",
    description: "YouTube",
  },
];

export default function SpaceShuttle() {
  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/space-shuttle.jpg"
          alt="Space Shuttle"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="mx-auto max-w-4xl px-8 py-16">
          <p className="mb-4 font-mono text-xs tracking-widest uppercase text-orange-400">
            NASA · 1981-2011
          </p>
          <h1 className="text-6xl font-bold mb-8">Space Shuttle Program</h1>
          <p className="text-xl leading-relaxed">
            The Space Shuttle was the world&apos;s first reusable spacecraft and
            NASA&apos;s primary vehicle for human spaceflight for three decades.
            Over 30 years and 135 missions, it launched satellites, conducted
            science, built the International Space Station, and carried 355
            people into orbit — before its final landing on July 21, 2011.
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-16 px-8 py-16">
        {/* Origins */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Vision of Reusability</h2>
          <p className="leading-relaxed">
            After the triumph of Apollo, NASA faced a new challenge: making
            spaceflight routine and affordable. Every rocket that had flown
            before was expendable — used once and discarded. The Space Shuttle
            was conceived as a radical departure, a spacecraft that could fly to
            orbit, return to Earth, land like an airplane, and fly again within
            weeks. If it worked as promised, it would dramatically reduce the
            cost of reaching space.
          </p>
          <p className="leading-relaxed">
            Development began in earnest in the early 1970s, with the first
            orbital flight planned for the late 1970s. The final design
            consisted of three main components: the Orbiter — the winged
            spacecraft itself — a large external fuel tank that fed the
            Orbiter&apos;s main engines and was the only part not reused, and
            two Solid Rocket Boosters that provided the bulk of the thrust at
            liftoff and were recovered from the ocean after each launch.
          </p>
          <p className="leading-relaxed">
            Five orbiters were built for spaceflight: Columbia, Challenger,
            Discovery, Atlantis, and Endeavour. A sixth vehicle, Enterprise, was
            constructed for atmospheric approach and landing tests but never
            flew in space.
          </p>
        </section>

        {/* STS-1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">STS-1: First Flight</h2>
          <p className="leading-relaxed">
            On April 12, 1981 — the 20th anniversary of Yuri Gagarin&apos;s
            first spaceflight — Columbia lifted off from Kennedy Space Center
            carrying commander John Young and pilot Robert Crippen. It was the
            first time in history that a new spacecraft was flown by humans on
            its maiden voyage, with no prior uncrewed orbital test flight. The
            risk was extraordinary.
          </p>
          <p className="leading-relaxed">
            Columbia spent two days in orbit before gliding to a landing at
            Edwards Air Force Base in California. The mission was a success,
            though post-flight inspection found that dozens of heat shield tiles
            had been lost or damaged — a warning sign that would go unheeded for
            years. Young and Crippen were celebrated as heroes, and the Space
            Shuttle era had begun.
          </p>
        </section>

        {/* Challenger */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Challenger: January 28, 1986
          </h2>
          <p className="leading-relaxed">
            At 11:38 AM on January 28, 1986, Space Shuttle Challenger lifted off
            from Kennedy Space Center on mission STS-51-L. Seventy-three seconds
            into flight, it broke apart. All seven crew members were killed:
            Francis Scobee, Michael Smith, Ronald McNair, Ellison Onizuka,
            Judith Resnik, Gregory Jarvis, and Christa McAuliffe — a high school
            teacher from New Hampshire who had been selected to be the first
            civilian in space through NASA&apos;s Teacher in Space program.
          </p>
          <p className="leading-relaxed">
            The cause was the failure of an O-ring seal in one of the Solid
            Rocket Boosters, which allowed hot gases to escape and destabilize
            the vehicle. Investigations later revealed that engineers at Morton
            Thiokol had warned NASA the night before that the unusually cold
            temperatures at the launch site posed a risk to the O-rings. Their
            concerns were overruled.
          </p>
          <p className="leading-relaxed">
            The Challenger disaster grounded the Shuttle fleet for nearly three
            years. The Rogers Commission, appointed to investigate the accident,
            famously found that NASA&apos;s organizational culture — its
            normalization of known risks — was as much to blame as the technical
            failure. The program was fundamentally redesigned before flights
            resumed in September 1988.
          </p>
        </section>

        {/* Achievements */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What the Shuttle Made Possible
          </h2>
          <p className="leading-relaxed">
            After returning to flight, the Shuttle went on to accomplish things
            no other vehicle could. In April 1990, Discovery deployed the Hubble
            Space Telescope — and in December 1993, Endeavour carried a crew to
            repair it, correcting a flaw in its primary mirror that had been
            blurring its vision since launch. The repair mission required five
            consecutive days of spacewalks and remains one of the most complex
            in history. Hubble went on to transform astronomy.
          </p>
          <p className="leading-relaxed">
            The Shuttle was also the vehicle that made the International Space
            Station possible. Beginning in 1998, Shuttle missions delivered and
            assembled the station&apos;s modules piece by piece over more than a
            decade, with Atlantis making the final ISS assembly flight in 2011.
            Without the Shuttle&apos;s unique ability to carry large payloads to
            orbit and return hardware to Earth, the ISS could not have been
            built in its current form.
          </p>
          <p className="leading-relaxed">
            Over the course of the program, the Shuttle carried out 355
            individual spaceflights by astronauts from 16 countries. It deployed
            and retrieved satellites, conducted thousands of scientific
            experiments in the dedicated Spacelab module, and served as the
            proving ground for the long-duration spaceflight techniques that
            would later be refined aboard the ISS.
          </p>
        </section>

        {/* Columbia */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Columbia: February 1, 2003</h2>
          <p className="leading-relaxed">
            On February 1, 2003, Space Shuttle Columbia disintegrated during
            re-entry over the southern United States, killing all seven crew
            members: Rick Husband, William McCool, Michael Anderson, Ilan Ramon,
            Kalpana Chawla, David Brown, and Laurel Clark. Columbia had been
            returning from a 16-day science mission designated STS-107.
          </p>
          <p className="leading-relaxed">
            The cause was a piece of insulating foam that had broken off from
            the external tank during launch and struck the leading edge of
            Columbia&apos;s left wing, creating a breach in the heat shield.
            During re-entry, superheated atmospheric gases entered the wing and
            tore the vehicle apart. The damage had been observed on launch
            footage, but managers decided — fatally — that it did not pose a
            safety risk.
          </p>
          <p className="leading-relaxed">
            The Columbia Accident Investigation Board drew a direct line between
            the two Shuttle disasters, finding that the organizational problems
            identified after Challenger had never truly been fixed. The program
            was grounded again for two and a half years while NASA undertook
            sweeping safety reforms and redesigned the external tank foam
            application process.
          </p>
        </section>

        {/* End of program */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Final Flights</h2>
          <p className="leading-relaxed">
            The decision to retire the Space Shuttle was made during the George
            W. Bush administration in the wake of the Columbia disaster. The
            Vision for Space Exploration, announced in 2004, called for
            completing the ISS and then retiring the Shuttle by 2010 in favor of
            a new system designed for deep space. The retirement was ultimately
            delayed a year, with the final mission — STS-135, flown by Atlantis
            — landing on July 21, 2011.
          </p>
          <p className="leading-relaxed">
            Commander Chris Ferguson, pilot Doug Hurley, and mission specialists
            Sandy Magnus and Rex Walheim made up the final Shuttle crew. When
            Atlantis touched down at Kennedy Space Center in the early morning
            darkness, it ended an era. Ferguson&apos;s words to Mission Control
            became the program&apos;s epitaph: &quot;Mission complete, Houston. After
            serving the world&apos;s greatest team, it&apos;s time to put her to
            bed.&quot;
          </p>
        </section>

        {/* Legacy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Legacy</h2>
          <p className="leading-relaxed">
            The Space Shuttle never delivered the low-cost, routine access to
            space it had originally promised. The per-flight cost, originally
            estimated at around $10 million, averaged more than $1.5 billion by
            the end of the program. The reusability that was meant to make it
            economical turned out to require enormous maintenance effort between
            each flight. In that sense, it fell short of its founding vision.
          </p>
          <p className="leading-relaxed">
            But measured by what it actually accomplished — the science, the
            satellite deployments, the Hubble servicing missions, and above all
            the construction of the International Space Station — the
            Shuttle&apos;s record is remarkable. It carried more people to orbit
            than any other vehicle in history, and the two tragedies it suffered
            were lessons that shaped every human spaceflight program that
            followed.
          </p>
          <p className="leading-relaxed">
            Today, the four surviving orbiters are on public display across the
            country: Discovery at the Smithsonian&apos;s National Air and Space
            Museum Udvar-Hazy Center in Virginia, Endeavour at the California
            Science Center in Los Angeles, Atlantis at the Kennedy Space Center
            Visitor Complex in Florida, and Enterprise at the Intrepid Sea, Air
            and Space Museum in New York.
          </p>
        </section>

        <iframe
          src="https://www.youtube.com/embed/UcBc0l7IrZU"
          allowFullScreen
          className="w-full aspect-video rounded-xl"
        />
      </article>

      <footer className="border-t">
        <div className="mx-auto max-w-4xl px-8 py-16">
          <h2 className="text-2xl font-semibold mb-2">Learn More</h2>
          <p className="text-sm mb-8">
            Further reading and viewing on the Space Shuttle program.
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
            Space Shuttle Program · 1981-2011 · NASA
          </p>
        </div>
      </footer>
    </>
  );
}
