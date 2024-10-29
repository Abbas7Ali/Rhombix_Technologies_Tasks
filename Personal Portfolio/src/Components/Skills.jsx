// data for the skill cards
const cardData = [
  {
    imageUrl: require("../Assets/icons/html.png"),
    imageAlt: "HTML icon",
  },
  {
    imageUrl: require("../Assets/icons/css.png"),
    imageAlt: "CSS icon",
  },
  {
    imageUrl: require("../Assets/icons/javascript.png"),
    imageAlt: "Javascript icon",
  },
  {
    imageUrl: require("../Assets/icons/jquery.png"),
    imageAlt: "jQuery icon",
  },
  {
    imageUrl: require("../Assets/icons/bootstrap.png"),
    imageAlt: "Bootstrap icon",
  },
  {
    imageUrl: require("../Assets/icons/tailwind.png"),
    imageAlt: "tailwind CSS icon",
  },
  {
    imageUrl: require("../Assets/icons/react.png"),
    imageAlt: "React js icon",
  },
  {
    imageUrl: require("../Assets/icons/php.png"),
    imageAlt: "PHP icon",
  },
  {
    imageUrl: require("../Assets/icons/laravel.png"),
    imageAlt: "laravel icon",
  },
  {
    imageUrl: require("../Assets/icons/sql.png"),
    imageAlt: "SQL icon",
  },
  {
    imageUrl: require("../Assets/icons/mysql.png"),
    imageAlt: "MySQL icon",
  },
  {
    imageUrl: require("../Assets/icons/sql-server.png"),
    imageAlt: "sql-server icon",
  },
  {
    imageUrl: require("../Assets/icons/wordpress.png"),
    imageAlt: "Wordpress icon",
  },
  {
    imageUrl: require("../Assets/icons/elementer.png"),
    imageAlt: "Elementer icon",
  },
  {
    imageUrl: require("../Assets/icons/github.png"),
    imageAlt: "Github icon",
  },
  {
    imageUrl: require("../Assets/icons/vs-code.png"),
    imageAlt: "VS Code icon",
  },
  {
    imageUrl: require("../Assets/icons/sublime-text.png"),
    imageAlt: "Sublime icon",
  },
  {
    imageUrl: require("../Assets/icons/firebase.png"),
    imageAlt: "Firebase icon",
  },
];

const Card = ({ imageUrl, imageAlt }) => {
  return (
    <div className="w-12 md:w-20 rounded-lg border border-gray-300 shadow-md m-3">
      <img className="w-full h-12 md:h-20 rounded-t-lg" src={imageUrl} alt={imageAlt} />
    </div>
  );
};

function Skills() {
  return (
    <div className="pt-7 ">
      <div className="w-11/12 max-w[1200px] bg-white rounded-lg shadow-xl mx-auto p-4 border-l-8 border-green-700">
        <h1 className="text-gray-800 text-lg md:text-3xl font-semibold my-2" id="skills">
          My Skills:
        </h1>

        <div className="flex flex-wrap justify-center">
          {cardData.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} imageAlt={card.imageAlt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
