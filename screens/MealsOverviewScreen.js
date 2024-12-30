import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

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


    function renderMealItem(mealItem){
        const mealItemProps = {
            id: mealItem.item.id,
            title: mealItem.item.title,
            imageUrl: mealItem.item.imageUrl,
            affordability: mealItem.item.affordability,
            complexity: mealItem.item.complexity,
            duration: mealItem.item.duration,
        };
        return <MealItem {...mealItemProps} />
    }

    return <View style={styles.container}>
        <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});