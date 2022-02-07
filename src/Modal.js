import "./modal.css";
import React from "react";

const Modal = ({ someData }) => {
  {
    /* When Click Open Modal button I display the Modal */
  }
  const btnOpenModalOnclick = () => {
    var modal = document.getElementById("modalId");
    modal.style.display = "block";
  };

  {
    /* When Click Open Modal button I change the display=none */
  }
  const btnOnclose = () => {
    var modal = document.getElementById("modalId");
    modal.style.display = "none";
  };

  return (
    <div data-testid="idModal">
      {/* open modal button */}
      <button
        aria-label="open modal"
        role="button"
        data-testid="idModalBtnOpenModal"
        className="modal__button--open"
        onClick={btnOpenModalOnclick}
      >
        Open Modal
      </button>
      {/* Modal */}
      <div id="modalId" className="modal">
        <div className="modal__content">
          <span
            tabIndex="5"
            aria-label="close modal"
            onClick={btnOnclose}
            className="close"
          >
            &times;
          </span>
          <header className="modal__content--header"> Modal</header>
          <article>
            <p aria-label="some information about data 3">{someData}</p>
            <fieldset className="modal__fieldset">
              <legend>Some Details</legend>
              <label
                for="detailsName"
                aria-label="Name"
                className="modal__fieldset--label"
              >
                Name:
              </label>
              <input
                id="detailsName"
                tabIndex="1"
                type="text"
                name="detailsName"
                className="modal__fieldset--input"
              />{" "}
              <label
                for="detailsLastName"
                aria-label="Last name"
                className="modal__fieldset--label"
              >
                Last name:
              </label>
              <input
                id="detailsLastName"
                tabIndex="2"
                type="text"
                name="detailsLastName"
                className="modal__fieldset--input"
              />{" "}
              <label
                for="detailsCompany"
                aria-label="Company"
                className="modal__fieldset--label"
              >
                Company:
              </label>
              <input
                id="detailsCompany"
                tabIndex="3"
                type="text"
                name="detailsCompany"
                className="modal__fieldset--input"
              />{" "}
            </fieldset>
          </article>
          <footer>
            <button
              tabIndex="4"
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
