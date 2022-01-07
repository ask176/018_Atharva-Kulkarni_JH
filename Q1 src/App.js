import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyCompo />
    </div>
  );
}

function MyCompo() {
  const [inputMsg, setInputMsg] = useState("");
  const [list, setList] = useState([]);
  const [validate, setValid] = useState(false);

  const processMsg = (e) => {
    const newInputMsg = e.target.value;
    setInputMsg(newInputMsg);
  };

  const sendMsg = () => {
    if (inputMsg == "") {
      alert("invalid....!");
      setValid(true);
    }
    const user = {
      inputMsg: inputMsg,
    };
    let newList = [user, ...list];
    setList(newList);
    setInputMsg("");
    setValid(false);
  };

  return (
    <div className="container mt-3 mb-2">
      <div className="d-flex align-text-bottom bg-success h-50 text-light">
        <h1>
          MyChatApp{" "}
          <span className="fs-4">Name:Atharva Kulkarni Id: 210940520018</span>
        </h1>
      </div>
      <div className="d-flex mt-5 justify-content-around">
        <input
          className={
            inputMsg == "" && validate
              ? "form-control border border-danger"
              : "form-control border border-success"
          }
          type="text"
          value={inputMsg}
          onChange={processMsg}
        />
        <input
          className="btn btn-success mb-2"
          type="button"
          value="send"
          onClick={sendMsg}
        />
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className={
            index % 2 == 0
              ? "d-flex alert alert-success d-flex justify-content-start mt-3"
              : "d-flex alert alert-secondary d-flex d-flex justify-content-end mt-3"
          }
        >
          {item.inputMsg}
        </div>
      ))}
    </div>
  );
}
