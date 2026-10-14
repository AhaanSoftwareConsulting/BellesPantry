import { ArrowUpRightIcon } from "@phosphor-icons/react";
import OurStoryImg from "../../../../assets/cta1.png";

const OurStory = () => {
    return (
        <section className="overflow-hidden bg-white">
            <div className="relative mx-auto  max-w-[1440px] px-8 lg:px-12 xl:pl-[43px] xl:pr-[71px] lg:py-20 ">
                {/* Image and overlapping card wrapper */}
                <div className="relative mx-auto w-full max-w-[1299px]">

                   {/* Image */}
<div className="ml-0 aspect-[630/650] overflow-hidden md:ml-auto md:w-[50%]">
  <img
    src={OurStoryImg}
    alt="Belle's Pantry toast with jam and fresh berries"
    className="block h-full w-full object-cover"
  />
</div>

                    {/* Green overlapping card */}
                    <div className="relative z-10   bg-[#77895D] px-10 py-10 text-white  md:absolute  md:top-[45%] md:ml-0 md:mt-0 md:w-[62%] md:-translate-y-1/2 xl:px-[75px] xl:py-[52px] ">

                        <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-white/90 sm:text-xs">
                            OUR STORY
                        </p>

                        <h2 className="w-full font-heading text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl xl:text-[50px]">
                            Where Southern Tradition Meets Thoughtful Craft
                        </h2>

                        <p className="mt-3 max-w-[460px] text-xs leading-[1.8] text-white/95 sm:mt-4 sm:text-sm">
                            Belle's Pantry was created with a love for Southern cooking,
                            warm hospitality, and the joy of sharing good food with others.
                            Every item is selected with care to bring you the flavors and
                            traditions that make the South so special.
                        </p>

                        <a
                            href="/about"
                            className="group mt-6 inline-flex max-w-fit items-center gap-3 rounded-full bg-[#76563B] py-2 md:py-2.5 pl-4 pr-2.5 font-inter text-[10px] font-medium uppercase text-white  sm:gap-4 sm:pl-5 sm:text-sm transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#5E432D] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                        >
                            <span>LEARN MORE ABOUT US</span>

                            <span className="flex w-6 h-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#76563B]">
                                <ArrowUpRightIcon
                                    size={16}
                                    weight="bold"
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                />
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;
