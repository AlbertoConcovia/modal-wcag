import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("<Modal /> Tests", () => {
  test("Modal - Given render Modal then element idModal should be rendered", () => {
    render(<Modal someData="Accessible Modal" />);
    const idModal = screen.getByTestId("idModal");
    expect(idModal).toBeTruthy();
  });

  test("When clicking the button Open Modal should be rendered", () => {
    render(<Modal someData="Accessible Modal" />);
    const buttonOpenModal = screen.getByTestId("idModalBtnOpenModal");
    fireEvent.click(buttonOpenModal);
    expect(screen.getByText("Accessible Modal")).toBeInTheDocument();
  });
});
