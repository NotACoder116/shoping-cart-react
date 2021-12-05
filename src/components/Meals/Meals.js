import { Fragment } from "react";
import AvailaleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
    return <Fragment>
        <MealsSummary/>
        <AvailaleMeals/>
    </Fragment>
};

export default Meals;