"use client";
import { useEffect, useState } from "react";
import { ActionLayout } from "@/components/ActionLayout";
import { mapApiResponseToLayoutProps } from "@/utils/mappingUtils";
import { usePathname } from "next/navigation";

const CurrentPath = () => {
  const pathname = usePathname();
  const [apiAction, setApiAction] = useState("");
  const [layoutProps, setLayoutProps] = useState<any>(null);

  useEffect(() => {
    const parts = pathname.split("api-action=");
    if (parts.length > 1) {
      const decodedPath = decodeURIComponent(parts[1]);
      setApiAction(decodedPath);
    }
  }, [pathname]);

  useEffect(() => {
    const fetchApiData = async () => {
      if (apiAction) {
        try {
          const response = await fetch(apiAction);
          const data = await response.json();
          const baseUrl = new URL(apiAction).origin;
          const mappedProps = mapApiResponseToLayoutProps(data, baseUrl);
          setLayoutProps(mappedProps);
        } catch (error) {
          console.error("Error fetching API data:", error);
        }
      }
    };

    fetchApiData();
  }, [apiAction]);

  if (!layoutProps) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-2 py-4 md:px-8 dark:bg-black">
      <div className="w-full max-w-md">
        <ActionLayout {...layoutProps} />
      </div>
    </main>
  );
};

export default CurrentPath;
