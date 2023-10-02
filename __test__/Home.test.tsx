import Home from '@/app/page';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Home Page', () => {

    describe('Rendering', () => { 
        it("Should have Avinash text", () => {
            render(<Home />);
            expect(screen.getByText("Avinash Kokare")).toBeInTheDocument();
        });
    
        it('Should have button in the document', () => {
            render(<Home />);
            expect(screen.getByRole('button', {name: "Click Me"})).toBeInTheDocument();
        });
    
        // it('Should have input text with the label', () => {
        //     render(<Home />);
        //     expect(screen.getByRole('textbox')).toBeInTheDocument();
        // });
    
        it('Testing above approach with better one', () => {
            render(<Home />);
            expect(screen.getByLabelText('Enter the text')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
        });
    
        it('Should have placeholder', () => {
            render(<Home />);
            expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
        });
    
        it('Check if text is not in the document', () => {
            render(<Home />); //Arrange
    
            const myElement = screen.queryByText('Hello Avinash'); //Action
    
            expect(myElement).not.toBeInTheDocument(); //Assertion
    
        });
    })

    describe('Functionality', () => {
        it('Testing of button click', async() => {
            render(<Home />);
            expect(screen.queryByText('Show Text KOkare')).not.toBeInTheDocument();
            const showTextButton = screen.getByRole('button', { name: 'Show Text' });
            await userEvent.click(showTextButton);
            // expect(screen.getByText('This is my hidden text')).toBeInTheDocument();
            expect(await screen.findByText('This is my hidden text', {}, {timeout: 5000})).toBeInTheDocument(); //Handling asynchronously
        });
    });
})