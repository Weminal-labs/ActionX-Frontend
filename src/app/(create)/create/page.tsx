'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import ArrowPointer from "@/components/ArrowPointer";

export default function CreateLink() {
  const [address, setAddress] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (address) {
      if (address.length !== 66) {
        setGeneratedLink('');
        toast({
          title: "Lỗi",
          description: "Địa chỉ ví không đúng định dạng. Vui lòng nhập lại.",
          variant: "destructive",
        });
      } else {
        const link = `https://server.actionxapt.com/api/actions/transfer-apt/${address}`;
        setGeneratedLink(link);
        toast({
          title: "Thành công",
          description: "Liên kết đã được tạo thành công.",
        });
      }
    }
    
    setIsLoading(false);
  };

  return (
    <main className="flex flex-1 flex-col items-center dark:bg-black">
      <div className="text-2xl font-bold mt-10 mb-5 text-text-primary">Create Donate Link</div>
      <div className="text-1xl font-bold mt-15 mb-10 ml-40 mr-40 text-text-primary">A single link on X can ignite global conversations and inspire actions, proving that even the smallest connection can drive meaningful change.</div>
      <iframe src="https://giphy.com/embed/xT5LMPTFmwq58mI9Uc" width="480" height="271" frameBorder="0" className="giphy-embed mb-10" allowFullScreen></iframe>
      <div className="w-full max-w-md">
        <div className="w-full cursor-default overflow-hidden rounded-2xl border border-stroke-primary bg-bg-primary shadow-action p-6">
          <h1 className="text-2xl font-bold mb-4 text-text-primary">Please enter your wallet address</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your wallet address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Link"}
            </Button>
          </form>
        </div>
        
        {generatedLink && (
          <ArrowPointer>
            <p className="text-black mb-2 font-semibold">Donate Link of you:</p>
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
                    description: "Donate Link copied to clipboard.",
                  });
                }}
                className="ml-2 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Copy
              </Button>
            </div>
          </ArrowPointer>
        )}
        
      </div>
    </main>
  );
}
