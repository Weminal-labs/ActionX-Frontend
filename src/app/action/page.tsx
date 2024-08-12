"use client";
import { GridBackground } from "@/components/ui/grid-background";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { useRouter } from "next/navigation";

async function fetchActionData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

export default function ActionPage() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const placeholders = [
    "Enter an Action URL to unfurl it into a Blink",
    "Provide an Action URL to expand it into a Blink",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      const data = await fetchActionData(inputValue);
      if (data) {
        router.push(`/action/api-action=${inputValue}`);
      } else {
        setErrorMessage("Failed to validate URL");
      }
    }
  };

  return (
    <>
      <GridBackground>
        <div className="w-full h-full hidden md:block">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-[55%] h-[9%] flex items-center justify-center mb-8">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errorMessage={errorMessage}
              />
            </div>
          </div>
        </div>
        <div className="md:hidden text-center">
          <p className="font-medium text-[#B4E380] inline-block bg-black px-[0.375rem] rounded-full ">
            Soon
          </p>
          <p className="font-semibold">Mobile currently unavailable</p>
          <p className="text-gray-700">Please open this page on desktop</p>
        </div>
      </GridBackground>
    </>
  );
}
