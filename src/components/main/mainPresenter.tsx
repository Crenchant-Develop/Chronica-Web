import "./main.module.scss";

interface Props {
  children?: JSX.Element;
}
const Main: React.FC<Props> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Main;
