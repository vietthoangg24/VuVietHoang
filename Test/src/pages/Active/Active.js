import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Active = () => {
  const [listAll, setListAll] = useState(() => {
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

  const [value, setValue] = useState("");

  const [selected, setSelected] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    let newValue = {
      name: value,
      type: "active"
    }
    const update = [...listAll, newValue];
    localStorage.setItem('listAll', JSON.stringify(update))
    setListAll(update);
  };

  const handleSetCompleted = (index) => {
    let newList = listAll
    let item = newList[index]
    item.type = "completed"
    newList[index] = item
    setListAll(newList)
    localStorage.setItem('listAll', JSON.stringify(newList))
  }
  return (
    <SActive >
      <form className="add" onSubmit={handleAdd}>
        <input
          placeholder="add details"
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>

      <div className="body">
        {listAll.map((item, index) => {
          return (
            <div className="work" key={index}>
              {item.type === "active" ? (
                <>
                    <input
                    type="checkbox"
                    name="work1"
                    style={{
                      border: "1px solid gainsboro",
                      width: "20px",
                      height: "20px",
                    }}
                    onClick={() => handleSetCompleted(index)}
                    />
                  <label htmlFor="work1" className="">
                    {item.name}
                  </label>
                </>
              ) : <></> }
              
            
            </div>
          );
        })}
      </div>
    </SActive>
  );
};

export default Active;

const SActive = styled.div`
  .add {
    display: flex;
    gap: 1rem;
    input {
      width: 440px;
      height: 40px;
      border-radius: 10px;
      font-size: 15px;
      border: 2px solid gainsboro;
      padding-left: 10px;
    }
    button {
      width: 100px;
      border-radius: 10px;
      border: 0;
      font-size: 15px;
      background-color: rgb(60, 60, 251);
      color: white;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    input[type="checkbox"]:checked {
      display: none;
    }
    input[type="checkbox"]:checked ~ label {
      display: none;
    }
    .done {
      font-size: 22px;
      text-decoration: line-through;
    }
    label {
      font-size: 22px;
      /* text-decoration: line-through; */
    }
  }
`;
