import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }){
    function renderCategory(itemData){
        function presssHandler(){
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }
    
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={presssHandler} />
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
    />
}

export default CategoriesScreen;