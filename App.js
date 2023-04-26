import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantList from './components/RestaurantList';

const Stack = createNativeStackNavigator()  
// using the library downloaded 

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator> 
      <Stack.Screen name="Home"  options={{ title: "Restaurant List"}}
      component={RestaurantList}/>  
      {/* resteraunt list name of component look at import */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}


