const cardsData = [
  {
    id: 1,
    image: require("../Assets/images/blooming.png"),
    title: "Blooming Petals ( Frontend )",
    link: "https://bloomingpetalstesting.netlify.app/",
    github: "",
    description:
      "Blooming Petals is a beautifully designed e-commerce platform dedicated to providing a wide selection of fresh flowers, with a special focus on elegant roses and thoughtful Get Well Soon cards. Our user-friendly interface allows customers to easily browse and select from an array of stunning arrangements and heartfelt cards, ensuring a seamless shopping experience. With a commitment to quality and customer satisfaction, Blooming Petals is the perfect destination for expressing love, sympathy, and joy through the gift of flowers.",
  },
  {
    id: 2,
    image: require("../Assets/images/funzone.png"),
    title: "Funzone Amusement Park ( Frontend Only )",
    link: "https://amusementparkfunzone.netlify.app/",
    description:
      "is an engaging website designed to showcase the exciting attractions and features of our vibrant amusement park. Visitors can explore various rides, games, and entertainment options while enjoying a user-friendly interface. The site also offers convenient online ticket purchasing and food ordering, making it easy for families and friends to plan their perfect day of fun. With a focus on providing a memorable experience, Fun Amusement Park invites everyone to discover the joy and adventure that awaits!",
  },
  {
    id: 3,
    image: require("../Assets/images/jewellery.png"),
    title: "Jenny's Jewellars ( Mega Project with Database )",
    link: "https://github.com/Abbas7Ali/Backend-Jewellary-shop",
    description:
      "Jenny's Jewellers is a beautifully designed e-commerce platform tailored for jewelry enthusiasts. Built with a modern tech stack, the website leverages JavaScript, CSS, Bootstrap, and jQuery for a responsive and engaging user experience. The sleek design ensures that users can navigate seamlessly across various devices, whether on a desktop, tablet, or smartphone.",
  },
  {
    id: 4,
    image: require("../Assets/images/todo.png"),
    title: "Notes Todo App ( React & TailwindCSS  )",
    link: "https://react-todo-testing.netlify.app/",
    description:
      "A user-friendly Todo List application built with React and styled using Tailwind CSS. Easily add, edit, and delete tasks, and keep your productivity on track with a clean, responsive design. This Todo List project leverages React for dynamic functionality and Tailwind CSS for a sleek, modern look. Manage your tasks effortlessly with intuitive controls and real-time updates. A lightweight Todo List application showcasing the power of React for state management and Tailwind CSS for elegant styling. Features include task creation, deletion, and a responsive layout for seamless usage across devices.",
  },
  {
    id: 5,
    image: require("../Assets/images/portfolio.png"),
    title: "Personal Portfolio ( Pure CSS & Vanilla Javascript  )",
    link: "https://abbas-is-a-good-dev.netlify.app/",
    description:
      "This is my first ever portfolio website combines the simplicity of vanilla JavaScript with the elegance of pure CSS. Its user-friendly night mode ensures a comfortable viewing experience, allowing me to present my projects with style and ease. Experience a unique portfolio website built from the ground up using pure CSS and vanilla JavaScript. Featuring a sophisticated night mode, this site ensures projects are always easy to read and visually appealing. In this portfolio website I showcased my proficiency in various programming languages and frameworks. I also highlight the IDEs I use to craft clean, efficient code.",
  },

  // Add more cards as needed
];

const Card = ({ image, title, description, link }) => (
  <div className="w-11/12 bg-gray-800 text-white rounded-md shadow-lg drop-shadow m-4 flex flex-wrap justify-center content-center p-2">
    <div className="grow">
      <img className="w-full object-cover rounded-md" src={image} alt={title} />
    </div>
    <div className="grow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-mono">{title}</div>
        <p className="text-justify">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} target="blank">
          <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            View Live
          </button>
        </a>
      </div>
    </div>
  </div>
);

function Projects() {
  return (
    <>
      <div id="work" className="p-2 mt-5 mx-2 mb-2 border-l-8 border-green-700">
        <h1 className="text-gray-800 text-4xl font-mono font-bold my-2">
          My Work:
        </h1>
        <p className="text-green-800">
          <strong>NOTE: </strong>To View source code of the following projects
          please goto my github account. Link is given in Contact section.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
        <div className="w-11/12 max-w[1200px] bg-white rounded-lg shadow-xl mx-auto p-4 border-l-8 border-green-700">
          <h1 className="text-gray-800 text-4xl font-mono font-bold my-2">
            About this Personal Portfolio
          </h1>
          <p className="text-lg font-serif text-justify">
            I created this portfolio using web technologies such as React.js,
            Tailwind CSS, JavaScript, and JSX. This combination allows for a
            dynamic, responsive design with a focus on user experience. React.js
            enables efficient component-based architecture, while Tailwind CSS
            provides a utility-first approach for styling, ensuring a modern and
            visually appealing layout. Through this portfolio, I showcase my
            skills and passion for web development.
          </p>
        </div>

        <div className="w-full p-2 flex justify-center items-center flex-col h-screen">
          <span>
            <img
              src={require("../Assets/images/quote.png")}
              className="w-8 float-left filter invert"
              alt="Famous quote for coding"
            />
          </span>
          <h1 className="text-2xl font-serif italic">
            "Code is like humor. When you have to explain it, it’s bad."
          </h1>
          <br />
          <p className="clear-both">
            <strong>&mdash; Cory House</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
