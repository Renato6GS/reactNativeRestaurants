// rnf
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Modulos propios
import RestaurantsStack from './RestaurantsStack';
import AccountStack from './AccountStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import FavoritesStack from './FavoritesStack';

// Tab inferior para navegar
const Tab = createBottomTabNavigator();

export default function Navigation() {
    const screenOptions = (route, color) => {
        let iconName;
        // Es el switch va los "names" de cada screen
        switch(route.name){
            case "restaurants":
                iconName = "compass-outline"
                break;

            case "favorites":
                iconName = "heart-outline"
                break;

            case "top-restaurants":
                iconName = "star-outline"
                break;

            case "search":
                iconName = "magnify"
                break;

            case "account":
                iconName = "home-outline"
                break;
            }

        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    }
    

   return (
      <NavigationContainer>
          {/* Por defecto, la pantalla será el de restaurantes */}
         <Tab.Navigator
            initialRouteName="restaurants"
            tabBarOptions={{
                inactiveTintColor: "#5c5c60",
                activeTintColor: "#31b44c"
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)
            })}
         >
            {/* Aquí vamos a crear los botones inferiores y el stack superior */}

             {/* Botón para los restaurantes: */}
             <Tab.Screen
                name="restaurants"
                component={RestaurantsStack}
                options={{title: "Restaurantes"}}
             ></Tab.Screen>
            {/* Botón para los Favoritos: */}
             <Tab.Screen
                name="favorites"
                component={FavoritesStack}
                options={{title: "Favoritos"}}
             ></Tab.Screen>
            {/* Botón para los Top 5: */}
             <Tab.Screen
                name="top-restaurants"
                component={TopRestaurantsStack}
                options={{title: "Top 5"}}
             ></Tab.Screen>
            {/* Botón para los Buscar: */}
             <Tab.Screen
                name="search"
                component={SearchStack}
                options={{title: "Buscar"}}
             ></Tab.Screen>
            {/* Botón para los Cuenta: */}
             <Tab.Screen
                name="account"
                component={AccountStack}
                options={{title: "Cuenta"}}
             ></Tab.Screen>
         </Tab.Navigator>
      </NavigationContainer>
   );
}
