import React from 'react';
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react';

const TopHeader = () => {
  return (
    <div className="bg-[#76563B] text-white">
      <div className="relative mx-auto flex min-h-11 w-full max-w-[1440px] items-center justify-between lg:justify-center px-5 sm:px-8 lg:px-12 xl:px-[70px]">

        {/* Center announcement */}
        <p className="text-center text-[8px] sm:text-xs lg:text-sm">
          SOUTHERN FLAVOR. THOUGHTFUL GIFTS. MADE WITH LOVE.
        </p>

        {/* Right social icons */}
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 xl:right-[70px]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-full bg-white p-1 text-black transition-transform duration-300 hover:scale-105"
          >
            <FacebookLogoIcon size={16} weight="fill" color="#292821" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full bg-white p-1 text-black transition-transform duration-300 hover:scale-105"
          >
            <InstagramLogoIcon size={16} color="#292821" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full bg-white p-1 text-black transition-transform duration-300 hover:scale-105"
          >
            <LinkedinLogoIcon size={17} weight="fill" color="#292821" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;