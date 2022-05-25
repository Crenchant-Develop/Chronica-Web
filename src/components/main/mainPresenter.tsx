import { Cards } from "./item";

import "./main.module.scss";

const dummyImage =
  "http://res.heraldm.com/content/image/2017/07/30/20170730000324_0.jpg";

const dummyName = "뱁새";
const dummyDescription = "매.우 귀엽습니다.";
const dummyCount = 5;
interface Props {
  pageType: "inventory" | "home" | "map";
  children: JSX.Element;
}
const Main: React.FC<Props> = ({ pageType, children }) => {
  const page = {
    home: <></>,
    inventory: (
      <Cards
        cards={new Array(8).fill({
          imageLink: dummyImage,
          name: dummyName,
          description: dummyDescription,
          count: dummyCount,
        })}
      ></Cards>
    ),
    map: <></>,
  };
  return (
    <main>
      {page[pageType]}
      {children}
    </main>
  );
};

export default Main;
