import { Cards } from "./item";
import "./main.module.scss";

const dummyImage =
  "http://res.heraldm.com/content/image/2017/07/30/20170730000324_0.jpg";

const dummyName = "뱁새";
const dummySummary = `뱁새가 뱁새짓을 하여 귀여운것을 어찌하여 뱁새탓을 하는가,
이런들 어떠하리 저런들 어떠하리
`;
const dummyDescription = "매.우 귀엽습니다.";
const dummyCount = 5;
const dummyTags = ["I", "like", "cat", "and", "puppy"];
interface Props {
  pageType: "inventory" | "home" | "map";
  children?: JSX.Element;
}
const Inventory: React.FC = () => {
  return (
    <Cards
      cards={new Array(8).fill({
        imageLink: dummyImage,
        name: dummyName,
        summary: dummySummary,
        description: dummyDescription,
        count: dummyCount,
        tags: dummyTags,
      })}
    ></Cards>
  );
};
const Main: React.FC<Props> = () => {
  return (
    <main>
      <Inventory />
    </main>
  );
};

export default Main;
