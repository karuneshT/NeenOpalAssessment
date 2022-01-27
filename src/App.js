import "./App.css";
import Card from "./components/Card/Card";
import content from "./Content";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [data, setData] = useState(content);
  const [showModal, setShowModal] = useState(false);
  const [editingCard, setEditingCard] = useState();

  function deleteCard(clickedID) {
    setData((prevData) => {
      return prevData.filter((info) => {
        return info.id !== clickedID;
      });
    });
  }

  function pickEditingCard(value) {
    setEditingCard(data.filter((info)=>{
      return info.id===value;
    }));
  }

  function modalHandler(){
    setShowModal((prevValue) => !prevValue);
  }
  

  return (
    <div className="App">
      {showModal && <Modal onClick={modalHandler} card={editingCard} setData={setData} />}
      {data.map((info,index) => (
        <Card
          key={index}
          id={info.id}
          name={info.name}
          email={info.email}
          phone={info.phone}
          url={info.url}
          onDelete={deleteCard}
          onEdit={pickEditingCard}
          onClick={modalHandler}
        />
      ))}
    </div>
  );
}

export default App;
