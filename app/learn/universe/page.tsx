import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "NASA Universe Exploration",
    href: "https://universe.nasa.gov",
    description: "Official NASA page",
  },
  {
    label: "Hubble's Deepest View of the Universe",
    href: "https://www.youtube.com/watch?v=oAVjF_7ensg",
    description: "YouTube",
  },
  {
    label: "Black Holes Explained",
    href: "https://www.youtube.com/watch?v=e-P5IFTqB98",
    description: "YouTube",
  },
  {
    label: "The James Webb Space Telescope's First Images",
    href: "https://www.youtube.com/watch?v=4RPvFmTuBzQ",
    description: "YouTube",
  },
  {
    label: "ESA — The Universe",
    href: "https://www.esa.int/Science_Exploration/Space_Science/The_Universe",
    description: "European Space Agency",
  },
  {
    label: "The Big Bang — PBS Space Time",
    href: "https://www.youtube.com/watch?v=HdPzOWlLrbE",
    description: "YouTube",
  },
];

export default function Universe() {
  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/jwst-deep-field.jpg"
          alt="Deep field view of the universe"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="mx-auto max-w-4xl px-8 py-16">
          <p className="mb-4 font-mono text-xs tracking-widest uppercase text-rose-400">
            Beyond Our Solar System
          </p>
          <h1 className="text-6xl font-bold mb-8">The Universe</h1>
          <p className="text-xl leading-relaxed">
            Our solar system is one of at least 200 billion planetary systems in
            the Milky Way, which is itself one of roughly two trillion galaxies
            in the observable universe. Everything we have ever seen, touched,
            or explored occupies an almost incomprehensibly small corner of a
            cosmos that stretches 46 billion light-years in every direction —
            and has been expanding for 13.8 billion years.
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-16 px-8 py-16">
        {/* Big Bang */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Big Bang</h2>
          <p className="leading-relaxed">
            The universe began approximately 13.8 billion years ago in an event
            known as the Big Bang — not an explosion in space, but an expansion
            of space itself. In the first fraction of a second, the universe was
            unimaginably hot and dense, filled with a plasma of fundamental
            particles. As it expanded and cooled, protons and neutrons formed,
            then combined into the nuclei of the lightest elements: hydrogen,
            helium, and trace amounts of lithium.
          </p>
          <p className="leading-relaxed">
            For the first 380,000 years, the universe was opaque — photons of
            light could not travel freely because they constantly collided with
            charged particles. Then, as temperatures dropped enough for
            electrons to bind to nuclei, the universe became transparent for the
            first time. The light released at that moment still fills the
            universe today, stretched by billions of years of expansion into
            microwave radiation. We call it the Cosmic Microwave Background, and
            it is the oldest light we can observe — a snapshot of the infant
            universe.
          </p>
          <p className="leading-relaxed">
            The evidence for the Big Bang is overwhelming. The universe is
            expanding in every direction, meaning it was smaller in the past.
            The abundances of hydrogen and helium in the cosmos match the
            predictions of Big Bang nucleosynthesis precisely. And the Cosmic
            Microwave Background has been mapped in extraordinary detail by
            satellites including COBE, WMAP, and Planck, confirming the broad
            picture with stunning accuracy.
          </p>
        </section>

        {/* Stars */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Stars</h2>
          <p className="leading-relaxed">
            Stars are the engines of the universe. They form when clouds of
            hydrogen gas collapse under gravity, heating until nuclear fusion
            ignites in their cores — fusing hydrogen into helium and releasing
            enormous amounts of energy in the process. The Sun is one such star,
            but it is thoroughly average. Stars range from dim red dwarfs less
            than a tenth the mass of the Sun to blazing blue supergiants more
            than 100 times as massive, burning millions of times brighter and
            living only a few million years before dying violently.
          </p>
          <p className="leading-relaxed">
            The life cycle of a star depends almost entirely on its mass. Stars
            like the Sun spend billions of years fusing hydrogen, then swell
            into red giants as their core hydrogen runs out, before shedding
            their outer layers as a planetary nebula and leaving behind a dense
            cinder called a white dwarf. More massive stars live faster and die
            harder — they explode as supernovae, briefly outshining entire
            galaxies, and leave behind either a neutron star or, if massive
            enough, a black hole.
          </p>
          <p className="leading-relaxed">
            These deaths are not just endings. Supernovae seed the surrounding
            gas with the heavier elements forged in stellar cores — carbon,
            oxygen, iron, gold. Every atom in your body heavier than hydrogen
            was created inside a star that died before the Sun was born. Carl
            Sagan&apos;s observation that we are made of star stuff is not
            poetry — it is nuclear physics.
          </p>
        </section>

        {/* Black holes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Black Holes</h2>
          <p className="leading-relaxed">
            A black hole forms when enough mass is compressed into a small
            enough volume that gravity becomes so strong not even light can
            escape. The boundary beyond which nothing returns is called the
            event horizon. It is not a physical surface — there is nothing to
            collide with — but a point of no return. Cross it, and the laws of
            physics as we understand them offer no path back.
          </p>
          <p className="leading-relaxed">
            Stellar black holes, formed from collapsed massive stars, typically
            range from about 5 to several tens of solar masses. But lurking at
            the centers of most large galaxies — including our own Milky Way —
            are supermassive black holes millions or billions of times the mass
            of the Sun. The Milky Way&apos;s central black hole, Sagittarius A*,
            contains about 4 million solar masses. In 2019, the Event Horizon
            Telescope collaboration produced the first direct image of a black
            hole — the supermassive black hole at the center of the galaxy M87,
            55 million light-years away. In 2022, they imaged Sagittarius A*
            itself.
          </p>
          <p className="leading-relaxed">
            Black holes are not cosmic vacuum cleaners — they do not suck in
            surrounding matter any more than the Sun does. If the Sun were
            replaced by a black hole of the same mass, Earth&apos;s orbit would
            be unchanged. What makes them extraordinary is what happens close
            in, where tidal forces stretch infalling matter into streams, where
            time itself slows relative to a distant observer, and where our best
            theories of physics — general relativity and quantum mechanics —
            break down and fail to agree.
          </p>
        </section>

        {/* Galaxies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Galaxies</h2>
          <p className="leading-relaxed">
            A galaxy is a gravitationally bound system of stars, gas, dust, and
            dark matter. The Milky Way contains between 100 and 400 billion
            stars and is about 100,000 light-years across. It is a barred spiral
            galaxy, with a central bar-shaped structure and spiral arms winding
            outward. Our solar system sits about 26,000 light-years from the
            galactic center, in a minor arm called the Orion Spur, taking about
            225 million years to complete one orbit of the galaxy.
          </p>
          <p className="leading-relaxed">
            The Milky Way is not alone. It is the second-largest member of a
            small cluster of galaxies called the Local Group, which also
            includes the Andromeda Galaxy — our nearest large neighbor at about
            2.5 million light-years away — and around 50 smaller dwarf galaxies.
            Andromeda is approaching the Milky Way at about 68 miles per second,
            and in roughly 4.5 billion years the two galaxies will merge in a
            slow, gravitational collision that will reshape both over billions
            of years.
          </p>
          <p className="leading-relaxed">
            Zoom out further and the Local Group is itself just one small
            cluster among thousands in the Virgo Supercluster, which is in turn
            part of an even larger structure called Laniakea — a supercluster of
            100,000 galaxies spanning 520 million light-years. At the very
            largest scales, galaxies are arranged in a cosmic web of filaments
            and sheets surrounding vast empty voids, a structure that emerged
            directly from the tiny fluctuations present in the universe just
            moments after the Big Bang.
          </p>
        </section>

        {/* Dark matter and dark energy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Dark Matter and Dark Energy
          </h2>
          <p className="leading-relaxed">
            Ordinary matter — everything made of atoms, everything we can see or
            touch — accounts for only about 5% of the total energy content of
            the universe. The rest is a profound mystery. About 27% is dark
            matter: something that has mass and exerts gravity, causing galaxies
            to rotate faster than they should and bending light from distant
            objects, but which emits no light and has never been directly
            detected. Its nature is one of the biggest unsolved problems in
            physics.
          </p>
          <p className="leading-relaxed">
            The remaining 68% is even stranger — dark energy, a property of
            space itself that is causing the expansion of the universe to
            accelerate. Discovered in 1998 when astronomers studying distant
            supernovae found they were farther away than expected, dark energy
            has been confirmed by multiple independent lines of evidence. We
            know it exists. We have no idea what it is. Albert Einstein
            introduced a mathematical term called the cosmological constant that
            behaves like dark energy, but dismissed it as his greatest blunder.
            It may turn out to have been his greatest prediction.
          </p>
        </section>

        {/* Exoplanets */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Exoplanets and the Search for Life
          </h2>
          <p className="leading-relaxed">
            For most of human history, we did not know whether any stars other
            than the Sun had planets. The first confirmed detection of planets
            orbiting another star came in 1992, around a pulsar. The first
            planet confirmed around a Sun-like star followed in 1995. Since
            then, NASA&apos;s Kepler and TESS space telescopes have found
            thousands of exoplanets, and the total confirmed count now exceeds
            5,500, with many thousands more candidates awaiting confirmation.
          </p>
          <p className="leading-relaxed">
            Planets appear to be extraordinarily common. Statistical analyses
            suggest there are more planets in the Milky Way than there are stars
            — possibly more than a trillion in our galaxy alone. Some of these
            worlds orbit in the habitable zones of their stars, where
            temperatures might allow liquid water to exist on the surface.
            Several nearby stars host rocky planets in their habitable zones,
            and the James Webb Space Telescope is now capable of analyzing the
            atmospheres of some of these worlds for chemical signatures that
            might indicate biological activity.
          </p>
          <p className="leading-relaxed">
            We have not yet found life beyond Earth. But the universe is 13.8
            billion years old, contains two trillion galaxies, each with
            hundreds of billions of stars, most of which appear to have planets.
            The question of whether life has arisen elsewhere is one that
            humanity may answer within this century — perhaps within this
            generation.
          </p>
        </section>

        {/* Scale and age */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Scale, Time, and What We Cannot See
          </h2>
          <p className="leading-relaxed">
            The observable universe extends about 46 billion light-years in
            every direction — not because the universe is that old, but because
            space itself has been expanding, carrying distant regions farther
            away. Light from the edge of the observable universe has been
            traveling toward us for 13.8 billion years, but the source of that
            light is now far beyond where it appears to be. And the observable
            universe is almost certainly not all there is — it is simply the
            region from which light has had time to reach us.
          </p>
          <p className="leading-relaxed">
            Looking out into space is looking back in time. When you see the
            Andromeda Galaxy with the naked eye, you are seeing light that left
            it 2.5 million years ago, before our species existed. The most
            distant galaxies imaged by the James Webb Space Telescope are seen
            as they were just a few hundred million years after the Big Bang —
            ancient light from the first galaxies ever to form, crossing the
            universe for over 13 billion years before landing on a telescope
            mirror built by human hands.
          </p>
          <p className="leading-relaxed">
            There is something humbling and exhilarating in equal measure about
            what we have learned. The universe is not merely large — it is
            almost incomprehensibly so, filled with phenomena that strain our
            intuitions and challenge our most fundamental theories. And yet,
            from a small planet orbiting an ordinary star in an unremarkable
            corner of one galaxy among trillions, we have managed to piece
            together the broad outlines of how it all began, how it works, and
            where it is going. That may be the most remarkable fact of all.
          </p>
        </section>

        <iframe
          src="https://www.youtube.com/embed/oAVjF_7ensg"
          allowFullScreen
          className="w-full aspect-video rounded-xl"
        />
      </article>

      <footer className="border-t">
        <div className="mx-auto max-w-4xl px-8 py-16">
          <h2 className="text-2xl font-semibold mb-2">Learn More</h2>
          <p className="text-sm mb-8">
            Further reading and viewing on the universe beyond our solar system.
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
            The Universe · NASA
          </p>
        </div>
      </footer>
    </>
  );
}
