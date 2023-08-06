import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Logo = () => {
  return <Image src="/logo.png" alt="logo" height={13} width="100" />;
};

const SocialButton = ({ children, label, href }: any) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-blackAlpha-100 hover:bg-blackAlpha-200"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
};

const ListHeader = ({ children }: any) => {
  return <p className="font-semibold text-lg mb-2">{children}</p>;
};

export default function Footer() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <Logo />
            </div>
            <p className="text-sm">
              P2E Pro NFT is a Shared liquidity NFT market smart contract
            </p>
          </div>
          <div className="md:col-span-1 space-y-3 flex flex-col">
            <ListHeader>Market Plac</ListHeader>
            <a href="#">Profile</a>
            <a href="#">Market place</a>
            <a href="#">Creators</a>
            <a href="#">Activiy</a>
            <a href="#">Collections</a>
          </div>
          <div className="md:col-span-1 space-y-3 flex flex-col">
            <ListHeader>Company</ListHeader>
            <a href="#">Upload</a>
            <a href="#">Connect Wallet</a>
            <a href="#">Our Blog</a>
            <a href="#">Item details</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="md:col-span-2">
            <ListHeader>Join Newsletter</ListHeader>
            <div className="relative">
              <input
                type="text"
                placeholder="Your email address"
                className="bg-blackAlpha-100 border-0 focus:bg-whiteAlpha-300 py-2 pl-4 pr-10 rounded-lg"
              />
              <button
                className="absolute right-15 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition-colors"
                aria-label="Subscribe"
                style={{ minWidth: "2rem" }}
              >
                Subscribe
              </button>
            </div>

            <div className="flex space-x-6 mt-6">
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-sm text-center">
        copyright © 2023 Created with love by P2E Pro NFT
      </p>
      <p className="text-sm text-center bg-black text-white">
        Developed by Vamsi Krishna
      </p>
    </div>
  );
}
