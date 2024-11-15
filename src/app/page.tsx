import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/gold_bg.jpg')" }}
      />
      {/* Overlay with background color and opacity */}
      <div className="absolute inset-0 bg-black opacity-85" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="mb-2 text-5xl font-bold text-yellow-500">
          GOLD WAYS<sup>®</sup>
        </h1>
        <p className="text-sm text-gray-400">
          Powered by &apos;AL-HASQAN GOLD BANK&apos;
        </p>
      </div>
      <br />

      <Link href={"/login"}>
        <Button
          variant="default"
          className="relative z-10 w-full duration-300 hover:bg-yellow-500 hover:text-black sm:w-auto"
        >
          Get started
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </Link>

      {/* Gold sparkles (Optional: if you want small decorations) */}
      <div className="absolute bottom-0 left-0 flex space-x-2 p-4">
        <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-500 delay-200"></div>
        <div className="delay-400 h-1 w-1 animate-pulse rounded-full bg-yellow-500"></div>
      </div>
    </div>
  );
};

export default page;
