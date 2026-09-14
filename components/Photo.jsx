import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
      <Image
        src="/assets/photo.png"
        quality={80}
        height={512}
        width={512}
        alt="Sai Sharan Karam"
        className="object-contain"
        priority
      />
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
        fill="transparent"
        viewBox="0 0 512 512"
        aria-hidden="true"
      >
        <circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="15 120 25 25"
        />
      </svg>
    </div>
  );
};

export default Photo;
