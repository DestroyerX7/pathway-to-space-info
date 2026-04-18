import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Learn() {
  return (
    <>
      <Header />
      <div className="flex gap-4 justify-center">
        <div className="relative w-64 aspect-3/4">
          <Link href="/learn/apollo">
            <Image
              src="/moon-landing.webp"
              alt="Apollo"
              fill
              priority
              className="object-cover"
            />
          </Link>
        </div>
        <div className="relative w-64 aspect-3/4">
          <Link href="/learn/artemis">
            <Image
              src="/artemis-II-launch.jpg"
              alt="Artemis"
              fill
              priority
              className="object-cover"
            />
          </Link>
        </div>
        <div className="relative w-64 aspect-3/4">
          <Link href="/learn/space-shuttle">
            <Image
              src="/space-shuttle-launch.jpg"
              alt="Space shuttle"
              fill
              priority
              className="object-cover"
            />
          </Link>
        </div>
        <div className="relative w-64 aspect-3/4">
          <Link href="/learn/iss">
            <Image
              src="/iss-eva.jpg"
              alt="ISS"
              fill
              priority
              className="object-cover"
            />
          </Link>
        </div>

        <div className="relative w-64 aspect-3/4">
          <Link href="/learn/solar-system">
            <Image
              src="/solar-system-illustration.webp"
              alt="Solar system"
              fill
              priority
              className="object-cover"
            />
          </Link>
        </div>

        <div className="relative w-64 aspect-3/4">
          <Link href="/learn/universe">
            <Image
              src="/pillars-of-creation.jpg"
              alt="Universe"
              fill
              priority
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
