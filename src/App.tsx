import "./App.css";
import type { FC, ReactNode } from "react";

type FilterButtonProps = {
  text: string;
  active?: boolean;
  count?: number | null;
  className?: string;
  iconRight?: ReactNode;
};

const FilterButton: FC<FilterButtonProps> = ({
  text,
  active = false,
  count = null,
  className = "",
  iconRight,
}) => {
  const baseStyle =
    "flex items-center justify-between border rounded-lg px-4 py-2.5 text-sm font-medium";
  const stateStyle = active
    ? "bg-gray-100 border-gray-300 text-gray-900"
    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";

  return (
    <button
      type="button"
      className={`${baseStyle} ${stateStyle} ${className}`}
      aria-haspopup="listbox"
      aria-expanded="false"
    >
      <span className="flex items-center whitespace-nowrap">
        {typeof count === "number" && (
          <span className="bg-white border border-gray-300 rounded-full px-2 py-0.5 text-xs font-semibold mr-2">
            {count}
          </span>
        )}
        {text}
      </span>
      <svg
        className="w-5 h-5 text-gray-500 ml-3 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
      {iconRight}
    </button>
  );
};

const iconChevronDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline ml-1 w-4 h-4"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const iconArrowUpRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline ml-2 w-4 h-4"
    aria-hidden="true"
  >
    <path d="M13 5H19V11" />
    <path d="M19 5L5 19" />
  </svg>
);

const navLinks = [
  { href: "#home", label: "Buy", active: true },
  { href: "#about", label: "Rent", active: false },
  { href: "#contact", label: "New Developments", active: false },
  { href: "#services", label: "List Your Property", active: false },
  {
    href: "#blog",
    label: "More",
    active: false,
    icon: <span className="inline-block align-middle">{iconChevronDown}</span>,
  },
];

function App() {
  return (
    <>
      {/* Header / Navigation */}
      <header>
        <nav
          className="fixed top-0 w-full z-50 flex justify-between items-center px-4 py-3 md:px-16 md:py-5"
          aria-label="Primary"
        >
          <div className="p-2 md:p-4">
            <img src="logo.png" alt="Logo" className="h-10 w-auto md:h-12" />
          </div>
          <ul className="gap-4 md:gap-[26px] p-2 md:p-4 overflow-x-auto whitespace-nowrap hidden lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-display ${
                    link.active ? "text-[#F6F6F6]" : "text-white"
                  }`}
                >
                  {link.label}
                  <span>{link.icon}</span>
                </a>
              </li>
            ))}
            <li className="shrink-0">
              <a href="tel:+971589698721" className={`font-display text-white`}>
                +971 58 969 8721
                <span>{iconArrowUpRight}</span>
              </a>
            </li>
          </ul>
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="tel:+971589698721"
              className="font-display text-white hidden md:inline-block lg:hidden"
            >
              +971 58 969 8721
            </a>
            <span className="bg-black rounded-full block p-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 text-white"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section
          className="min-h-[80vh] bg-[url('hero-bg.jpg')] bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 py-28 px-4 md:px-16 gap-8 md:gap-16 items-end relative"
          aria-labelledby="hero-title"
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/70 to-black/80"></div>
          <div className="col-span-1 flex flex-col gap-4 md:gap-5 justify-center z-50 order-1">
            <div
              className="flex gap-3 md:gap-4 text-white"
              aria-label="Rating 4.5 out of 5 based on 346 reviews"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg md:text-xl leading-none">
                  4.5
                </span>
                <div className="flex items-center gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs md:text-sm">
                <span className="text-[#F6F6F6] text-[12px] md:text-[14px] font-normal">
                  +346 reviews on
                </span>
                <img
                  src="google.svg"
                  alt="Google logo"
                  className="h-4 md:h-5 w-auto"
                />
              </div>
            </div>

            <h1
              id="hero-title"
              className="text-[#FFFFFF] text-3xl sm:text-4xl md:text-6xl"
            >
              Explore 34 Luxury Villas for Sale in Palm Jumeirah
            </h1>
            <p className="text-[#E7E7E7]/80 text-sm md:font-[15px] md:text-base">
              This section allows you to showcase your unique areas. Utilize our
              platform to easily craft dedicated pages for each area and
              emphasize your business collaborations.
            </p>
          </div>
          <div className="col-span-1 z-50 order-2">
            <div className="relative z-50">
              <div className="w-full">
                <form
                  className="space-y-6 md:space-y-8"
                  aria-label="Consultation request form"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[14px] md:text-[15px] font-medium text-[#F6F6F6]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full bg-transparent border-0 border-b border-gray-500 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[14px] md:text-[15px] font-medium text-[#F6F6F6]"
                    >
                      Email
                    </label>
                    <div className="relative mt-1">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-[#E7E7E7]/80"
                          aria-hidden="true"
                        >
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="user@email.com"
                        className="w-full bg-transparent border-0 border-b border-gray-500 py-2 pl-7 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[14px] md:text-[15px] font-medium text-[#F6F6F6]"
                    >
                      Phone
                    </label>
                    <div className="flex items-center border-b border-gray-500 py-2 focus-within:border-white transition">
                      <button
                        type="button"
                        className="flex shrink-0 items-center space-x-1 pr-3"
                        aria-label="Select country code"
                      >
                        <span className="text-lg">
                          <img src="flag.png" alt="" className="w-4 h-4" />
                        </span>
                        <span className="text-[#E7E7E7]/80">+44</span>
                        <span className="text-[#E7E7E7]/80" aria-hidden="true">
                          {iconChevronDown}
                        </span>
                      </button>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-2 h-4 w-4 shrink-0 text-[#E7E7E7]/80"
                        aria-hidden="true"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                      </svg>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        placeholder="000 000 0000"
                        className="w-full bg-transparent border-0 p-0 text-white placeholder-[#E7E7E7]/60 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-white px-6 py-4 text-[#212121] text-[15px] font-medium transition-colors"
                  >
                    <span>Request a free consultation</span>
                    {iconArrowUpRight}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Filters / Search Section */}
        <section className="px-4 md:px-16 py-5 bg-white font-sans w-full">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center mb-5 gap-4">
            <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap w-full md:w-auto">
              {/* Toggle de Buy/Rent */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  className="bg-[#001489] text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm"
                  type="button"
                >
                  Buy
                </button>
                <button
                  className="text-gray-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200"
                  type="button"
                >
                  Rent
                </button>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 ">
                <input
                  type="text"
                  placeholder="Location, City, Community..."
                  className="px-3 md:px-4 py-2.5 rounded-l-lg outline-none w-56 md:w-72 text-sm"
                  aria-label="Search location"
                />
                <button
                  className="bg-[#001489] text-white p-3 rounded-lg hover:bg-[#001489]/90 transition-colors"
                  type="button"
                  aria-label="Search"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>

              <FilterButton text="Property Type" />
              <FilterButton text="Beds" active={true} count={3} />
              <FilterButton text="Baths" />
              <FilterButton text="Price" />
              <FilterButton text="Completion" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between px-0 md:px-16 py-3 md:py-5 gap-3">
            <h2 className="text-[#212121] text-[12px] font-semibold tracking-wider">
              63 APARTMENTS FOR SALE IN PALM JUMEIRAH
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Sort by</span>
              <FilterButton text="Featured" className="w-32 md:w-36" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
