import Image from "next/image";
import Actions from "@/assets/images/actions/actions.png";
import Actions1 from "@/assets/images/actions/actions-inmobile.png";
export const Features = () => {
  return (
    <div className="bg-black text-white  ">
      <div className="py-[72px] sm:py-24">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Actions for Anything{" "}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Swap tokens, stake, buy NFTs, participate in governance. From
            anywhere.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <iframe
          width="590"
          height="345"
          src="https://www.youtube.com/embed/_2uPmdfSVmk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
