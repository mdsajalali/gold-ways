"use client";

import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
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

const secondaryNavigation = [
  { name: "Account detail", href: "#", icon: CubeIcon, current: true },
  {
    name: "Loan Management",
    href: "#loan-management",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Rental Management",
    href: "#rental-management",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Payment Scheduling",
    href: "#payment-scheduling",
    icon: CalendarDaysIcon,
    current: false,
  },
  { name: "Change PIN", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notification", href: "#", icon: BellIcon, current: false },
  { name: "Resubmit KYC", href: "#", icon: IdentificationIcon, current: false },
  {
    name: "Authorized Merchant",
    href: "#",
    icon: IdentificationIcon,
    current: false,
  },
  { name: "Language", href: "#", icon: GlobeAltIcon, current: false },
  {
    name: "Terms and condition",
    href: "#",
    icon: DocumentTextIcon,
    current: false,
  },
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon, current: false },
  { name: "Logout", href: "#", icon: ArrowLeftOnRectangleIcon, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Handle opening/closing the sidebar
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  // Close sidebar when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Handle overlay click to close the sidebar
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Button to toggle the sidebar */}
      <div className="flex items-center justify-end">
        <button
          onClick={toggleSidebar}
          className="p-4 text-gray-600 hover:text-amber-600 md:hidden"
        >
          <span className="sr-only">Open Sidebar</span>
          {/* Hamburger menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <dl className="container mx-auto flex flex-wrap">
        {/* Name and Phone */}
        <div className="flex-auto pl-6 pt-6">
          <dt className="text-sm font-semibold leading-6 text-gray-900">
            Name
          </dt>
          <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
            Name Surname
          </dd>

          <dt className="text-sm font-semibold leading-6 text-gray-900">
            Phone
          </dt>
          <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
            +88 (1234567890)
          </dd>
        </div>

        {/* Total Assets Value */}
        <div className="flex-auto pl-6 pt-4">
          <dt className="text-sm font-semibold leading-6 text-gray-900">
            Total Assets Value
          </dt>
          <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
            ৳10,560.00
          </dd>
        </div>

        {/* Gold List with Quantity and Value Price */}
        <div className="flex-auto pl-6 pt-4">
          <dt className="text-sm font-semibold leading-6 text-gray-900">
            Gold List
          </dt>
          <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
            <ul className="list-disc pl-5">
              <li>10 grams - ৳50,000.00</li>
              <li>5 grams - ৳25,000.00</li>
            </ul>
          </dd>
        </div>

        {/* Status */}
        <div className="flex-none self-end px-6 pt-4">
          <dt className="sr-only">Status</dt>
          <dd className="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-600 ring-1 ring-inset ring-amber-600/20">
            GOLD
          </dd>
        </div>
      </dl>

      {/* Transactions History */}
      <TransactionsHistory />

      {/* Sidebar */}
      <div className="relative py-20">
        <aside
          className={`fixed inset-0 z-50 transform bg-white transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } w-[75%] md:relative md:block md:w-64 md:translate-x-0 md:border-0 md:py-20`}
        >
          {/* Close Button on Mobile */}
          <button
            onClick={toggleSidebar}
            className="absolute right-4 top-4 p-2 text-gray-600 hover:text-amber-600 md:hidden"
          >
            <span className="sr-only">Close Sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex-none px-4 sm:px-6 lg:px-0">
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
        </aside>

        {/* Overlay to close sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
            onClick={handleOverlayClick}
          ></div>
        )}
      </div>
    </>
  );
}
