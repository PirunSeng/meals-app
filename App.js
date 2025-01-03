import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from "@expo/vector-icons"; 
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: '#fff',
              sceneContainerStyle: { backgroundColor: '#3f2f25' },
              drawerContentStyle: { backgroundColor: '#351401' },
              drawerInactiveTintColor: '#fff',
              drawerActiveTintColor: '#351401',
              drawerActiveBackgroundColor: '#e4baa1',
              
              // contentStyle: { backgroundColor: '#351401' }
            }}
          >
            <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: "All Categories", drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} /> }} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ title: "All Favorites", drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} /> }} />
        </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: '#fff',
              contentStyle: { backgroundColor: '#3f2f25' }
            }}
          >
            {/* <Stack.Screen name='MealsCategories' component={CategoriesScreen}
              options={{
                title: 'All Categories',
              }}
            /> */}
            <Stack.Screen name='Drawer' component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />


            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{ title: "About the Meal" }}
              /**
               * This options we can set cannot connect with the component code or they are not linked. If we need, we need to write something instead in the component directly.
               * E.g We can use useLayoutEffect()
               */
              // options={{
              //   headerRight: () => {
              //     return <Text>Header Text Right</Text>
              //   }
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
