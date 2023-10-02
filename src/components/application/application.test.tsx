import {render, screen} from "@testing-library/react";
import {Application} from "./Application";


describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitButtomElement = screen.getByRole('button');
        expect(submitButtomElement).toBeInTheDocument();
    });
})