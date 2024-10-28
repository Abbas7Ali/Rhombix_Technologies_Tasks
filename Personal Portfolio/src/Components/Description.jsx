import React from "react";
import Laptop from "../Assets/images/coffee-code.png";
import myImage from "../Assets/images/binary.jpg";

const Description = () => {
  return (
    <div className=" w-full">
      <div
        className="flex items-center justify-center bg-fixed inset-0 bg-gray-800 bg-cover bg-center h-screen  z-[-1] brightness-500"
        style={{
          backgroundImage: `url(${myImage})`,
          width: "100%",
        }}
      >
        <h1
          className=" text-white text-4xl font-mono font-bold text-center"
        >
          A NEW WAY TO THINK
        </h1>
        
      </div>
      <div className="bg-gray-800 p-4 grid md:grid-cols-2 mx-auto max-h-[1240px]">
        <img src={Laptop} alt="/" className="my-4 mx-auto w-[500px]" />
        <div className="justify-center flex flex-col">
          <p className="text-lime-600 font-bold">Coding as Hobby</p>
          <h1 className="text-white font-mono font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Coding is my favorite hobby
          </h1>
          <p className="text-white font-serif">
            because it allows me to express my creativity and solve complex
            problems. I enjoy the challenge of building new projects, learning
            new technologies, and continuously improving my skills. Whether it's
            developing applications or exploring algorithms, coding provides
            endless opportunities for growth and innovation.
          </p>
          <button className="bg-green-700 text-white md:mx-0 mx-auto p-2 mt-4 font-medium  w-[150px] rounded-md">
            <a href="#contact">Contact me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
