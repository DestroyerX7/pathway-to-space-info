import { Button } from "@/components/ui/button";
import { LucideRocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed left-0 right-0 border-b p-4 backdrop-blur-md z-50 flex justify-between">
        <Link href="/" className="flex gap-2 items-center">
          <LucideRocket />
          <h1 className="font-bold">Pathway To Space Info</h1>
        </Link>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/learn">Learn</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/quiz">Quiz</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
        </div>
      </header>

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

          <p className="text-xl">Discover your interest in space</p>

          <Button className="px-8 py-6" asChild>
            <Link href="/learn">Learn</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
