import "./main.module.scss";
import Inventory from "./page/inventory/inventoryPresenter";

interface Props {
  pageType: "inventory" | "home" | "map";
  children?: JSX.Element;
}
const Main: React.FC<Props> = ({}) => {
  return (
    <main>
      <Inventory />
    </main>
  );
};

export default Main;
