import SingleCard from "./SingleCard";
import SingleCardA from "./SingleCard";

type CardType = {
  id: number | number;
  title: string;
  subTitle: string;
  rating: string;
  data: string;
  type: string;
};
const CardB = () => {
  const cardData: CardType[] = [
    {
      id: 4,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (4)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupB",
    },
    {
      id: 5,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (5)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupB",
    },
    {
      id: 6,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (6)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupB",
    },
  ];

  // const filterGroupA = cardData.filter(function (cardData: {
  //   id: number;
  //   title: string;
  //   subTitle: string;
  //   rating: string;
  //   data: string;
  //   type: string;
  // }): boolean {
  //   return cardData.type === "groupA";
  // });
  // const filterGroupB = cardData.filter(function (cardData: {
  //   id: number;
  //   title: string;
  //   subTitle: string;
  //   rating: string;
  //   data: string;
  //   type: string;
  // }): boolean {
  //   return cardData.type === "groupB";
  // });
  // const filterGroupC = cardData.filter(function (cardData: {
  //   id: number;
  //   title: string;
  //   subTitle: string;
  //   rating: string;
  //   data: string;
  //   type: string;
  // }): boolean {
  //   return cardData.type === "groupC";
  // });

  return <SingleCard cardData={cardData} />;
};
export default CardB;
