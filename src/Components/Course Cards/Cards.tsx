import SingleCard from "./SingleCard";
import { useState } from "react";

type CardType = {
  id: number | number;
  title: string;
  subTitle: string;
  rating: string;
  data: string;
};
const AllCards = () => {
  const [cardData, setCardData] = useState<CardType[]>([
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (1)",
      data: "73 Videos 8:38h Average 7 min",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (2)",
      data: "73 Videos 8:38h Average 7 min",
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (3)",
      data: "73 Videos 8:38h Average 7 min",
    },
    // {
    //   id: 4,
    //   title: "AWS Certified Solutions Architect - Association 2020",
    //   subTitle: "AWS Certified Solutions Architect - Association 2020",
    //   rating: "***** (4)",
    //   data: "73 Videos 8:38h Average 7 min",
    // },
    // {
    //   id: 5,
    //   title: "AWS Certified Solutions Architect - Association 2020",
    //   subTitle: "AWS Certified Solutions Architect - Association 2020",
    //   rating: "***** (5)",
    //   data: "73 Videos 8:38h Average 7 min",
    // },
    // {
    //   id: 6,
    //   title: "AWS Certified Solutions Architect - Association 2020",
    //   subTitle: "AWS Certified Solutions Architect - Association 2020",
    //   rating: "***** (6)",
    //   data: "73 Videos 8:38h Average 7 min",
    // },
    // {
    //   id: 7,
    //   title: "AWS Certified Solutions Architect - Association 2020",
    //   subTitle: "AWS Certified Solutions Architect - Association 2020",
    //   rating: "***** (7)",
    //   data: "73 Videos 8:38h Average 7 min",
    // },
    // {
    //   id: 8,
    //   title: "AWS Certified Solutions Architect - Association 2020",
    //   subTitle: "AWS Certified Solutions Architect - Association 2020",
    //   rating: "***** (8)",
    //   data: "73 Videos 8:38h Average 7 min",
    // },
    // {
    //   id: 9,
    //   title: "AWS Certified Solutions Architect - Association 2020",
    //   subTitle: "AWS Certified Solutions Architect - Association 2020",
    //   rating: "***** (9)",
    //   data: "73 Videos 8:38h Average 7 min",
    // },
  ]);
  return <SingleCard cardData={cardData} />;
};
export default AllCards;
