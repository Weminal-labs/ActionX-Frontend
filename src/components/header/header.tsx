"use client";
import { useState } from "react";
import Link from "next/link";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

// Import SVG dưới dạng React component
import MenuIcon from "../../assets/icons/menu.svg";

const menuItems = [
  { label: "About", path: "#" },
  { label: "Actions new version ( is developing)", path: "/action" },
  { label: "Actions", path: "/actions" },
  { label: "Updates", path: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <Link href={"/"}>
                <span className="flex items-center relative">
                  <p className="text-3xl lg:text-4xl font-bold bg-logoGradient bg-clip-text text-transparent">
                    ActionX
                  </p>
                </span>
              </Link>
            </div>
            <div
              className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="text-white" />
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
                  className="text-opacity-60 text-white hover:text-opacity-100 transition"
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-white py-2 px-4 rounded-lg text-black">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
