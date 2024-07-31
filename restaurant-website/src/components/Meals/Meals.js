import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import MealItem from "./MealItem/MealItem";
import AvailableMeals from "./AvailableMeals";


const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals/>
        </Fragment>
    );
};

export default Meals;
