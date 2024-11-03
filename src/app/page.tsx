import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gold_bg.jpg')" }}
      />
      {/* Overlay with background color and opacity */}
      <div className="absolute inset-0 bg-black opacity-85" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-yellow-500 mb-2">
          GOLD WAYS<sup>®</sup>
        </h1>
        <p className="text-sm text-gray-400">
          Powered by &apos;AL-HASQAN GOLD BANK&apos;
        </p>
      </div>
      <br />

      <Link href={"/login"}>
        <Button variant="default" className="relative z-10 hover:bg-yellow-500 hover:text-black duration-300 w-full sm:w-auto">
          Get started
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </Link>

      {/* Gold sparkles (Optional: if you want small decorations) */}
      <div className="absolute bottom-0 left-0 p-4 flex space-x-2">
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
        <div className="w-1 h-1 bg-yellow-500 rounded-full animate-pulse delay-400"></div>
      </div>
    </div>
  );
};

export default page;
