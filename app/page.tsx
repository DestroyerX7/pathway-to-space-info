import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { LucideCircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header className="fixed left-0 right-0" />

      <div className="relative h-screen flex justify-center items-center">
        <Image
          src="/stars.jpg"
          alt="Stars"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold">Pathway to all things space</h1>

          <p className="text-xl">Discover your interest in the cosmos</p>

          <Button className="px-8 py-6" asChild>
            <Link href="/learn">Learn</Link>
          </Button>
        </div>
      </div>

      <div className="px-64 py-32 flex gap-4">
        <div className="flex-1 space-y-4">
          <div className="relative h-64">
            <Image
              src="/apollo-11-launch.jpg"
              alt="Apollo 11 launch"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint
            deleniti inventore omnis quaerat? Eos veritatis sequi alias minus
            adipisci assumenda dolore ipsam quisquam amet voluptatum dolorem
            vitae, ipsa autem. Adipisci alias dolorem enim obcaecati quia autem
            quae. Magni provident suscipit, officiis sunt nisi a. Ipsa non eaque
            necessitatibus iste sequi quas pariatur maxime corporis architecto
            libero? Ad, beatae eius!
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <div className="relative h-64">
            <Image
              src="/iss.jpg"
              alt="ISS"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint
            deleniti inventore omnis quaerat? Eos veritatis sequi alias minus
            adipisci assumenda dolore ipsam quisquam amet voluptatum dolorem
            vitae, ipsa autem. Adipisci alias dolorem enim obcaecati quia autem
            quae. Magni provident suscipit, officiis sunt nisi a. Ipsa non eaque
            necessitatibus iste sequi quas pariatur maxime corporis architecto
            libero? Ad, beatae eius!
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <div className="relative h-64">
            <Image
              src="/mars.jpg"
              alt="Mars"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint
            deleniti inventore omnis quaerat? Eos veritatis sequi alias minus
            adipisci assumenda dolore ipsam quisquam amet voluptatum dolorem
            vitae, ipsa autem. Adipisci alias dolorem enim obcaecati quia autem
            quae. Magni provident suscipit, officiis sunt nisi a. Ipsa non eaque
            necessitatibus iste sequi quas pariatur maxime corporis architecto
            libero? Ad, beatae eius!
          </p>
        </div>
      </div>

      <div className="relative h-screen flex justify-center items-center">
        <Image
          src="/artemis-earthset.jpg"
          alt="Earthset"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="px-128 space-y-4">
          <h1 className="text-6xl font-bold">Artemis</h1>

          <p className="text-xl">
            Learn about NASA's plan to send astronauts on increasingly difficult
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
      </div>

      <footer className="p-16 flex gap-4">
        <div className="flex flex-col">
          <Button variant="link" asChild>
            <Link
              href="https://www.nasa.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NASA
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SpaceX
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="https://www.esa.int/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ESA
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="https://www.planetary.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Planetary Society
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="https://www.blueorigin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blue Origin
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="https://www.ulalaunch.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ULA
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="https://www.space.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Space.com
            </Link>
          </Button>
        </div>
      </footer>
    </>
  );
}
