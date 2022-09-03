import React from 'react';
import logoFirst from './images/first-year.svg';
import logoSecond from './images/second-year.svg';
import './BorrowBooks.css';
import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div class="mainBorrow">
      <div class="headingBx">Available Options</div>
      <div class="headingBx">━</div>
      <div class="container">
        <Link to="/lend-books">
          <div class="cardBx">
            <div class="imgBx">
              <img src={logoFirst} alt="physics" />
            </div>
            <div class="contentBx">
              <h2>Lend Books</h2>
              <div class="size"></div>
            </div>
          </div>
        </Link>

        <Link to="/borrow-books">
          <div class="cardBx">
            <div class="imgBx">
              <img src={logoSecond} alt="chemistry" />
            </div>
            <div class="contentBx">
              <h2>Borrow Books</h2>
              <div class="size"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Books;
