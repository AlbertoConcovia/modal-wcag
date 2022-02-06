import "./modal.css";
import React from "react";

const Modal = ({ someData }) => {
  const btnOnclick = () => {
    var modal = document.getElementById("modalId");
    modal.style.display = "block";
  };

  const btnOnclose = () => {
    var modal = document.getElementById("modalId");
    modal.style.display = "none";
  };

  return (
    <div data-testid="idModal">
      <button
        aria-label="open modal"
        role="button"
        className="modal__button--open"
        onClick={btnOnclick}
      >
        Open Modal
      </button>
      <div id="modalId" className="modal">
        <div className="modal__content">
          <span
            tabIndex="6"
            aria-label="close modal"
            onClick={btnOnclose}
            className="close"
          >
            &times;
          </span>
          <header tabIndex="1" className="modal__content--header">
            {" "}
            Modal
          </header>
          <article>
            <p tabIndex="2" aria-label="accessible modal">
              {" "}
              {someData}{" "}
            </p>
            <p tabIndex="3" aria-label="some information about data 2">
              {" "}
              some information 2{" "}
            </p>
            <p tabIndex="4" aria-label="some information about data 3">
              {" "}
              some information 3{" "}
            </p>
          </article>
          <footer>
            <button
              tabIndex="5"
              aria-label="close modal"
              role="button"
              className="modal__button--close"
              type="button"
              onClick={btnOnclose}
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
