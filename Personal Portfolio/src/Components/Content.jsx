import { TypeAnimation } from 'react-type-animation';
import myImage from "../Assets/images/background.jpg";

const Content = () => {
  return (
    <div
      className="flex flex-col text-center justify-center w-full h-screen mx-auto max-w-[800px]"
      id="home"
    >
      <div
        className="absolute top-0 right-0 bg-fixed inset-0 bg-gray-800 bg-cover bg-top z-[-1] h-screen w-full brightness-50"
        style={{ backgroundImage: `url(${myImage})`, backgroundSize: "200%" }}
      ></div>
      <p className="text-lime-600 font-bold p-2 md:text-3xl sm:text-2xl text-xl">
        Hi, there I'm
      </p>
      <h1 className="text-white font-bold md:text-6xl sm:text-5xl text-3xl md:py-6">
        ALI ABBAS
      </h1>
      <div className="flex justify-center items-center">
        <p className="text-white md:text-5xl sm:text-3xl text-xl font-bold ">
          I am a  
        </p>
        <h1 className="text-lime-600 font-bold md:text-6xl sm:text-5xl text-3xl md:py-6 mx-1">
        <TypeAnimation
          sequence={[
            ' Student',
            2000, // Wait 2 seconds
            ' Developer',
            2000, // Wait 2 seconds
            ' Researcher',
            2000, // Wait 2 seconds
          ]}
          wrapper="span"
          speed={10} // Typing speed
          repeat={Infinity} // Loop indefinitely
          
        />
        </h1>
      </div>
      <button className="bg-lime-600 text-white mx-auto py-3 my-6 font-medium  w-[150px] rounded-md">
        <a href="#work">Let's See my Work</a>
      </button>
    </div>
  );
};

export default Content;
