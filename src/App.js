import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import data from "./data";

export default function App() {
  const body = data.map((item) => {
    return <Body key={item.id} item={item} />;
  });

  return (
    <>
      <Header />
      <section>{body}</section>
    </>
  );
}
