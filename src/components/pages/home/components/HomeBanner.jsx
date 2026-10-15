import { useState } from "react";
import { ArrowUpRightIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import home from "../../../../assets/home.png";

const slides = [
  {
    smallTitle: "SOUTHERN CULINARY ITEMS & GIFTS",
    title: "Made with Love",
    scriptTitle: "Shared with you",
    subtitle:
      "Handcrafted Southern treats and pantry staples made with premium ingredients and a whole lot of heart.",
    buttonText: "EXPLORE COLLECTION",
    buttonLink: "/product",
    image: home,
  },
  {
    smallTitle: "THOUGHTFULLY CURATED GOURMET GIFTS",
    title: "Give with Love",
    scriptTitle: "Made For Sharing",
    subtitle:
      "Discover thoughtful gourmet gifts and delightful pantry favorites for every special occasion.",
    buttonText: "SHOP OUR GIFTS",
    buttonLink: "/product",
    image: home,
  },
  {
    smallTitle: "DELICIOUS MOMENTS START HERE",
    title: "Gather Around",
    scriptTitle: "Taste The Goodness",
    subtitle:
      "Bring everyone together with comforting recipes and delicious favorites made for sharing.",
    buttonText: "EXPLORE RECIPES",
    buttonLink: "/product",
    image: home,
  },
];

export default function HomeBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlide = (step) => {
    setActiveIndex(
      (current) => (current + step + slides.length) % slides.length
    );
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative isolate min-h-[600px] overflow-hidden bg-[#f6f3ed] sm:min-h-[650px] lg:min-h-[800px]">

      {/* Background image */}
      <img
        src={activeSlide.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full min-h-[600px] w-full object-cover object-center sm:min-h-[650px] lg:min-h-[800px]"
      />

      {/* Content area: two columns, left content and empty right */}
      <div className="relative z-10 mx-auto grid min-h-[600px] w-full max-w-[1440px] grid-cols-1 items-center px-8 pb-16 pt-20 sm:min-h-[650px] lg:min-h-[800px] lg:grid-cols-12 lg:px-16 lg:pb-10 lg:pt-28 xl:px-[72px]">

        {/* Left column */}
        <div
          key={activeIndex}
          className="w-full min-w-0 max-w-[600px] animate-[fadeIn_500ms_ease-in-out] lg:col-span-8"
        >
          <p className="mb-4 text-[10px] font-medium tracking-wide text-[#302f29] sm:text-sm">
            {activeSlide.smallTitle}
          </p>

          <h1 className="font-heading text-[clamp(2.25rem,5vw,5.2rem)] font-semibold leading-tight text-[#77895D]">
            {activeSlide.title}
          </h1>

          <p className=" break-words font-highlight text-[clamp(2rem,5vw,7rem)] leading-tight text-[#815c42]">
            {activeSlide.scriptTitle}
          </p>

          <p className="mt-5 max-w-[410px] text-sm leading-[1.7] text-[#25251f] sm:text-base lg:text-lg">
            {activeSlide.subtitle}
          </p>

          <a
            href={activeSlide.buttonLink}
            className="group mt-6 inline-flex cursor-pointer  max-w-fit items-center gap-3 rounded-full bg-[#77895D] py-2 lg:py-2.5 pl-4 pr-2.5 font-inter text-xs font-medium uppercase text-white  sm:gap-4 sm:pl-5 lg:text-sm transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#5E432D] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
          >
            <span>{activeSlide.buttonText}</span>

            <span className="flex w-6 h-6 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#77895D]">
              <ArrowUpRightIcon
                size={16}
                weight="bold"
                  className="transition-transform duration-300 group-hover:rotate-180"
              />
            </span>
          </a>
        </div>

        {/* Right column intentionally empty */}
        <div aria-hidden="true" className="hidden lg:block lg:col-span-4" />
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={() => changeSlide(-1)}
        aria-label="Previous slide"
        className="absolute left-2 cursor-pointer top-1/2 z-20 flex w-8 h-8 xl:h-14 xl:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#22201d] shadow-sm transition-transform hover:scale-105 sm:left-5 lg:left-6"
      >
        <CaretLeftIcon size={20} />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={() => changeSlide(1)}
        aria-label="Next slide"
        className="absolute right-2 cursor-pointer top-1/2 z-20 flex w-8 h-8 xl:h-14 xl:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#22201d] shadow-sm transition-transform hover:scale-105 sm:right-5 lg:right-6"
      >
        <CaretRightIcon size={20} />
      </button>

      {/* Small fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

