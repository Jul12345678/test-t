import SingleCard from "./SingleCard";

type CardType = {
  id: number | number;
  title: string;
  subTitle: string;
  rating: string;
  data: string;
  type: string;
};
function Card() {
  const cardData: CardType[] = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Association 2020",
      subTitle: "AWS Certified Solutions Architect - Association 2020",
      rating: "***** (1)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupA",
    },
    {
      id: 2,
      title: "Cyber Security Komplett-Kurs",
      subTitle:
        "Teil1: Werde ein Cyber Security Spezialist. Lerne Hacker-Angriffe abzuwehren und ihnen...",
      rating: "***** (2)",
      data: "73 Videos 8:38h Average 7 min",
      type: "groupA",
    },
    {
      id: 3,
      title: "Lerne Linux in 5 Tagen, beschleunige deine Karriere",
      subTitle:
        "Lerne nachgefragte Linux-Skills und starte eine neue Karriere als Linux Profi.",
      rating: "***** (3)",
      data: "53 Videos 5:30h Average 6 min",
      type: "groupA",
    },
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

  const grouped = cardData.filter((group) => group.type);

  const filterGroupA = cardData.filter(function (cardData: {
    id: number;
    title: string;
    subTitle: string;
    rating: string;
    data: string;
    type: string;
  }): boolean {
    return cardData.type === "groupA";
  });
  const filterGroupB = cardData.filter(function (cardData: {
    id: number;
    title: string;
    subTitle: string;
    rating: string;
    data: string;
    type: string;
  }): boolean {
    return cardData.type === "groupB";
  });
  const filterGroupC = cardData.filter(function (cardData: {
    id: number;
    title: string;
    subTitle: string;
    rating: string;
    data: string;
    type: string;
  }): boolean {
    return cardData.type === "Group C";
  });

  return <SingleCard cardData={cardData} />;
}
export default Card;
