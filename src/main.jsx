import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
function BookList() {
  return (
    <>
      <h1>BEST SELLER BOOKS 💯</h1>
      <div className="book-list">
        <Book
          name="Wings of Blood"
          author=" Briar Boleyn"
          price={29.99}
          img="https://m.media-amazon.com/images/I/81R47YEY4SL._SY425_.jpg"
        />
        <Book
          name="Dawn of the Fire Bird"
          author="Sara Mughal Rana"
          price={27.77}
          img="https://m.media-amazon.com/images/I/81Ozz7ZRzcL._SY385_.jpg"
        />
        <Book
          name="Innamorata"
          author="Ava Reid"
          price={21.33}
          img="https://m.media-amazon.com/images/I/81JeSjKK3ZL._SY425_.jpg"
        />
        <Book
          name="Ship of Spells"
          author="H.Leighton Dickson"
          price={17.77}
          img="https://m.media-amazon.com/images/I/91IUh9WVsTL._SY425_.jpg"
        />
        <Book
          name="The Bound that Burns"
          author="Deby Cassidy"
          price={27.77}
          img="https://m.media-amazon.com/images/I/51SVF7rVX3L._SY445_SX342_.jpg"
        />
      </div>
    </>
  );
}
function Book({ name, img, price, author }) {
  // const { name, img, price, author } = props;
  return (
    <>
      <div className="book">
        <img width="100px" src={img} alt="" />
        <h4>{name}</h4>
        <p>by {author}</p>
        <p>$ {price}</p>
      </div>
    </>
  );
}

createRoot(document.querySelector("#root")).render(<BookList />);
