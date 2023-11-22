// import "../style/App.scss";
// import Cards from "../Cards/Cards";
// import burger from "../assets/burger.svg";
// import potatoes from "../assets/potatoes.svg";
// import hotDog from "../assets/hot-dog.svg";
// function App() {
//   const arr = [
//     {
//       title: "Супер сырный",
//       massa: "512г",
//       price: "550₽",
//       img: burger,
//     },
//     {
//       title: "Картошка фри",
//       massa: "180г",
//       price: "245₽",
//       img: potatoes,
//     },
//     {
//       title: "Жгучий хот-дог",
//       massa: "245г",
//       price: "239₽",
//       img: hotDog,
//     },
//   ];

//   return (
//     <>
//       <div className="cards">
//         <div className="basket">
//           <div className="basket-title">
//             <h2>Корзина</h2>
//           </div>
//           <div className="basket-content">
//             <span>2s</span>
//           </div>
//         </div>
//         <Cards cards={arr[0]} />
//         <Cards cards={arr[1]} />
//         <Cards cards={arr[2]} />
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.scss";
import arrCards from "../../foodBurgers.json";
import Cards from "../Cards/Cards";
export default function App() {
  const [burgers, setBurgers] = useState(arrCards);
  const [allProductsCount, setAllProductsCount] = useState(0);

  function editAllProductsCount(amper) {
    setAllProductsCount(allProductsCount + amper);
  }

  function delCards(id) {
    const copyBurgersArr = [...burgers];
    const newBurgersArr = copyBurgersArr.filter((item) => item.id != id);
    setBurgers(newBurgersArr)
  }

  if (!burgers) {
    return <h1>Error 404</h1>;
  }

  return (
    <div className="container">
      <h1>{allProductsCount}</h1>
      <div className="wrapper_gl_cards">
        {burgers.map((item) => (
          <Cards
            {...item}
            key={item.id}
            editAllProductsCount={editAllProductsCount}
            delCards={delCards}
          />
        ))}
      </div>
    </div>
  );
}
