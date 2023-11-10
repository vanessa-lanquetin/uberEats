<template>
          <button class="back" @click="$router.back()">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h1>{{ restaurant.name }}</h1>
  <div>
    <img :src="restaurant.image" alt="image" />
  </div>
  <p>Note {{ restaurant.note }}</p>
  <p>Temps {{ restaurant.drive_time }}</p>
</template>

<script>
import BDD from "../BDD";
// import { onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "RestaurantView",
  setup() {
    const route = useRoute();
    const restaurant = BDD.find(
      (restaurant) => restaurant.name == route.params.name
    );

    return {
      restaurant,
    };
  },
};
</script>

<style lang="scss">
button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.back {
  background-color: transparent;
  color: #000;
  font-size: 20px;
  }
</style>
