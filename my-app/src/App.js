import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [items, setItems] = useState([]);
  const addItem = newItem => {
    setItems(prevItem => {
      return [...prevItem, newItem];
    });
  };

  const handleDelete = (id) => {
    setItems(prevItem => {
      return prevItem.filter((noteItem, index) => {
        return index !== id;
      }) 
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((item, index) => {
        return <Note id={index} key={index} title={item.title} content={item.content} onDelete={handleDelete} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
