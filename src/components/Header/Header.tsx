import {NavLink} from "react-router-dom";
import {HeaderStyles} from "../../ReExports";

export const Header = () => {
    return (
        <HeaderStyles>
            <NavLink to="/">
                main
            </NavLink>
            <NavLink to="/converter">
                converter
            </NavLink>
        </HeaderStyles>
    )
};

