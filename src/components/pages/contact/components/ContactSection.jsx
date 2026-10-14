import { useForm } from "react-hook-form";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import contactCTA from "../../../../assets/contactCTA.png";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Contact form data:", data);

    // Connect your API here.
    reset();
  };

  return (
    <section className="w-full">
      <div className=" bg-white px-5 py-12 sm:px-8 lg:px-12 xl:px-[70px] xl:py-20">
        <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-stretch gap-8 lg:grid-cols-12 xl:gap-16">

          {/* LEFT COLUMN: Contact information + promotional image */}
          <div className="flex min-w-0 h-full flex-col gap-5 lg:col-span-5">

            {/* Contact information card */}
            <div className="bg-[#F3F6F3]  shadow-[2px_2px_4px_0px_#00000026] px-[54px] pt-6 pb-20">
              <h2 className="font-heading text-xl lg:text-3xl font-semibold text-black">
                CONTACT INFO
              </h2>

              {/* Address */}
              <div className="mt-6">
                <p className="font-heading text-sm md:text-xl text-[#DFA974] leading-snug font-bold">
                  Address
                </p>
                <a href="https://maps.app.goo.gl/2YoWMyZa3Masos7c9" className="mt-1 text-sm leading-snug text-[#6C6C73] md:text-xl">
                  BHANDARI CHOWK , GOLE  BAZAR,
                  <br />
                  KHARAGPUR-721301
                </a>
              </div>

              {/* Phone */}
              <div className="mt-6">
                <p className="font-heading text-sm md:text-xl text-[#DFA974] leading-snug font-bold">
                  Phone
                </p>
                <a href="tel:+7596996998" className="mt-1 text-sm text-[#6C6C73] md:text-xl">
                  7596996998</a>
                <br />
                <a href="tel:+9163208826" className="text-sm text-[#6C6C73] md:text-xl">9163208826</a>
              </div>

              {/* Email */}
              <div className="mt-6">
                <p className="font-heading text-sm md:text-xl text-[#DFA974] leading-snug font-bold">
                  Email
                </p>
                <a
                  href="mailto:hotelvinayak111@gmail.com"
                  className="mt-1 block break-all mt-1 text-sm text-[#6C6C73] md:text-xl"
                >
                  hotelvinayak111@gmail.com
                </a>
              </div>

              {/* Social media */}
              <div className="mt-6">
                <p className="font-heading text-sm md:text-xl text-[#DFA974] leading-snug font-bold">
                  Social Media
                </p>

                <div className="mt-2 flex items-center gap-4 text-[#6E6E73]">
                  <a href="https://facebook.com/" aria-label="Facebook" className="transition-colors hover:text-[#6C6C73]">
                    <FacebookLogo size={32} />
                  </a>
                  <a href="https://instagram.com/" aria-label="Instagram" className="transition-colors hover:text-[#6C6C73]">
                    <InstagramLogo size={32} />
                  </a>
                  <a href="https://linkedin.com/" aria-label="LinkedIn" className="transition-colors hover:text-[#6C6C73]">
                    <LinkedinLogo size={32} />
                  </a>

                </div>
              </div>
            </div>

            {/* Promotional image with text overlay */}
            <a
              href="/offers"
              className="group relative block min-h-[250px] w-full flex-1 overflow-hidden"
            >
              <img
                src={contactCTA}
                alt="Discover our special offers"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="font-heading leading-tight text-white text-4xl">
                  Unlock Your{" "}
                  <span className="text-[#DFA974]">20%</span>
                  <br />
                  Savings Today
                </h3>
              </div>
            </a>
          </div>

          {/* RIGHT COLUMN: Contact form */}
          <div className="min-w-0 md:pt-1 lg:col-span-7">
            <h1 className="font-heading text-3xl font-semibold leading-relaxed text-black sm:text-5xl">
              CONTACT US
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-7"
            >
              {/* First name + Last name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-8">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-base text-black"
                  >
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full min-w-0 border border-[#EEEECE] bg-white px-[13px] py-[19px] text-base outline-none transition focus:border-[#77895D]"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-base text-black"
                  >
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="w-full min-w-0 border border-[#EEEECE] bg-white px-[13px] py-[19px] text-base outline-none transition focus:border-[#77895D]"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Email */}
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-base text-black"
                  >
                    Phone*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter Your phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\-()\s]{7,20}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    className="w-full min-w-0 border border-[#EEEECE] bg-white px-[13px] py-[19px] text-base outline-none transition focus:border-[#77895D]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-base text-black"
                  >
                    Email Id*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email ID"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="w-full min-w-0 border border-[#EEEECE] bg-white px-[13px] py-[19px] text-base outline-none transition focus:border-[#77895D]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1 block text-base text-black"
                >
                  Massage
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Enter Your Massage"
                  {...register("message")}
                  className="w-full resize-y border border-[#EEEECE] bg-white px-[13px] py-[19px] text-base outline-none transition focus:border-[#77895D]"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-6 inline-flex max-w-fit items-center gap-3 rounded-full bg-[#77895D] py-2 md:py-2.5 pl-4 pr-2.5 font-inter text-[10px] font-medium uppercase text-white  sm:gap-4 sm:pl-5 sm:text-sm transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#5E432D] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)] disabled:cursor-not-allowed disabled:opacity-60">
                SUBMIT NOW

                <span className="flex w-6 h-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#77895D]">
                  <ArrowUpRightIcon
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.343780491807!2d87.31407707503396!3d22.340644541432393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d45c31dbec89f%3A0xfa38573d4c3b2d98!2sGole%20Bazar%20Bhandari%20Chok!5e0!3m2!1sen!2sin!4v1791965067017!5m2!1sen!2sin"
          title="Find us at Gole Bazar, Bhandari Chowk"
          className="h-[300px] w-full border-0 sm:h-[350px] lg:h-[450px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
