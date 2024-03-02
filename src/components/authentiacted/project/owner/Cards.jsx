import { useEffect } from "react";
import Card from "./Card";

const Cards = ({ project, statistics }) => {
  const cards = [
    {
      name: "tasks",
      number: 402,
      color: "#66DC90",
      value: "40",
    },
    {
      name: "Participants",
      number: 49,
      color: "#56A0EA",
      value: "30",
    },
    {
      name: "Files",
      number: 1563,
      color: "#0AE7EF",
      value: "20",
    },
    { name: "Days", number: 8, color: "#BFB7F1", value: "100 day" },
  ];

  console.log("helooooooooooooooo");

  useEffect(() => {
    console.log(statistics, "statistics");
  }, [statistics]);
  console.log(statistics?.members?.length, "fsdfsa");
  return (
    <div className="flex items-center justify-between">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
