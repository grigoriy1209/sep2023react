import {Cars} from "../components/CarsContainer";
import {Outlet} from "react-router-dom";

const CarPage = () => {
    return (
        <div>
            <Cars/>
        </div>
    );
};

export {CarPage};