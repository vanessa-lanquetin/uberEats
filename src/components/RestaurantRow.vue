<template>
  <div class="restaurant--row">
    <div class="wrapper--card">
      <router-link
        class="restaurant--wrapper"
        v-for="(restaurant, index) in three_restaurant"
        :key="index"
        :to="{ name: 'Restaurant', params: { name: restaurant.name } }"
      >
        <RestaurantCard :info_restaurant="restaurant" />
      </router-link>
      <!-- v-for sert à faire une boucle, on nomme l'itération de la boucle (restaurant)), on lui donne l'index et on lui dit de faire la boucle 3 fois.
        v-for a toujours besoin d'un identifiant qui est key -->
    </div>
  </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";
export default {
  name: "RestaurantRow",
  components: {
    RestaurantCard,
  },
  props: {
    three_restaurant: Array,
  },
};
</script>

<style lang="scss" scoped>
.restaurant--row {
  margin-bottom: 20px;
  .title {
    font-size: 2rem;
  }
  .wrapper--card {
    display: flex;
    align-content: center;
    justify-content: space-between;
    .restaurant--wrapper {
      width: 32%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    }
  }
}
@media screen and (max-width: 750px) {
  .restaurant--row {
    .wrapper--card {
      display: flex;
      flex-direction: column;
      gap: 50px;
      .restaurant--wrapper {
        width: 100%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }
}
</style>
