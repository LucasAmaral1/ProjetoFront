import axios from "axios";

const baseURL = "http://localhost:5000";
//"https://todo-app-express-backend-rtbt.onrender.com";





const getAllToDo = (setToDo) => {
  axios.get(`${baseURL}`).then(({ data }) => {
    console.log("data --->", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseURL}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseURL}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseURL}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
