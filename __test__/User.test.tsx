import { screen, render } from '@testing-library/react';
import Users from "@/component/user";

describe('User Testing', () => { 
    it('Render User component correctly', () => { 
        render(<Users />);
        const userTest = screen.getByRole('heading');
        expect(userTest).toHaveTextContent(/Users Data/);
    });

    it('Test users data correctly', async () => {
        render(<Users />);
        const getUserList = await screen.findAllByRole('listitem');
        expect(getUserList).toHaveLength(3);
    });
});