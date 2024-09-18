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
      const lastPartIndex = inputValue.lastIndexOf("/");
      const actionLink = inputValue.substring(0, lastPartIndex + 1);
      const data = await fetchActionData(actionLink);
      if (data) {
        const encodedInputValue = encodeURIComponent(inputValue);

        router.push(`/action/api-action=${encodedInputValue}`);
      } else {
        setErrorMessage("Failed to validate URL");
      }
    }
  };

  return (
    <>
      <GridBackground>
        <div className="w-full h-full">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-[80%] xl:w-[55%] h-[9%] flex items-center justify-center mb-8">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errorMessage={errorMessage}
              />
            </div>
          </div>
        </div>
      </GridBackground>
    </>
  );
}
