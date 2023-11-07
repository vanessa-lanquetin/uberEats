<template>
  <div class="home">
    <RestaurantRow />
  </div>
</template>

<script>
/* IMPORT BDD */
import BDD from "../BDD.js";
import { onMounted } from "vue"
/* COMPONENTS */
import RestaurantRow from "../components/RestaurantRow.vue";

export default {
  name: "HomePage",
  components: {
    RestaurantRow,
  },
  setup() {
    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.drive_time = drive_time;
      }
    }

    let data_restaurant = [];
    let three_restaurant = [];

    const makeDataRestaurant = () => {
      /* On crée une boucle qui va parcourir la BDD et chaque élément est un restaurant */
      for (const restaurant of BDD) {
        const new_restaurant = new Restaurant(
          restaurant.name,
          restaurant.note,
          restaurant.image,
          restaurant.drive_time
        );
        //Ici on dit que le tableau three_restaurant contient 3 restaurants alors envoi le nouveau restaurant
        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant)
          /* on envoi les 3 restos  */
          data_restaurant.push(three_restaurant)
          /* Ensuite on vide le tableau */
          three_restaurant = [];
          }else{
            three_restaurant.push(new_restaurant)
          }        
      }
      console.log(data_restaurant);
    }
    
    onMounted(makeDataRestaurant);
  },
};
</script>

<style></style>
