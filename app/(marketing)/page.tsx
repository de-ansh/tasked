import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFonts = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className,
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          {" "}
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management app
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 font-bold  mb-6 ">
          Tasked helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-t from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work faster
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl  text-center mx-auto",
          textFonts.className,
        )}
      >
        Collaborate manage projects, and react new productivity peaks. From high
        rises to the home office, the way your teams works is unique -
        accomplish it all with Tasked.
      </div>
      <div className="mt-8">
        <Button className={cn("mt-6 items-center ")} size="lg" asChild>
          <Link href="/sign-up"> Get Tasked For Free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
