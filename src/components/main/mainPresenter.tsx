import "./main.module.scss";

interface Props {
  children?: JSX.Element;
}
const Main: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <h2>ㅇㅋ 여기는 main 아무튼 main</h2>
      {children}
    </main>
  );
};

export default Main;
