import UserList from "@/component/user-list";
import { render, screen, waitFor } from "@testing-library/react";

describe('UserList - Rednering', () => {
    it('Should have Avinash text', async () => {
        render(<UserList />);
        expect(await screen.findByText(/Avinash/)).not.toBeInTheDocument();
        // await waitFor(() => {
        //     expect(screen.getByText('Avinash')).toBeInTheDocument();
        // })
    });

    it('Should have Kokare text', async () => {
        render(<UserList />);
        // expect(await screen.findByText("Avinash")).toBeInTheDocument();
        // await waitFor(() => {
        //     expect(screen.getByText('Avinash')).toBeInTheDocument();
        // })
        // await waitFor(() => screen.getByText('Avinash'));

        expect(await screen.findByText(/Avinash/)).not.toBeInTheDocument();
    });
});

test('should', () => {
        render(<UserList />);
        expect(screen.getByText('This is API data')).toBeInTheDocument();
}, 3000);