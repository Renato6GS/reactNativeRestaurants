// rnf
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Modulos propios
// import Favorites from '../screens/Favorites';
// import TopRestaurants from '../screens/TopRestaurants';
// import Search from '../screens/Search';
// import Account from '../screens/Account';
import RestaurantsStack from './RestaurantsStack';
import AccountStack from './AccountStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import FavoritesStack from './FavoritesStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
   return (
      <NavigationContainer>
         <Tab.Navigator>
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
                name="buscar"
                component={SearchStack}
                options={{title: "Buscar"}}
             ></Tab.Screen>
            {/* Botón para los Cuenta: */}
             <Tab.Screen
                name="cuenta"
                component={AccountStack}
                options={{title: "Cuenta"}}
             ></Tab.Screen>



         </Tab.Navigator>
      </NavigationContainer>
   );
}
