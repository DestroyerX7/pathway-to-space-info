import { LucideRocket } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

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

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-32">
                <NavigationMenuLink asChild>
                  <Link href="/learn">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Expore</h2>
                      <p className="text-muted-foreground">
                        All learning pages
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link href="/learn/apollo">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Apollo</h2>
                      <p className="text-muted-foreground">Moon program</p>
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link href="/learn/artemis">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Artemis</h2>
                      <p className="text-muted-foreground">
                        Future of moon exploration
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link href="/learn/space-shuttle">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Space Shuttle</h2>
                      <p className="text-muted-foreground">
                        Reuseable space plane
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link href="/learn/iss">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">ISS</h2>
                      <p className="text-muted-foreground">Space labratory</p>
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link href="/learn/solar-system">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Solar System</h2>
                      <p className="text-muted-foreground">
                        Planets, moons, and more
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link href="/learn/universe">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Universe</h2>
                      <p className="text-muted-foreground">
                        Stars, galaxies, and more
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/quiz">Quiz</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
