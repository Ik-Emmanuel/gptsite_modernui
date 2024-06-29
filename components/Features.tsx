import Feature from "./Feature";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => {
  return (
    <div
      className="w-full flex justify-between items-start flex-col lg:flex-row section__padding font-Manrope"
      id="features"
    >
      <div className="flex flex-[1] justify-start items-start flex-col text-left mr-[5rem]">
        <h1 className="text-[34px] leading-[45px] font-[800] gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>

        <p className="text-colorSubText text-[16px] leading-[30px] font-[500] mt-[2rem]">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex flex-[1.5] justify-start items-center flex-col">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
