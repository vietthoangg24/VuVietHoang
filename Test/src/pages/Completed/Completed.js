import React, { useState } from "react";
import styled from "styled-components";

const Completed = () => {
  const [listCompleted, setListCompleted] = useState(() => {
    let list = [
      {
        name: "Do coding challenges",
        type: "active",
      },
      {
        name: "Do coding challenges",
        type: "completed",
      },
      {
        name: "Do coding challenges",
        type: "completed",
      },
      {
        name: "Do coding challenges",
        type: "active",
      },
    ]
    let setList = () => {
      localStorage.setItem('listAll', JSON.stringify(list))
      return JSON.parse(localStorage.getItem('listAll'))
    }
    let savedList = localStorage.getItem('listAll')
    return savedList ? JSON.parse(localStorage.getItem('listAll')) : setList() 
  });


  const handleDelete = (i) => {
    // const newList = listCompleted.splice(1, 2);
    // setList(newList);
    let newList = listCompleted
    newList = newList.filter((item, index) => index !== i)
    setListCompleted(newList);
    localStorage.setItem('listAll', JSON.stringify(newList))
  };

  const handleDeleteAll = () => {
    let newList = []
    setListCompleted(newList)
    localStorage.setItem('listAll', JSON.stringify(newList))
  }
  const handleSetActive = (index) => {
    let newList = listCompleted
    let item = newList[index]
    item.type = "active"
    newList[index] = item
    setListCompleted(newList)
    localStorage.setItem('listAll', JSON.stringify(newList))
  }
  return (
    <SCompleted>
      <div className="done">
        {listCompleted.map((item, index) => {
          return (
            <div  className="work" key={index}>
              {item.type === "completed" ? 
                (
                  <>
                    <input type="checkbox" name="work1" defaultChecked onClick={() => handleSetActive(index)}/>
                    <label htmlFor="work1">{item.name}</label>
                    <i className="fa fa-trash-o" onClick={() => handleDelete(index)}></i>
                  </>
                ) :
                <></>
              }
            </div>
          );
        })}
      </div>

      <button onClick={handleDeleteAll}>
        <i className="fa fa-trash-o"></i> Delete all
      </button>
    </SCompleted>
  );
};

export default Completed;

const SCompleted = styled.div`
  .done {
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid gainsboro;
      width: 20px;
      height: 20px;
    }
    label {
      font-size: 22px;
      text-decoration: line-through;
    }
    i {
      font-size: 20px;
      margin-left: 420px;
    }
  }
  button {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-left: 450px;
    color: white;
    background-color: rgb(247, 64, 64);
    border: 0;
    border-radius: 5px;
    padding: 15px 30px;
  }
  .work {
    width: 100%;
    display: flex;
    label {
      flex: 1;
    }
  }
  input[type="checkbox"]:not(:checked) {
    display: none;
  }
  input[type="checkbox"]:not(:checked) ~ label {
    display: none;
  }
  input[type="checkbox"]:not(:checked) ~ i {
    display: none;
  }
`;
