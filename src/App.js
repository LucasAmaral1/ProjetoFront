import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";
import "./index.css";
import logo from './images/newLogo.png';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tarefas Para Realizar</h1>
        <div className="top">
          <div className="input-container">
            <input
              type="text"
              placeholder="Adicione uma tarefa..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Atualizar" : "Adicionar"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item.id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
