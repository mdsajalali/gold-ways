import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import {
  CubeIcon,
  UserGroupIcon,
  FingerPrintIcon,
  BellIcon,
  IdentificationIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import TransactionsHistory from "@/components/core/TransactionsHistory";
import AccountNav from "@/components/core/AccountNav";
import AccountProfile from "@/components/core/AccountProfile";
import { ChevronRight } from "lucide-react";

const secondaryNavigation = [
  {
    name: "Account details",
    href: "/account-details",
    icon: CubeIcon,
    current: true,
  },
  {
    name: "Loan Management",
    href: "/loan-management",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Rental Management",
    href: "/rental-management",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Payment Scheduling",
    href: "/payment-scheduling",
    icon: CalendarDaysIcon,
    current: false,
  },
  {
    name: "Change PIN",
    href: "/change-pin",
    icon: FingerPrintIcon,
    current: false,
  },
  {
    name: "Notification",
    href: "/notification",
    icon: BellIcon,
    current: false,
  },
  {
    name: "Resubmit KYC",
    href: "/resubmit-kyc",
    icon: IdentificationIcon,
    current: false,
  },
  {
    name: "Authorized Merchant",
    href: "/authorized-merchant",
    icon: IdentificationIcon,
    current: false,
  },
  { name: "Language", href: "/language", icon: GlobeAltIcon, current: false },
  {
    name: "Terms and condition",
    href: "/terms-condition",
    icon: DocumentTextIcon,
    current: false,
  },
  { name: "Help", href: "/help", icon: QuestionMarkCircleIcon, current: false },
  {
    name: "Logout",
    href: "/logout",
    icon: ArrowLeftOnRectangleIcon,
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <>
      {/* Account Navbar */}
      <AccountNav />

      {/* Account Profile */}
      <AccountProfile />

      {/* Desktop Design */}
      {/* Sidebar */}
      <div className="hidden pb-20 pt-10 md:block">
        <nav className="flex-none pl-4 pr-8 sm:px-6 lg:px-0">
          <ul
            role="list"
            className="flex flex-col gap-x-3 gap-y-1 max-w-[300px] whitespace-nowrap"
          >
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-50 text-amber-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-amber-600",
                    "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6",
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={classNames(
                      item.current
                        ? "text-amber-600"
                        : "text-gray-400 group-hover:text-amber-600",
                      "h-6 w-6 shrink-0",
                    )}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Transactions History */}
        {/* <TransactionsHistory /> */}
      </div>

      {/* mobile design */}
      <div className="block pb-20 pt-10 md:hidden">
        <nav className="flex-none pl-4 pr-8 sm:px-6 lg:px-0">
          <ul
            role="list"
            className="flex flex-col gap-x-3 gap-y-1 whitespace-nowrap"
          >
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-50 text-amber-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-amber-600",
                    "group flex justify-between gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6",
                  )}
                >
                  <div className="flex gap-3">
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current
                          ? "text-amber-600"
                          : "text-gray-400 group-hover:text-amber-600",
                        "h-6 w-6 shrink-0",
                      )}
                    />
                    {item.name}
                  </div>
                  <ChevronRight size={18} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="flex flex-col gap-2 px-4 pt-5">
          <div className="flex items-center justify-center rounded-md bg-gray-100">
            <a
              href="#"
              className={classNames(
                "text-gray-700 hover:bg-gray-50 hover:text-amber-600",
                "group mt-4 flex gap-x-3 rounded-md pb-3 pl-2 pr-3 text-sm font-semibold leading-6",
              )}
            >
              <ArrowLeftOnRectangleIcon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-amber-600"
              />
              Log out from this device
            </a>
          </div>
          <div className="flex items-center justify-center rounded-md bg-gray-100">
            <a
              href="#"
              className={classNames(
                "text-gray-700 hover:bg-gray-50 hover:text-amber-600",
                "group mt-4 flex gap-x-3 rounded-md pb-3 pl-2 pr-3 text-sm font-semibold leading-6",
              )}
            >
              <ArrowLeftOnRectangleIcon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-amber-600"
              />
              Log out from this device
            </a>
          </div>
        </div>

        {/* Transactions History */}
        {/* <TransactionsHistory /> */}
      </div>
    </>
  );
}
