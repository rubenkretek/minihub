import { v4 as uuidv4 } from "uuid";

function ownersData() {
  return [
    {
      id: uuidv4(),
      Name: "Ruben Kretek",
      year: "2004",
      chasisCode: "R53",
      color: "Gray",
      imageLeft: "./img/ruben-front.png",
      imageRight: "./img/ruben-rear.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor arcu sit amet justo consectetur tempor. Nunc est urna, dapibus ut urna ut, scelerisque ultrices felis. Nunc et quam eget ante egestas mattis. Sed gravida eros id ante rhoncus, vitae vestibulum arcu mollis. Fusce interdum dui non rhoncus tincidunt.",
      socialLink: "https://www.instagram.com/rubenkretek/",
    },
    {
      id: uuidv4(),
      Name: "Max Oliver",
      year: "2004",
      chasisCode: "R53",
      color: "Black",
      imageLeft: "./img/r53oliver-front.png",
      imageRight: "./img/r53oliver-rear.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor arcu sit amet justo consectetur tempor. Nunc est urna, dapibus ut urna ut, scelerisque ultrices felis. Nunc et quam eget ante egestas mattis. Sed gravida eros id ante rhoncus, vitae vestibulum arcu mollis. Fusce interdum dui non rhoncus tincidunt.",
      socialLink: "https://www.instagram.com/r53oliver/",
    },
    {
      id: uuidv4(),
      Name: "Green Mini",
      year: "2006",
      chasisCode: "R53",
      color: "Green",
      imageLeft: "./img/green_mini_r53-front.png",
      imageRight: "./img/green_mini_r53-rear.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor arcu sit amet justo consectetur tempor. Nunc est urna, dapibus ut urna ut, scelerisque ultrices felis. Nunc et quam eget ante egestas mattis. Sed gravida eros id ante rhoncus, vitae vestibulum arcu mollis. Fusce interdum dui non rhoncus tincidunt.",
      socialLink: "https://www.instagram.com/green_mini_r53/",
    },
    {
      id: uuidv4(),
      Name: "John Smith",
      year: "2006",
      chasisCode: "R53",
      color: "Green",
      imageLeft: "./img/jcw_gp1-front.png",
      imageRight: "./img/jcw_gp1-rear.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor arcu sit amet justo consectetur tempor. Nunc est urna, dapibus ut urna ut, scelerisque ultrices felis. Nunc et quam eget ante egestas mattis. Sed gravida eros id ante rhoncus, vitae vestibulum arcu mollis. Fusce interdum dui non rhoncus tincidunt.",
      socialLink: "https://www.instagram.com/jcw_gp1/",
    },
  ];
}

export default ownersData;
