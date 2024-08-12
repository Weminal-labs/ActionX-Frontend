"use client";
import { useState } from "react";
import Link from "next/link";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

// Import SVG dưới dạng React component
import MenuIcon from "../../assets/icons/menu.svg";
import { WalletSelector } from "@/components/ui/WalletSelector";
import { ModeToggle } from "@/components/ui/toggle-theme";

const menuItems = [{ label: "Terms of service", path: "#" }];

export default function HeaderActionPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-black ">
      <div className="px-4">
        <div className="container">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <Link href={"/"}>
                <span className="flex items-center relative">
                  <p className="text-3xl lg:text-4xl font-bold bg-logoGradient dark:bg-logoGradientDark bg-clip-text text-transparent">
                    ActionX
                  </p>
                </span>
              </Link>
            </div>
            <div
              className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="text-black dark:text-white" />
            </div>
            <nav
              className={`gap-6 items-center ${
                isOpen ? "block" : "hidden"
              } sm:flex`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className=" text-[#737373] font-semibold hover:text-opacity-100 transition"
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-[#e9e9e9] text-black py-2 px-4 rounded-lg ">
                Get Started
              </button>
              <WalletSelector />
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
