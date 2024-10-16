"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import ArrowPointer from "@/components/ArrowPointer";
import Link from "next/link";

export default function CreateLink() {
  const [address, setAddress] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Donate"); // Tab state to switch actions

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (address) {
      if (address.length !== 66) {
        setGeneratedLink("");
        toast({
          title: "Error",
          description: "Please enter a valid wallet address.",
          variant: "destructive",
        });
      } else {
        // Generate link based on active tab
        const baseUrl = "https://server.actionxapt.com";
        let link = "";
        if (activeTab === "Donate") {
          link = `${baseUrl}/api/actions/transfer-apt/${address}`;
        } else if (activeTab === "NFT") {
          link = `${baseUrl}/api/actions/mint-nft/${address}`;
        } else if (activeTab === "Voting") {
          link = `${baseUrl}/api/actions/voting/${address}`;
        } else if (activeTab === "MintNFTGame") {
          link = `${baseUrl}/api/actions/mint-nft-game/${address}`;
        } else if (activeTab === "PlayGame") {
          link = `${baseUrl}/api/actions/play-game/${address}`;
        }

        setGeneratedLink(link);
        toast({
          title: "Success",
          description: `${activeTab} Link generated successfully.`,
        });
      }
    }

    setIsLoading(false);
  };

  return (
    <main className="flex flex-1 flex-col items-center dark:bg-black p-4">
      <div className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-text-primary text-center">
        Create {activeTab} Link
      </div>

      <div className="w-full max-w-md">
        <div className="w-full cursor-default overflow-hidden rounded-2xl border border-stroke-primary bg-bg-primary shadow-action p-4 sm:p-6">
          <h1 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-text-primary text-center">
            Please enter your wallet address
          </h1>

          {/* Tab navigation for switching between actions */}
          <div className="flex flex-wrap mb-3 sm:mb-4 gap-2">
            {["Donate", "NFT", "Voting", "MintNFTGame", "PlayGame"].map(
              (tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "secondary"}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 text-xs sm:text-sm py-1 px-2"
                >
                  {tab}
                </Button>
              )
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your wallet address"
              className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button
              type="submit"
              className="w-full text-sm sm:text-base"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : `Create ${activeTab} Link`}
            </Button>
          </form>
        </div>

        {generatedLink && (
          <>
            <ArrowPointer>
              <p className="text-black mb-1 sm:mb-2 font-semibold text-sm sm:text-base">
                {activeTab} Link:
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <a
                  href={generatedLink}
                  className="text-blue-500 underline break-all flex-grow mr-0 sm:mr-2 text-xs sm:text-sm mb-2 sm:mb-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {generatedLink}
                </a>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedLink);
                    toast({
                      title: "Copied",
                      description: `${activeTab} Link copied to clipboard.`,
                    });
                  }}
                  className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 text-xs sm:text-sm py-1 px-2"
                >
                  Copy
                </Button>
              </div>
            </ArrowPointer>
            <Link
              href={"/action"}
              className="block bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Button className="w-full mt-3 sm:mt-4 text-sm sm:text-base">
                Demo Now
              </Button>
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
