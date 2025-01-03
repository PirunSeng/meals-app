import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }){
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0;
    })

    /**
     * useEffect is executed after the component executed for the first time, or that means it executed after the component has been rendered.
     * So that you may see the screen title flip or transformed between MealsOverview to category title if the navigation is a bit slow.
     */
    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find((category) => category.id == catId ).title;
    //     navigation.setOptions({
    //         title: categoryTitle
    //     });
    // }, [catId, navigation]);

    /**
     * To fix that, use useLayEffect instead of useEffect. useLayoutEffect runs simultanously during the navigation.
     */
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id == catId ).title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />
    
}

export default MealsOverviewScreen;

