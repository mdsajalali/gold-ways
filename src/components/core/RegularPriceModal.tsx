import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

export function RegularPriceModal() {
  return (
    <div className="flex cursor-pointer flex-wrap items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
      </span>

      <Dialog>
        <DialogTrigger asChild>
          <h2 className="text-sm font-semibold">Live Price</h2>
        </DialogTrigger>
        <DialogContent className="max-w-xs p-4 sm:max-w-[425px] lg:max-w-[600px]">
          {/* Header card */}
          <div className="rounded-lg bg-white ">
            <div className="flex flex-row justify-between pb-4">
              <div className="flex items-center gap-x-2">
                <ClockIcon
                  aria-hidden="true"
                  className="h-6 w-5 text-gray-400"
                />
                <span className="text-sm leading-6 text-gray-500">
                  <p>Price updated 6 min ago</p>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between sm:flex-row sm:items-start sm:gap-x-4">
              <div className="flex flex-col justify-start">
                <p className="mb-2 text-2xl font-bold text-gray-700 sm:text-4xl">
                  5,22.20
                  <span className="text-sm"> /g </span>
                </p>
                <div className="flex items-center text-sm text-green-500">
                  <span className="mr-2 text-gray-400">
                    This price includes
                  </span>
                  <span> 15% </span>
                  <span className="ml-2 text-gray-400"> VAT </span>
                </div>
              </div>

              <div className="my-4 sm:my-0">
                <Image
                  src="/gold2.jpeg"
                  width={100}
                  height={50}
                  alt="Gold image"
                  className="rounded-lg"
                />
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <p className="text-sm text-muted-foreground">
                Your Current Gold Balance is:
                <span className="text-base font-bold"> 11.730g</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
