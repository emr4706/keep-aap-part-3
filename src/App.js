import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";

function App() {
  const [items, setItems] = useState([]);
  const addItem = newItem => {
    setItems(prevItem => {
      return [...prevItem, newItem];
    });
  };

  //// database de butun posts getirmek icin ///
  ////Data Fetching ///
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/")
      .then(res => {
        console.log(res);
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = id => {
    axios
      .delete("http://localhost:5000/posts/" + id)
      .then(response => {
        let tempItems = items.filter(item => item.id !== id);
        setItems(tempItems);
        // setItems(prevItem => {
        //   return prevItem.filter(noteItem => {
        //     return noteItem.id !== id;
        //   });
        // });
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    // window.location="/create";
  };
 

  return (
    <Router>
      <div>
        {/* <Route path="/">
       <Login />
      </Route> */}
        {/* <Route path="/edit/:id" component={EditExercise} /> */}
        <Route path="/">
          <Header />
          <CreatePost onAdd={addItem} />
          {items.map((item, index) => {
            return (
              <Posts
                id={item._id}
                key={index}
                title={item.title}
                content={item.content}
                onDelete={handleDelete}
              />
            );
          })}
          <Footer />
        </Route>
        <Route path="/user">
      <CreateUser />
      </Route>
      </div>
    </Router>
  );
}

export default App;
