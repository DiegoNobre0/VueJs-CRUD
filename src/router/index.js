import { createRouter, createWebHistory } from "vue-router";

import AddPokemon from "../views/pokemons/AddPokemon.vue";
import AllPokemons from "../views/pokemons/AllPokemons.vue";
import EditPokemon from "../views/pokemons/EditPokemon.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AllPokemons,
    },
    {
      path: "/add-pokemon",
      name: "Add Pokemon",
      component: AddPokemon,
    },
    {
      path: "/edit-pokemon/:id",
      name: "Edit Pokemon",
      component: EditPokemon,
    }
  ],
});
export default router;