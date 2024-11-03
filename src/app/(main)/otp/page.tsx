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

export default function OtpForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  return (
    <>
      <div className="flex  px-5 flex-col items-center justify-center min-h-screen bg-black/95">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">
            OTP verification
          </h1>
          <Form {...form}>
            <form className="w-full flex flex-col space-y-6">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center ">
                    <FormDescription>
                      Please enter the one-time password sent to your phone.
                    </FormDescription>
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
                href={"/upload-file"}
                className={`${buttonVariants({
                  variant: "default",
                })} hover:bg-yellow-500 hover:text-black duration-300`}
              >
                Verify
              </Link>

              <div className="flex flex-col items-center mt-5">
                <p className="mt-1 text-xs font-light text-gray-500">
                  I didn&apos;t receive the code?
                  <Link href={"#"} className="ml-1 font-medium text-black">
                    send again
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
