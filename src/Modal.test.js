import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("<Modal /> Tests", () => {
  test("Modal - Given render Modal then element idModal should be rendered", () => {
    render(<Modal someData="Accessible Modal" />);
    const idModal = screen.getByTestId("idModal");
    expect(idModal).toBeTruthy();
  });

  test("When clicking the button Modal should be rendered", () => {
    render(<Modal someData="Accessible Modal" />);
    const button = screen.getByTestId("idModalBtnOpenModal");
    fireEvent.click(button);
    expect(screen.getByText("Accessible Modal")).toBeInTheDocument();
  });
});
