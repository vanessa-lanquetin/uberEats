<template>
  <div class="home">
    <div class="header">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt=""
        srcset=""
      />
      <div class="wrapper--input">
        <!-- On veut relier ce qu'il y a décrit dans l'input avec cette data là -->
        <input
          v-model="user_search_restaurant"
          type="text"
          placeholder="De quoi avez vous envie ?"
          name="search"
        />
        <div class="search">
          <router-link 
            v-for="(restaurant, i) in search_restaurant"
            :key="i"
            :to="{ name: 'Restaurant', params: { name: restaurant.name} }"
          >
            <div class="container--restaurant--search">
              <div class="wrapper--img">
                <img :src="restaurant.image" alt="" srcset="" />
              </div>
              <p>{{ restaurant.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="banniere"></div>
    <RestaurantRow
      v-for="(data, i) in data_restaurant"
      :key="i"
      :three_restaurant="data"
    />
  </div>
</template>

<script>
//IMPORT
import BDD from "../BDD.js";
import { get as fastlenvenshtein } from "fast-levenshtein";
import { onMounted, ref, watch } from "vue";
// COMPONENTS
import RestaurantRow from "../components/RestaurantRow";

export default {
  name: "homePage",
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

    let data_restaurant = ref([]);
    let all_restaurant = [];

    const makeDataRestaurant = () => {
      let three_restaurant = [];

      for (const restaurant of BDD) {
        const new_restaurant = new Restaurant(
          restaurant.name,
          restaurant.note,
          restaurant.image,
          restaurant.drive_time
        );
        // make all restaurant array
        all_restaurant.push(new_restaurant);

        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
    };
    // User search restaurant
    let user_search_restaurant = ref("");
    let search_restaurant = ref([]);
    function similarity(search, value) {
      const chunkSize = search.length;
      const chunks = [];
      for (let i = 0; i < value.length; i += 1) {
        const chunk = value.slice(i, i + chunkSize);
        chunks.push(
          fastlenvenshtein(search.toLowerCase(), chunk.toLowerCase())
        );
      }

      return Math.min(...chunks);
    }
    // Watch permet de regarder quand une variable change
    watch(user_search_restaurant, (new_value) => {
      search_restaurant.value = all_restaurant
        .slice()
        .sort(
          (a, b) =>
            similarity(new_value, a.name) - similarity(new_value, b.name)
        )
        .slice(0, 5);
    });
    //
    onMounted(makeDataRestaurant);

    // return
    return {
      data_restaurant,
      user_search_restaurant,
      search_restaurant,
    };
  },
};
</script>

<style lang="scss">
.home {
  padding-bottom: 50px;
  .header {
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    img {
      width: 200px;
    }

    .wrapper--input {
      position: relative;

      input {
        background-color: #f6f6f6;
        border: none;
        height: 60px;
        width: 400px;
        outline: none;
        padding-left: 20px;
      }

      .search {
        position: absolute;
        top: 100%;
        width: 100%;
        background-color: #ffffff;

        .container--restaurant--search {
          display: flex;
          align-items: center;
          padding: 10px;

          &:hover {
            background: #f6f6f6;
          }

          .wrapper--img {
            height: 60px;
            width: 60px;
            margin-right: 25px;
            border-radius: 50%;
            overflow: hidden;

            img {
              height: 100%;
              width: auto;
            }
          }
        }
      }
    }
  }

  .banniere {
    height: 200px;
    width: 100%;
    background-image: url("../assets/banniere.png");
    background-size: cover;
    background-position: center center;
    margin-bottom: 50px;
  }
}

@media screen and (max-width:750px) {
  .header{
    display: flex;
    flex-direction: column;
    padding: 50px 0;
  }
}
</style>
