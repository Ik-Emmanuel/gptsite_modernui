import { cn } from "@/lib/utils";
const Feature = ({
  title,
  text,
  featureclass,
  featureTitleClass,
  featureTextClass,
}: {
  title: string;
  text: string;
  featureclass?: string;
  featureTitleClass?: string;
  featureTextClass?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full flex  justify-between items-start flex-col lg:flex-row m-[1rem] ",
        featureclass
      )}
    >
      <div
        className={cn(
          "flex flex-[1] max-w-[180px mr-[2rem]] text-white flex-col ",
          featureTitleClass
        )}
      >
        {/* the gradient dash style line above */}
        <div className="gradient__top" />

        <h1 className="font-[800] text-[18px]  leading-[24px] tracking-[-0.04em]">
          {title}
        </h1>
      </div>
      <div
        className={cn(
          "flex flex-[2] max-w-[390px] mt-[0.5rem] lg:mt-0",
          featureTextClass
        )}
      >
        <p className="text-colorText font-Manrope font-[500] text-[14px] leading-[24px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Feature;
