"use client";
import { useEffect, useState } from "react";
import { ActionLayout } from "@/components/ActionLayout";
import { mapApiResponseToLayoutProps } from "@/utils/mappingUtils";
import { usePathname } from "next/navigation";

const CurrentPath = () => {
  const pathname = usePathname();
  const [apiAction, setApiAction] = useState("");
  const [layoutProps, setLayoutProps] = useState<any>(null); // Thay thế 'any' bằng kiểu dữ liệu cụ thể nếu có

  useEffect(() => {
    // Tách giá trị sau 'api-action=' bằng cách sử dụng split
    const parts = pathname.split("api-action=");
    if (parts.length > 1) {
      setApiAction(parts[1]);
    }
  }, [pathname]);

  useEffect(() => {
    const fetchApiData = async () => {
      if (apiAction) {
        try {
          const response = await fetch(apiAction);
          const data = await response.json();
          const mappedProps = mapApiResponseToLayoutProps(data);
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
    <main className=" flex flex-1 flex-col items-center justify-center pt-4 lg:pt-0">
      <div className="w-full max-w-md">
        <ActionLayout {...layoutProps} />
      </div>
    </main>
  );
};

export default CurrentPath;
