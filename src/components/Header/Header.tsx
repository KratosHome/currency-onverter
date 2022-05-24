import "./Header.css"
import {NavLink} from "react-router-dom";


export const Header: React.FC<{}> = () => {
    return (
        <div className="HeaderContainer">
            <NavLink to="/">
                main
            </NavLink>
            <NavLink to="/converter">
                converter
            </NavLink>
        </div>
    )
};