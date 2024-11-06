"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { buttonVariants } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function PinForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-black/95 px-5">
        <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-md md:w-1/2 lg:w-1/3">
          <h1 className="mb-4 text-center text-2xl font-bold">ENTER PIN</h1>
          <Form {...form}>
            <form className="flex w-full flex-col space-y-6">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormDescription>goldway@gamil.com</FormDescription>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>04 : 59</FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Link
                href={"/dashboard"}
                className={`${buttonVariants({
                  variant: "default",
                })} duration-300 hover:bg-yellow-500 hover:text-black`}
              >
                Continue
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
