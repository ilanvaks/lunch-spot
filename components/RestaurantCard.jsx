import { useContext } from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { RestaurantContext } from "../App"

// list: first from main library, the other peoples comoponets, then own function & components, then css  
// other people components: react Boostrap for example

export default function RestaurantCard ({ food, navigation }) {
  
  const { setSelectedRestaurant } = useContext(RestaurantContext) 


  const chooseRestaurant = () => {
    setSelectedRestaurant(food) //Food is our restaurant, coders being lazy!!
    navigation.navigate("Details")
  }

  return (
    <TouchableOpacity onPress={chooseRestaurant}>
    <View style={styles.card}>
      <Text style={styles.name}>{food.name}</Text>
      <Image style={styles.img} source={{ uri: food.image }} />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  name: {
    fontSize: 24,
    marginBottom: 4,
  },
  img: {
    width: 340,
    height: 200, 
    borderRadius: 6,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 8,
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    borderColor: "#646D7E",
    borderWidth: 2, 
  },
})