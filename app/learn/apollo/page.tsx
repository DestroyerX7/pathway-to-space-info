import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "NASA Apollo Missions",
    href: "https://www.nasa.gov/apollo",
    description: "Official NASA archive",
  },
  {
    label: "Apollo 11 Landing footage",
    href: "https://www.youtube.com/watch?v=cwZb2mqId0A",
    description: "YouTube",
  },
  {
    label: "We Choose to Go to the Moon",
    href: "https://www.youtube.com/watch?v=TtBa_anTmu8",
    description: "Kennedy&apos;s 1962 Rice University speech",
  },
  {
    label: "Apollo 13 — Houston, We&apos;ve Had a Problem",
    href: "https://www.youtube.com/watch?v=GKbgGgEQb_4",
    description: "YouTube",
  },
  {
    label: "The Smithsonian Air and Space Museum",
    href: "https://airandspace.si.edu/topics/apollo",
    description: "Apollo collection",
  },
  {
    label: "Earthrise — the story behind the photo",
    href: "https://www.youtube.com/watch?v=drBFDZsRSes",
    description: "YouTube",
  },
];

export default function Apollo() {
  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/cape-canaveral-saturn-v-usa.webp"
          alt="Saturn V"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="mx-auto max-w-4xl px-8 py-16">
          <p className="mb-4 font-mono text-xs tracking-widest uppercase text-yellow-400">
            NASA · 1961-1972
          </p>
          <h1 className="text-6xl font-bold mb-8">Project Apollo</h1>
          <p className="text-xl leading-relaxed">
            Apollo was NASA&apos;s third human spaceflight program, carried out
            between 1961 and 1972. Its singular goal — landing humans on the
            Moon and returning them safely to Earth — was achieved six times,
            making it one of the greatest feats in the history of exploration.
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-16 px-8 py-16">
        {/* Origins */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Challenge</h2>
          <p className="leading-relaxed">
            On May 25, 1961, President John F. Kennedy stood before a joint
            session of Congress and issued a challenge that stunned the world:
            the United States would land a man on the Moon before the end of the
            decade. At the time, America had spent just 15 minutes in space,
            courtesy of Alan Shepard&apos;s brief suborbital flight earlier that
            month.
          </p>
          <p className="leading-relaxed">
            The backdrop was the Cold War Space Race. The Soviet Union had
            launched Sputnik — the world&apos;s first artificial satellite — in
            1957, and in April 1961 cosmonaut Yuri Gagarin became the first
            human to orbit Earth. Kennedy&apos;s Moon speech was a direct
            response, betting that America&apos;s industrial and scientific
            might could outpace the Soviets in the most audacious competition
            ever attempted.
          </p>
          <p className="leading-relaxed">
            At its peak, the Apollo program employed more than 400,000
            engineers, technicians, and scientists across NASA and its
            contractors. The budget reached $25.4 billion — roughly $257 billion
            in today&apos;s dollars — accounting for more than 4% of the entire
            federal budget at its height.
          </p>
        </section>

        {/* Saturn V */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Saturn V Rocket</h2>
          <p className="leading-relaxed">
            Getting to the Moon required a machine of extraordinary scale. The
            Saturn V stood 363 feet tall — taller than the Statue of Liberty —
            and weighed 6.2 million pounds when fully fueled. Its first stage
            was powered by five F-1 engines, each generating 1.5 million pounds
            of thrust. At liftoff, the entire vehicle produced 7.5 million
            pounds of thrust, burning 13 tons of propellant every second.
          </p>
          <p className="leading-relaxed">
            All 13 Saturn V rockets that flew performed successfully. No crew
            was ever lost aboard one. It remains, to this day, the tallest,
            heaviest, and most powerful rocket ever brought to operational
            status. No vehicle since has surpassed its payload capacity to the
            Moon.
          </p>
        </section>

        {/* Apollo 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Apollo 1: Tragedy on the Pad
          </h2>
          <p className="leading-relaxed">
            The Apollo program&apos;s darkest day came before a single Moon
            mission ever flew. On January 27, 1967, astronauts Gus Grissom, Ed
            White, and Roger Chaffee were conducting a routine pre-launch test
            inside their Command Module when a fire broke out. The pure oxygen
            atmosphere inside the capsule turned the cockpit into an inferno in
            seconds. All three astronauts perished.
          </p>
          <p className="leading-relaxed">
            The accident triggered an 18-month pause in the program and sweeping
            redesigns of the Command Module — new fireproof materials, a
            redesigned hatch that could be opened quickly, and revised wiring
            throughout. The tragedy delayed Apollo but ultimately made it safer.
            Many engineers believe the lessons learned from Apollo 1 saved later
            crews.
          </p>
        </section>

        {/* Apollo 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Apollo 8: First to the Moon
          </h2>
          <p className="leading-relaxed">
            In December 1968, Apollo 8 became the first crewed spacecraft to
            leave Earth&apos;s gravitational influence and orbit another world.
            Frank Borman, James Lovell, and William Anders flew to the Moon and
            completed 10 orbits before returning home. They did not land, but
            what they did changed everything.
          </p>
          <p className="leading-relaxed">
            On Christmas Eve, the crew broadcast live from lunar orbit, reading
            from the Book of Genesis to an estimated one billion viewers.
            William Anders also captured &quot;Earthrise&quot; — a photograph of the Earth
            appearing over the lunar horizon — which became one of the most
            influential environmental images ever taken, showing our planet as a
            fragile blue marble suspended in the void.
          </p>
        </section>

        {/* Apollo 11 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Apollo 11: One Giant Leap</h2>
          <p className="leading-relaxed">
            On July 16, 1969, Apollo 11 lifted off from Kennedy Space Center
            carrying Neil Armstrong, Buzz Aldrin, and Michael Collins. Four days
            later, the Lunar Module Eagle — carrying Armstrong and Aldrin —
            separated from the Command Module Columbia and began its descent to
            the Sea of Tranquility.
          </p>
          <p className="leading-relaxed">
            With just 30 seconds of fuel remaining after navigating past a
            boulder field, Eagle touched down at 20:17 UTC on July 20, 1969. Six
            hours later, Neil Armstrong descended the ladder and became the
            first human to walk on another world. &quot;That&apos;s one small step
            for a man, one giant leap for mankind,&quot; he said. Buzz Aldrin joined
            him minutes later. Michael Collins, unable to see the historic
            moment, orbited silently overhead, alone on the far side of the
            Moon.
          </p>
          <p className="leading-relaxed">
            The two moonwalkers spent about two and a half hours on the surface,
            collecting 47.5 pounds of lunar samples and planting an American
            flag. They also left a plaque reading: &quot;We came in peace for all
            mankind.&quot;
          </p>
        </section>

        {/* Later missions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Missions That Followed</h2>
          <p className="leading-relaxed">
            Apollo 12 landed in November 1969, achieving a precision touchdown
            near the unmanned Surveyor 3 probe, which had been sitting on the
            lunar surface for two years. Astronaut Charles Conrad became the
            first person to drive a vehicle on the Moon, piloting the Modular
            Equipment Transporter to gather samples.
          </p>
          <p className="leading-relaxed">
            Apollo 13, launched in April 1970, nearly ended in catastrophe when
            an oxygen tank in the Service Module exploded on the way to the
            Moon. Commander Jim Lovell&apos;s now-famous words — &quot;Houston,
            we&apos;ve had a problem&quot; — set off one of the most dramatic rescues
            in history. The crew shut down the Command Module, used the Lunar
            Module as a lifeboat, and looped around the Moon before splashing
            down safely on April 17. No Moon landing was made, but no lives were
            lost.
          </p>
          <p className="leading-relaxed">
            Missions 14 through 17 continued scientific exploration with
            increasing ambition. Apollo 15, 16, and 17 all carried the Lunar
            Roving Vehicle — an electric car that allowed astronauts to travel
            miles from their landers. Apollo 17 astronaut Harrison Schmitt was
            the only professional geologist to walk on the Moon, and the only
            scientist among the twelve lunar walkers.
          </p>
        </section>

        {/* Apollo 17 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Last Footprints</h2>
          <p className="leading-relaxed">
            Apollo 17 launched in December 1972. Commander Gene Cernan and
            scientist-astronaut Harrison Schmitt spent more than 22 hours on the
            lunar surface across three excursions — the longest surface stay of
            the program. Before climbing back into the Lunar Module for the last
            time, Cernan paused and scratched his daughter&apos;s initials — TDC
            — into the lunar dust. Then he said: &quot;We leave as we came, and, God
            willing, as we shall return.&quot;
          </p>
          <p className="leading-relaxed">
            When Cernan lifted off, he became the last human to stand on the
            Moon. That was December 14, 1972. More than 50 years have passed
            since, and no one has returned.
          </p>
        </section>

        {/* Legacy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Legacy</h2>
          <p className="leading-relaxed">
            The Apollo program returned 842 pounds of lunar rock and soil from
            six landing sites. Analysis of those samples transformed our
            understanding of the Moon&apos;s origin — supporting the &quot;giant
            impact hypothesis&quot; that the Moon formed from debris after a
            Mars-sized object collided with the early Earth.
          </p>
          <p className="leading-relaxed">
            Apollo also drove technological leaps that outlasted the program
            itself. The Apollo Guidance Computer was one of the first devices to
            use integrated circuits at scale, helping seed the modern computing
            industry. Advances in materials, miniaturization, and systems
            engineering rippled outward into medicine, aviation, and everyday
            consumer technology.
          </p>
          <p className="leading-relaxed">
            Twelve human beings walked on the Moon. All of them are now gone —
            Gene Cernan, the last, died in 2017. But their footprints remain,
            undisturbed in the airless lunar dust, likely to last for millions
            of years.
          </p>
        </section>

        <iframe
          src="https://www.youtube.com/embed/K_7SO-D_CfU"
          allowFullScreen
          className="w-full aspect-video rounded-xl"
        />
      </article>

      <footer className="border-t ">
        <div className="mx-auto max-w-4xl px-8 py-16">
          <h2 className="text-2xl font-semibold mb-2">Learn More</h2>
          <p className="text-sm mb-8">
            Further reading and viewing on the Apollo program.
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
            Apollo Program · 1961-1972 · NASA
          </p>
        </div>
      </footer>
    </>
  );
}
