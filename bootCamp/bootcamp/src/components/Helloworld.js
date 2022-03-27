import { useState } from "react";

function CheckListItem({ yapilacaklar, check }) {
  return (
    <div>
      <input type="checkbox" checked={check} />
      <span>{yapilacaklar}</span>
    </div>
  );
}

function App() {
  const [checkList, setCheckList] = useState([
    {
      yapilacaklar: "alisveris",
      check: true,
    },
    {
      yapilacaklar: "faturalar",
      check: true,
    },
    {
      yapilacaklar: "odevler",
      check: false,
    },
  ]);

  return (
    <div className="App container">
      {
      checkList.map((todo, index) => (
        <CheckListItem
          yapilacaklar={todo.yapilacaklar}
          check={todo.check}
          key={index}
        />
      ))}
    </div>
  );
}


function HelloWorld({ firstName, lastName }) {
    return (
        <h1>Hello {firstName} {lastName}</h1>
    )
}


function ListFruits() {
const[fruits, setFruits] = useState([]);





  return (
    <div>
        fruits.filter((fruit)=>fruit.)
        



    </div>
  )
}

export default ListFruits






function App() {

    const [personList, setpersonList] = useState([
        {
            firstName: "Ali",
            lastName: "Can"
        },
        {
            firstName: "Veli",
            lastName: "Can"
        },
        {
            firstName: "Deli",
            lastName: "Can"
        },
        {
            firstName: "Neli",
            lastName: "Can"
        }
    ]);


    return (
        <div className="App container">
            <div>
                <ul>
                    <li><checkbox>Al</checkbox>Domates al</li>
                    <li>Domates al</li>
                    <li>Domates al</li>
                </ul>
            </div>
            {
            personList.map((person) => <HelloWorld {...person} />)
            }
        </div>
    );
}

export default App;