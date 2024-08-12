"use client";
import React from "react";
import { ActionLayout } from "@/components/ActionLayout";
import { mapApiResponseToLayoutProps } from "@/utils/mappingUtils";

export default function ChessMoveAction() {
  // Extracted from the API response
  const apiResponse = {
    icon: "https://blinks.bandit.network/assets/thread_bounty_1.png",
    label: "Bandit Bounty Claim",
    title: "Claim your reward!",
    description:
      "Claim your reward if you have submitted for Bandit Network Thread Bounty on Superteam Earn",
    links: {
      actions: [
        {
          label: "Claim BONK",
          href: "https://blinks.bandit.network/bounties/thread_1/bonk",
        },
        {
          label: "Claim BAT",
          href: "https://blinks.bandit.network/bounties/thread_1/bat",
        },
      ],
    },
  };

  // Map API response to LayoutProps using the utility function
  const layoutProps = mapApiResponseToLayoutProps(apiResponse);

  return (
    <main className="flex flex-1 flex-col items-center justify-center pt-4 lg:pt-0 ">
      <div className="w-full max-w-md">
        <ActionLayout {...layoutProps} />
      </div>
    </main>
  );
}
