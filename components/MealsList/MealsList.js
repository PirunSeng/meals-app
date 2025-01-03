import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }){
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
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    </View>
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});