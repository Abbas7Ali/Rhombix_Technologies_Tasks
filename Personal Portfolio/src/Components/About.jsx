import React from "react";

const About = () => {
  return (
    <div className="pt-7">
      <h1 className="text-center font-mono">Welcome to My Portfolio!</h1>
      <div className="w-full p-2 flex justify-center items-center flex-col h-screen">
        <span>
          <img
            src={require("../Assets/images/quote.png")}
            className="w-8 float-left filter invert"
            alt="Famous Programming Quote"
          />
        </span>
        <h1 className="text-2xl text-center font-semibold pt-3 font-serif italic">
          "First, solve the problem. Then, write the code."
        </h1>
        <br />
        <p className="clear-both">
          <strong>
            &mdash; John Johnson
            </strong>
        </p>
      </div>
      <div className="w-full p-2 mt-2 mb-2">
        <hr className="m-auto w-28 border-t-8 border-green-800 my-4" />
      </div>
      <div className="w-11/12 max-w[1200px] bg-white rounded-lg shadow-xl mx-auto p-4 border-l-8 border-green-700">
        <h1 id="about" className="text-gray-800 text-base md:text-3xl font-semibold my-2">
          About my Self.
        </h1>
        <p className="text-base md:text-lg pl-2 text-justify">
          Hello! I’m Ali Abbas, a passionate web developer dedicated to creating
          dynamic and user-friendly websites. With a strong background in
          various web technologies, I have successfully completed numerous
          projects that showcase my skills and creativity. As an active learner,
          I continually seek to expand my knowledge and stay updated with the
          latest industry trends. My commitment to hard work and attention to
          detail drive me to deliver high-quality results that meet both client
          and user needs. Welcome to my portfolio, where you can explore my work
          and see my journey in web development!
        </p>
        <h1 className="text-gray-800 text-lg md:text-3xl font-semibold my-2">
          Why I chose Web Development
        </h1>
        <p className="text-base md:text-lg pl-2 text-justify">
          I chose web development because it perfectly blends creativity with
          technology. The ability to build visually appealing and interactive
          user experiences excites me. I love how web development allows me to
          see immediate results from my work, whether it's crafting a beautiful
          interface or solving complex problems.
        </p>
        <p className="text-base md:text-lg pl-2 text-justify">
          Additionally, the web is an ever-evolving landscape, which means
          there’s always something new to learn and explore. I appreciate the
          community and resources available, making it easier to collaborate and
          grow. Ultimately, web development provides me with a fulfilling way to
          combine my passion for technology with my desire to create impactful
          solutions for users.
        </p>
      </div>
    </div>
  );
};

export default About;
