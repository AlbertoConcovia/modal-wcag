import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("<Modal /> Tests", () => {
  const btnOnclose = () => {
    var modal = document.getElementById("modalId");
    modal.style.display = "none";
  };

  test("Modal - Given render Modal then element idModal should be rendered", () => {
    render(<Modal someData="Accessible Modal" btnOnclose={btnOnclose} />);
    const idModal = screen.getByTestId("idModal");
    expect(idModal).toBeTruthy();
  });

  test("When clicking the button Open Modal should be rendered", () => {
    render(<Modal someData="Accessible Modal" btnOnclose={btnOnclose} />);
    const button = screen.getByTestId("idModalBtnOpenModal");
    fireEvent.click(button);
    expect(screen.getByText("Accessible Modal")).toBeInTheDocument();
  });

  test("When clicking the button Close Should be call correct Function", () => {
    const btnOnclose = jest.fn();
    const { getByLabelText, getByText } = render(
      <Modal someData="Accessible Modal" btnOnclose={btnOnclose} />
    );
    const button = screen.getByTestId("idModalBtnCloseModal");
    fireEvent.click(button);
    expect(btnOnclose).toHaveBeenCalled();
    expect(btnOnclose).toHaveBeenCalledTimes(1);
  });
});
