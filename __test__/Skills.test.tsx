import Skills from "@/component/skills";
import { ISkills } from "@/types/skill.type";
import { render, screen } from "@testing-library/react";

describe('Testing of Skill component', () => {
    const skill = ["HTML", "CSS", "Javascript", "React", "Mongo"];
    it('Testing of Skill component', () => {
        render(<Skills skill={skill}/>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    it('Testing of list items', () => {
        render(<Skills skill={skill} />);
        const listItem = screen.getAllByRole('listitem');
        expect(listItem).toHaveLength(skill.length);
    });

    it('Renders Login button', () => {
        render(<Skills skill={skill} />);

        const loginButton = screen.getByRole('button', { name: 'Login' });
        expect(loginButton).toBeInTheDocument();
    });

    //Below code will throws an error
    // it('Not learning button not renders', () => {
    //     render(<Skills skill={skill} />);

    //     const learningButton = screen.getByRole('button', { name: /Learning/ });
    //     expect(learningButton).not.toBeInTheDocument();
    // });

    it('Not learning button not renders', () => {
        render(<Skills skill={skill} />);

        const learningButton = screen.queryByRole('button', { name: /Learning/ });
        expect(learningButton).not.toBeInTheDocument();
    });

    //Testing of Asynchronous code
    
    //Below code will throw an error
    // it('Start learning button is eventually displayed', () => {
    //     render(<Skills skill={skill} />);

    //     const learningButton = screen.getByRole('button', { name: /Start Learning/ });
    //     expect(learningButton).toBeInTheDocument();
    // });

    it('Start learning button is eventually displayed', async () => {
        render(<Skills skill={skill} />);

        const learningButton = await screen.findByRole('button', { name: /Learning/ }, {timeout: 5000});
        expect(learningButton).toBeInTheDocument();
    });
});