import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    href: "/learn/apollo",
    src: "/moon-landing.webp",
    alt: "Apollo",
    label: "Apollo Program",
    year: "1961—1972",
    description: "Humanity's first steps on another world",
  },
  {
    href: "/learn/artemis",
    src: "/artemis-II-launch.jpg",
    alt: "Artemis",
    label: "Artemis",
    year: "2022—Present",
    description: "Returning to the Moon — and beyond",
  },
  {
    href: "/learn/space-shuttle",
    src: "/space-shuttle-launch.jpg",
    alt: "Space Shuttle",
    label: "Space Shuttle",
    year: "1981—2011",
    description: "The world's first reusable spacecraft",
  },
  {
    href: "/learn/iss",
    src: "/iss-eva.jpg",
    alt: "ISS",
    label: "Space Station",
    year: "1998—Present",
    description: "A home for humanity in orbit",
  },
  {
    href: "/learn/solar-system",
    src: "/solar-system-illustration.webp",
    alt: "Solar System",
    label: "Solar System",
    year: "4.5B years old",
    description: "Eight planets and countless mysteries",
  },
  {
    href: "/learn/universe",
    src: "/pillars-of-creation.jpg",
    alt: "Universe",
    label: "The Universe",
    year: "13.8B years old",
    description: "The cosmos in all its scale and wonder",
  },
];

export default function Learn() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground px-8 py-16">
        {/* Page heading */}
        <div className="max-w-6xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Knowledge Base
          </p>
          <h1 className="text-6xl font-light tracking-tight font-serif mb-4">
            Explore
          </h1>
          <Separator />
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group relative bg-background overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image
                  src={topic.src}
                  alt={topic.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Text pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {topic.year}
                </p>
                <h2 className="text-2xl font-light mb-1 font-serif">
                  {topic.label}
                </h2>
                <p className="text-sm text-muted-foreground leading-snug">
                  {topic.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <span>Discover</span>
                  <CircleArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
