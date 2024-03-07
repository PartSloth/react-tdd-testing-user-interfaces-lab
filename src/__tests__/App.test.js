import { logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    expect(topLevelHeading).toBeInTheDocument();
})

test("displays an image of yourself with alt text identifying the content of the image", () => {
    render(<App />);
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt");
})

test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    })
    expect(secondLevelHeading).toBeInTheDocument();
})

test("displays a paragraph for your biography", () => {
    render(<App />);
    const paragraph = screen.getByText(/lorem ipsum/i);
    expect(paragraph).toBeInTheDocument();
})

test("displays two links, one to your GitHub page, and the other to your LinkedIn page", () => {
    render(<App />);
    const gitLink = screen.getByRole("link", {
        name: /github/i,
        exact: false,
    });
    const linkedLink = screen.getByRole("link", {
        name: /linkedin/i,
        exact: false,
    });
    expect(gitLink).toBeInTheDocument();
    expect(linkedLink).toBeInTheDocument();
    expect(gitLink).toHaveAttribute("href");
    expect(linkedLink).toHaveAttribute("href");
})