import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import Login from "./components/Login"; // Novo componente de login
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";
import "./index.css";
import logo from './images/logo2.jpg';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticação

  useEffect(() => {
    if (isAuthenticated) {
      getAllToDo(setToDo);
    }
  }, [isAuthenticated]);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
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
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
