import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <nav className="flex-no-wrap fixed top-0 z-[999] w-full items-center justify-between bg-white py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div
          className="w-full items-center justify-between md:w-auto"
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="block rounded bg-amber-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-amber-700 md:dark:text-amber-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-amber-700 md:dark:hover:bg-transparent md:dark:hover:text-amber-500"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/offers"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-amber-700 md:dark:hover:bg-transparent md:dark:hover:text-amber-500"
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-amber-700 md:dark:hover:bg-transparent md:dark:hover:text-amber-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="account"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-amber-700 md:dark:hover:bg-transparent md:dark:hover:text-amber-500"
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
