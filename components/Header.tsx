import { LucideRocket } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <header
      className={cn(
        "border-b p-4 backdrop-blur-md z-50 flex justify-between",
        className,
      )}
    >
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
  );
}
