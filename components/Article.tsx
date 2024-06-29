import Image from "next/image";

const Article = ({
  imgUrl,
  date,
  text,
}: {
  imgUrl: string;
  date: string;
  text: string;
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#031B34] font-Manrope">
      <div className="w-full h-full bg-[#040C18]">
        <Image
          width={100}
          height={100}
          src={imgUrl}
          alt="blog_image"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between py-[1rem] px-[1.5rem] h-full">
        <div>
          <p className="text-[11.65px] font-[700] leading-[35px] text-white">
            {date}
          </p>
          <h3 className="text-[18px] lg:ext-[25px] font-[800] leading-[25px] lg:leading-[31px] text-white mb-[5rem] cursor-pointer">
            {text}
          </h3>
        </div>
        <p className="text-[11.65px] font-[700] leading-[35px] text-white">
          Read Full Article
        </p>
      </div>
    </div>
  );
};

export default Article;
