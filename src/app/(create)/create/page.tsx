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
        } else if (activeTab === "MintNFT") {
          link = `${baseUrl}/api/actions/mint-nft/${address}`;
        } else if (activeTab === "Voting") {
          link = `${baseUrl}/api/actions/voting/${address}`;
        } else if (activeTab === "MintNFTGame") {
          link = `${baseUrl}/api/actions/mint-nft-game/${address}`;
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
    <main className="flex flex-1 flex-col items-center dark:bg-black">
      <div className="text-2xl font-bold mt-10 mb-5 text-text-primary">
        Create {activeTab} Link
      </div>

      <div className="w-full max-w-md">
        <div className="w-full cursor-default overflow-hidden rounded-2xl border border-stroke-primary bg-bg-primary shadow-action p-6">
          <h1 className="text-2xl font-bold mb-4 text-text-primary">
            Please enter your wallet address
          </h1>

          {/* Tab navigation for switching between actions */}
          <div className="flex mb-4">
            <Button
              variant={activeTab === "Donate" ? "default" : "secondary"}
              onClick={() => setActiveTab("Donate")}
              className="flex-1"
            >
              Donate
            </Button>
            <Button
              variant={activeTab === "MintNFT" ? "default" : "secondary"}
              onClick={() => setActiveTab("MintNFT")}
              className="flex-1"
            >
              MintNFT
            </Button>
            <Button
              variant={activeTab === "Voting" ? "default" : "secondary"}
              onClick={() => setActiveTab("Voting")}
              className="flex-1"
            >
              Voting
            </Button>
            <Button
              variant={activeTab === "MintNFTGame" ? "default" : "secondary"}
              onClick={() => setActiveTab("MintNFTGame")}
              className="flex-1"
            >
              MintNFTGame
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your wallet address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating..." : `Create ${activeTab} Link`}
            </Button>
          </form>
        </div>

        {generatedLink && (
          <>
            <ArrowPointer>
              <p className="text-black mb-2 font-semibold">{activeTab} Link:</p>
              <div className="flex items-center">
                <a
                  href={generatedLink}
                  className="text-blue-500 underline break-all flex-grow mr-2"
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
                  className="ml-2 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Copy
                </Button>
              </div>
            </ArrowPointer>
            <Link
              href={"/action"}
              className=" bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Button className="w-full mt-4">Demo Now</Button>
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
