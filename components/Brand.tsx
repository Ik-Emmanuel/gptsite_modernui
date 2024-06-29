import Image from "next/image";

const brandImages = [
  "/assets/google.png",
  "/assets/slack.png",
  "/assets/atlassian.png",
  "/assets/dropbox.png",
  "/assets/shopify.png",
];

const Brand = () => {
  return (
    <div className="flex gap-8 flex-wrap justify-center items-center section__padding">
      {brandImages.map((item, index) => (
        <div
          className="flex flex-[1] max-w-[150px] min-w-[120px] m-1 justify-center items-center"
          key={index}
        >
          <Image width={100} height={100} quality={100} src={item} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Brand;
