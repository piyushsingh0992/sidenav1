import "./App.css";
import SideNav1 from "./sidenav1/Sidenav1.js";
import dog from "./dog.svg";
function App() {
  let itemArray = [
    { text: "item1" },
    { text: "item2" },
    { text: "item3" },
    { text: "item4" },
    { text: "item5" },
    { text: "item6" },
    { text: "item7" },
    { text: "item8" },
    { text: "item9" },
    { text: "item10" },
    { text: "item11" },
    { text: "item12" },
    { text: "item13" },
    { text: "item14" },
    { text: "item15" },
    { text: "item16" },
    { text: "item17" },
    { text: "item18" },
  ];
  return (
    <div className="app">
      <SideNav1 brand={{ brandImg: `${dog}` }} optioArray={itemArray} />
    </div>
  );
}

export default App;
