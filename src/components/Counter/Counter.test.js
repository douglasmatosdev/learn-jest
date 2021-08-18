import { render, screen } from '@testing-library/react';
import Counter from '.';

describe("Counter Component", () => {
    test("Deve iniciar o titulo com o valor 0", () => {
        render(<Counter />);

        const counterTitle = screen.getByText("0");

        expect(counterTitle).toBeInTheDocument();
    });

    test("Deve conter a classe counter__title no titulo", () => {
        render(<Counter />);

        const counterTitle = screen.getByText("0");

        expect(counterTitle).toHaveClass("counter__title");
    });

    test("Não deve iniciar o titulo com as classes counter__title-increment e counter__title--decrement", () => {
        render(<Counter />);

        const counterTitle = screen.getByText("0");

        expect(counterTitle).not.toHaveClass("counter__title--increment");
        expect(counterTitle).not.toHaveClass("counter__title--decrement");
    });

    test("Deve conter um botão incrementar", () => {
        render(<Counter />);

        const buttonIncrement = screen.getByRole("button", { name: /incrementar/i });

        expect(buttonIncrement).toBeInTheDocument();
    });

    test("Deve conter um botão incrementar com as classes button e button--increment", () => {
        render(<Counter />);

        const buttonIncrement = screen.getByRole("button", { name: /incrementar/i });

        expect(buttonIncrement).toHaveClass("button");
        expect(buttonIncrement).toHaveClass("button--increment");
    });

    test("Deve conter um botão decrementar", () => {
        render(<Counter />);

        const buttonIncrement = screen.getByRole("button", { name: /decrementar/i });

        expect(buttonIncrement).toBeInTheDocument();
    });

    test("Deve conter um botão decrementar com as classes button e button--decrement", () => {
        render(<Counter />);

        const buttonIncrement = screen.getByRole("button", { name: /decrementar/i });

        expect(buttonIncrement).toHaveClass("button");
        expect(buttonIncrement).toHaveClass("button--decrement");
    });

    
});
