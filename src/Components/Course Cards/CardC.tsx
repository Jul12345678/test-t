import SingleCard from "./SingleCard";

type CardType = {
  id: number | number;
  title: string;
  subTitle: string;
  rating: string;
  data: string;
  type: string;
};
const CardC = () => {
  const cardData: CardType[] = [
    {
      id: 7,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (7)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupC",
    },
    {
      id: 8,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (8)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupC",
    },
    {
      id: 9,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (9)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupC",
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
export default CardC;
