<template>
  <button class="back" @click="$router.back()">
    <i class="fas fa-chevron-left"></i>
  </button>
  <div class="body">
    <div class="infos">
      <h1>{{ restaurant.name }}</h1>
      <p>Note : {{ restaurant.note }}</p>
      <p>Prix de la livraison : {{ restaurant.delivery_price }}</p>
      <p>Temps : {{ restaurant.drive_time }}</p>
      <p>{{ restaurant.description }}</p>
    </div>
    <div class="img">
      <img :src="restaurant.image" alt="image" />
    </div>
  </div>
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
.body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5%; 
  padding: 0 20px;
  width: 80%;
  margin:20px auto 0 auto;
}

.infos {
  flex: 1; 
  padding-right: 20px;
  line-height: 26px;
}

.img {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; 
  align-self: center;
  img {
    margin: auto;
    width: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 1280px) {
  .body{
    flex-direction: column;
  }
  .img{
    margin: 50px auto;
  }
}

@media screen and (max-width: 650px) {
  button{
    padding: 20px 0 0 0;
  }
  .body{
    width: 100%;
    padding: 0;
  }
}
</style>
