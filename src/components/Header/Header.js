import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={`/episode`}>Rick and Morty</NavLink>
        </div>
    );
};

export {Header};