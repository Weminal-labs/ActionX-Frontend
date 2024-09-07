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
      {/* <div className="overflow-hidden">
        <div className="h-full w-auto overflow-y-hidden items-center justify-center gap-4 mt-6">
          <Image
            className="hidden md:block"
            src={Actions}
            alt="Actions for anything"
            loading="lazy"
          />
          <Image
            className="md:hidden"
            src={Actions1}
            alt="Actions for anything"
            loading="lazy"
          />
        </div>
      </div> */}
    </div>
  );
};
