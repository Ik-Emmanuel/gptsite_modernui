import Article from "./Article";

const Blog = () => {
  return (
    <div className="flex flex-col section__padding font-Manrope" id="blog">
      <div className="w-full text-left mb-[5rem]">
        <h1 className="text-[34px] lg:text-[62px] leading-[42px] lg:leading-[75px] font-[800]  gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="flex lg:flex-row  flex-col  sm:gap-10">
        <div className="flex flex-[0.65] mr-[2rem] sm:my-[2rem] sm:order-2 lg:order-none">
          <Article
            imgUrl={"/assets/blog01.png"}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>

        <div className="grid flex-[1] grid-cols-1 lg:grid-cols-2 gap-[2rem] sm:order-1 lg:order-none mt-8">
          <Article
            imgUrl={"/assets/blog02.png"}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={"/assets/blog03.png"}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={"/assets/blog04.png"}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={"/assets/blog05.png"}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
