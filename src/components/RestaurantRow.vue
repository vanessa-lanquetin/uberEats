<template>
  <div class="restaurant--row">
    <h2 class="title">Nos restaurants</h2>
    <div class="wrapper--card">
      <!-- v-for sert à faire une boucle, on nomme l'élément (card)), on lui donne l'index et on lui dit de faire la boucle 3 fois.
        v-for a toujours besoin d'un identifiant qui est key -->
      <RestaurantCard v-for="(card, index) in 3" :key="index" />
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
};
</script>

<style lang="scss" scoped>
.restaurant--row {
  .title{
    font-size: 2rem;
  }
  .wrapper--card {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
}
</style>
