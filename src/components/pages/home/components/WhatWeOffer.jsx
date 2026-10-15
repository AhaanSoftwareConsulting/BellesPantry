import react from 'react';
import {ArrowUpRightIcon} from "@phosphor-icons/react";
import grid1 from "../../../../assets/grid1.png";
import grid2 from "../../../../assets/grid2.png";
import grid3 from "../../../../assets/grid3.png";
const offers = [
  {
    image: grid1,
    imageAlt: "Belle's Pantry gourmet pantry products",
    description:
      "Stock your pantry for everyday use and effortless entertaining",
    buttonText: "SHOP ALL",
    link:"/product",
  },
  {
    image: grid2,
    imageAlt: "Thoughtfully curated gourmet gifts",
    description:
      "Thoughtfully curated gourmet gifts for every occasion",
    buttonText: "GIFTS",
    link: "/product",
  },
  {
    image: grid3,
    imageAlt: "French toast with bananas and blueberries",
    description:
      "Quick and easy recipes destined to be your new family favorites",
    buttonText: "RECIPES",
    link: "/product",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-[70px] lg:py-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Section title */}
        <h2 className="mb-8 text-center font-heading text-2xl md:text-3xl xl:text-5xl font-semibold uppercase leading-tight tracking-wide text-[#77895D] sm:mb-10 ">
          What We Offer
        </h2>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-[30px]">
          {offers.map((offer) => (
            <div
              key={offer.buttonText}
              className="flex min-w-0 flex-col items-center text-center"
            >
              {/* Image */}
              <a
                href={offer.link}
                className="block w-full overflow-hidden rounded-[7px]"
              >
                <img
                  src={offer.image}
                  alt={offer.imageAlt}
                  className="aspect-[1.1/1] w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  loading="lazy"
                />
              </a>

              {/* Description */}
              <p className="mt-3 min-h-[52px] max-w-[390px] text-[13px] leading-[1.65] text-[#171717] xl:text-[17px] ">
                {offer.description}
              </p>

              {/* Button */}
              <a
                href={offer.link}
                className="group mt-6 inline-flex max-w-fit items-center gap-3 rounded-full bg-[#77895D] py-2 xl:py-2.5 pl-4 pr-2.5 font-inter text-xs font-medium uppercase text-white  sm:gap-4 sm:pl-5 xl:text-sm transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#5E432D] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)] cursor-pointer"
              >
                {offer.buttonText}

                <span className="flex w-6 h-6 xl:h-8 xl:w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#77895D]">
                            <ArrowUpRightIcon
                              size={16}
                             weight="bold"
                  className="transition-transform duration-300 group-hover:rotate-180"
                            />
                          </span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}