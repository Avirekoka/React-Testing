import UserComponent from "@/component/user-component";
import { render, screen} from "@testing-library/react";

describe('This is testing of User Component', () => {
    it('Email verified', () => {
        render(<UserComponent name="Avinash" userName="AvkNash45" email="avinash.kokare@fitcircle.in" isEmailVarified={true} />);

        expect(screen.getByText('Email Verified')).toBeInTheDocument();
    });

    it('Email not verified', () => {
        render(<UserComponent name="Avinash" userName="AvkNash45" email="avinash.kokare@fitcircle.in" isEmailVarified={false} />);

        expect(screen.getByText('Email Not Verified')).toBeInTheDocument();
    });

    it('Should have display name end with three dots when length is greated than 30', () => {
        render(<UserComponent name="Should have display name end with three dots when length is greated than 30" userName="AvkNash45" email="avinash.kokare@fitcircle.in" isEmailVarified={false} />);

        const displayName = screen.getByText(/Name/);
        expect(displayName).toHaveTextContent(/.*\.\.\./);
    });
});