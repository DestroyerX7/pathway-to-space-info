import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "NASA Solar System Exploration",
    href: "https://solarsystem.nasa.gov",
    description: "Official NASA page",
  },
  {
    label: "How the Solar System Formed",
    href: "https://www.youtube.com/watch?v=libKVRa01L8",
    description: "YouTube",
  },
  {
    label: "The Planets — BBC Documentary",
    href: "https://www.youtube.com/watch?v=wOHcMd8PFQM",
    description: "YouTube",
  },
  {
    label: "Voyager: The Grand Tour",
    href: "https://www.youtube.com/watch?v=H9OWxFHqmmE",
    description: "YouTube",
  },
  {
    label: "Eyes on the Solar System — Interactive",
    href: "https://eyes.nasa.gov/apps/solar-system",
    description: "NASA 3D simulation",
  },
  {
    label: "The Planetary Society",
    href: "https://www.planetary.org",
    description: "planetary.org",
  },
];

export default function SolarSystem() {
  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/solar-system.webp"
          alt="The Solar System"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="mx-auto max-w-4xl px-8 py-16">
          <p className="mb-4 font-mono text-xs tracking-widest uppercase text-purple-400">
            Our Cosmic Neighborhood
          </p>
          <h1 className="text-6xl font-bold mb-8">The Solar System</h1>
          <p className="text-xl leading-relaxed">
            Our solar system is home to one star, eight planets, hundreds of
            moons, and countless smaller bodies — all bound together by the
            gravity of the Sun. Stretching roughly 100,000 astronomical units
            from edge to edge, it is the only corner of the universe we know to
            harbor life, and the only one we have ever explored in person.
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-16 px-8 py-16">
        {/* Formation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How It Formed</h2>
          <p className="leading-relaxed">
            About 4.6 billion years ago, a vast cloud of gas and dust — a solar
            nebula — began to collapse under its own gravity. As it contracted,
            it spun faster, flattening into a rotating disk. The material at the
            center grew dense and hot enough to ignite nuclear fusion, and the
            Sun was born. The remaining disk of gas and dust slowly clumped
            together over millions of years, forming the planets, moons,
            asteroids, and comets that make up the solar system today.
          </p>
          <p className="leading-relaxed">
            The composition of each planet largely reflects where it formed in
            this disk. Close to the young Sun, temperatures were too high for
            volatile compounds like water and methane to condense, so the inner
            planets — Mercury, Venus, Earth, and Mars — formed from rock and
            metal. Farther out, beyond what astronomers call the frost line, ice
            could persist, providing extra material for the giant planets
            Jupiter, Saturn, Uranus, and Neptune to accumulate massive envelopes
            of gas.
          </p>
        </section>

        {/* The Sun */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Sun</h2>
          <p className="leading-relaxed">
            The Sun contains 99.8% of all the mass in the solar system. Every
            planet, moon, asteroid, and comet combined accounts for just the
            remaining 0.2%. It is a middle-aged star — a yellow dwarf — about
            4.6 billion years old, with roughly another 5 billion years of
            hydrogen fuel remaining before it expands into a red giant and
            eventually sheds its outer layers as a planetary nebula.
          </p>
          <p className="leading-relaxed">
            Every second, the Sun converts about 600 million tons of hydrogen
            into helium through nuclear fusion in its core, releasing energy
            that takes tens of thousands of years to work its way to the surface
            before finally streaming outward as sunlight. The light that warms
            your face on a summer day left the Sun&apos;s surface just eight
            minutes ago.
          </p>
        </section>

        {/* Inner planets */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Inner Planets</h2>
          <p className="leading-relaxed">
            Mercury is the smallest planet and the closest to the Sun, yet
            paradoxically it is not the hottest. Its lack of any meaningful
            atmosphere means it cannot retain heat, and temperatures swing from
            800°F during the day to -290°F at night — the most extreme
            temperature range of any planet in the solar system.
          </p>
          <p className="leading-relaxed">
            Venus holds that title instead. Shrouded in a thick atmosphere of
            carbon dioxide with clouds of sulfuric acid, Venus is a textbook
            example of a runaway greenhouse effect. Surface temperatures average
            around 900°F — hot enough to melt lead — and the atmospheric
            pressure at the surface is 90 times that of Earth at sea level.
            Despite being our nearest planetary neighbor, Venus remains one of
            the hardest places in the solar system to explore.
          </p>
          <p className="leading-relaxed">
            Mars, the fourth planet, is the most explored world beyond Earth.
            Roughly half the size of our planet, it hosts the solar
            system&apos;s largest volcano — Olympus Mons, standing nearly three
            times the height of Everest — and the longest canyon system, Valles
            Marineris, which stretches roughly the width of the United States.
            Ancient river valleys, lakebeds, and mineral deposits suggest Mars
            once had liquid water on its surface, making it a primary target in
            the search for past life.
          </p>
        </section>

        {/* Asteroid belt */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Asteroid Belt</h2>
          <p className="leading-relaxed">
            Between Mars and Jupiter lies the asteroid belt — a region populated
            by millions of rocky and metallic bodies ranging in size from dust
            grains to the dwarf planet Ceres, which is about 590 miles across.
            Despite its reputation from science fiction, the asteroid belt is
            mostly empty space; the total mass of all its objects combined is
            less than 4% of the Moon.
          </p>
          <p className="leading-relaxed">
            The asteroids are leftovers — material that never coalesced into a
            planet, largely because Jupiter&apos;s immense gravity kept stirring
            the region and preventing the objects from sticking together. They
            are some of the most ancient and unaltered material in the solar
            system, offering scientists a window into the conditions that
            existed when the planets first formed.
          </p>
        </section>

        {/* Gas giants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Jupiter and Saturn</h2>
          <p className="leading-relaxed">
            Jupiter is the largest planet in the solar system — so large that
            all the other planets could fit inside it with room to spare. Its
            most recognizable feature, the Great Red Spot, is a storm that has
            been raging for at least 350 years, though it has been shrinking in
            recent decades. Jupiter&apos;s immense gravity has shaped the entire
            solar system, flinging some objects outward and drawing others
            inward, and is thought to have shielded the inner planets from some
            cometary impacts.
          </p>
          <p className="leading-relaxed">
            Jupiter&apos;s moon Europa is one of the most compelling places in
            the search for life beyond Earth. Beneath its icy surface lies a
            global ocean of liquid water, kept warm by tidal heating from
            Jupiter&apos;s gravity. Where there is liquid water, there may be
            the conditions for life.
          </p>
          <p className="leading-relaxed">
            Saturn is instantly recognizable by its spectacular ring system —
            made primarily of ice and rock particles ranging from tiny grains to
            chunks the size of houses. The rings are extraordinarily thin
            relative to their width: up to 175,000 miles across but in places
            only about 30 feet thick. Saturn also hosts Titan, its largest moon,
            which has a thick nitrogen atmosphere and lakes of liquid methane on
            its surface — the only body in the solar system other than Earth
            known to have stable liquid on its surface.
          </p>
        </section>

        {/* Ice giants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Uranus and Neptune</h2>
          <p className="leading-relaxed">
            Uranus and Neptune are classified as ice giants, distinct from the
            gas giants in that their interiors are thought to be dominated by
            water, ammonia, and methane ices rather than hydrogen and helium.
            Uranus is unique in that it rotates on its side — its axial tilt is
            about 98 degrees, meaning its poles experience 42 years of
            continuous sunlight followed by 42 years of darkness. The cause of
            this extreme tilt is believed to be a massive collision early in the
            solar system&apos;s history.
          </p>
          <p className="leading-relaxed">
            Neptune, the farthest planet from the Sun, was the first to be
            predicted mathematically before it was observed — astronomers
            noticed irregularities in Uranus&apos;s orbit and calculated where
            an unknown planet must be. It was found within one degree of the
            predicted position in 1846. Neptune has the strongest sustained
            winds in the solar system, reaching over 1,200 miles per hour, and
            its moon Triton orbits in the opposite direction to the
            planet&apos;s rotation — a strong hint that it was captured from the
            Kuiper Belt rather than forming alongside Neptune.
          </p>
        </section>

        {/* Outer solar system */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Beyond the Planets</h2>
          <p className="leading-relaxed">
            Beyond Neptune lies the Kuiper Belt — a broad disk of icy bodies
            extending to about 50 astronomical units from the Sun. Pluto, once
            considered the ninth planet, resides here. It was reclassified as a
            dwarf planet in 2006 when astronomers recognized it as simply the
            largest known member of a vast population of similar objects.
            NASA&apos;s New Horizons spacecraft flew past Pluto in 2015,
            revealing a surprisingly complex world with mountains of water ice,
            a heart-shaped nitrogen ice plain, and a possible subsurface ocean.
          </p>
          <p className="leading-relaxed">
            Even farther out, extending up to perhaps 100,000 astronomical units
            from the Sun, lies the Oort Cloud — a vast spherical shell of icy
            bodies thought to be the source of long-period comets. The Oort
            Cloud has never been directly observed; its existence is inferred
            from the orbits of comets that swing through the inner solar system.
            Its outer edge marks the practical boundary of the Sun&apos;s
            gravitational influence — the edge of the solar system itself.
          </p>
        </section>

        {/* Exploration */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Have Explored It</h2>
          <p className="leading-relaxed">
            Every planet in the solar system has been visited by at least one
            spacecraft. The Pioneer and Voyager probes of the 1970s conducted
            the first flybys of the outer planets, with Voyager 1 and 2 together
            providing our first close looks at Jupiter, Saturn, Uranus, and
            Neptune. Both Voyager probes are still operational, now traveling
            through interstellar space more than 40 years after launch.
          </p>
          <p className="leading-relaxed">
            Mars has been the most intensively explored world beyond Earth, with
            a succession of orbiters, landers, and rovers mapping its surface,
            analyzing its rocks, and sampling its atmosphere. NASA&apos;s
            Perseverance rover, which landed in 2021, is actively collecting
            rock cores that are intended to be returned to Earth by a future
            sample return mission — a first in planetary science.
          </p>
          <p className="leading-relaxed">
            The solar system remains a place of ongoing discovery. New moons are
            found regularly around the outer planets. Interstellar objects have
            now been detected passing through the solar system. And the question
            of whether life exists — or once existed — somewhere beyond Earth
            remains one of the most profound open questions in all of science.
          </p>
        </section>

        <iframe
          src="https://www.youtube.com/embed/yaPhKc31zPs"
          allowFullScreen
          className="w-full aspect-video rounded-xl"
        />
      </article>

      <footer className="border-t">
        <div className="mx-auto max-w-4xl px-8 py-16">
          <h2 className="text-2xl font-semibold mb-2">Learn More</h2>
          <p className="text-sm mb-8">
            Further reading and viewing on the solar system.
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
            The Solar System · NASA
          </p>
        </div>
      </footer>
    </>
  );
}
