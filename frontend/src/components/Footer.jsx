import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

// Placeholder for a Newsletter component (you would implement the form logic separately)
const Newsletter = () => (
  <div className="mb-10 w-full">
    <h4 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
      Subscribe to our Newsletter
    </h4>
    <p className="mb-4 text-base text-gray-600 dark:text-gray-400">
      Get the latest resume tips and job market insights.
    </p>
    <form>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-md border border-gray-300 py-3 px-4 text-base text-gray-900 focus:border-red-500 focus:outline-none dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      />
      <button
        type="submit"
        className="mt-3 w-full rounded-md bg-red-500 py-3 px-4 text-base font-medium text-white"
      >
        Subscribe
      </button>
    </form>
  </div>
);

export const Footer = () => {
  return (
    <>
      {/* Updated Footer Styling: bg-gray-100 for a clean greyish background */}
      <footer className="relative z-10 bg-gray-100 pb-10 pt-20 pl-5 lg:pb-20 lg:pt-[120px] dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            {/* 1. About/Contact Information (Expanded) */}
            <div className="w-full px-4 sm:w-2/3 lg:w-4/12">
              <div className="mb-10 w-full">
                <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-red-500">
                  Resume Builder
                </h3>
                <p className="mb-7 text-base text-gray-600 dark:text-gray-400">
                  We build stand out resumes which help you to get hired at top
                  companies.
                </p>

                {/* Email Address */}
                <p className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                  <span className="mr-3 text-red-500 dark:text-indigo-400">
                    {/* Basic Email Icon (Simplified for clarity) */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"
                      ></path>
                    </svg>
                  </span>
                  <span>arjoghosh123@gmail.com</span>
                </p>

                {/* Phone Number */}
                <p className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                  <span className="mr-3 text-red-500 dark:text-indigo-400">
                    {/* Phone Icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span>+012 (345) 678 99</span>
                </p>

                {/* Address */}
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span className="mr-3 text-indigo-600 dark:text-indigo-400">
                    {/* Location Pin Icon */}
                    <svg
                      className="w-5 h-5 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span>123 Resume Lane, Innovation City, CA 90210</span>
                </p>
              </div>
            </div>

            {/* 2. Simplified Link Groups */}
            <LinkGroup header="Quick Links">
              <NavLink link="/templates" label="Templates" />
              <NavLink link="/features" label="Features" />
              <NavLink link="/pricing" label="Pricing" />
              <NavLink link="/blog" label="Blog/Tips" />
            </LinkGroup>
            {/* Any content (elements, components, or text) placed between the opening tag and the closing tag of a component is automatically passed to that component as its children prop. */}
            <LinkGroup header="Company">
              <NavLink link="/about" label="About Us" />
              <NavLink link="/contact" label="Contact & Support" />
              <NavLink link="/privacy" label="Privacy Policy" />
              <NavLink link="/terms" label="Terms of Service" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <Newsletter />

              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Follow Us
              </h4>
              <div className="flex items-center">
                <SocialIcon platform="Facebook" />
                <SocialIcon platform="Instagram" />
                <SocialIcon platform="LinkedIn" />
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
            <p className="text-base text-gray-500 dark:text-gray-400">
              &copy; 2025 Resume Builder. Made with ❤️ by Arjo Ghosh
            </p>
          </div>
        </div>

        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            {/* SVG content... */}
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            {/* SVG content... */}
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// --- Helper Components ---

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500 transition duration-150"
      >
        {label}
      </a>
    </li>
  );
};

const SocialIcon = ({ platform, iconPath }) => {
  const getIcon = (platformName) => {
    switch (platformName) {
      case "Facebook":
        return <FaFacebookF />;
      case "Instagram":
        return <FaInstagram />;
      case "LinkedIn":
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <a
      href={iconPath}
      aria-label={platform}
      className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-red-500 hover:bg-red-500 hover:text-white  dark:text-gray-400 dark:hover:border-red-500 sm:mr-4 lg:mr-3 xl:mr-4 transition duration-150"
    >
      {getIcon(platform)}
    </a>
  );
};
