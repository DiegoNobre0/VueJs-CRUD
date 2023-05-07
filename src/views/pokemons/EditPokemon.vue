<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
 
let pokemonToUpdate = reactive({
  id: 0,
  name: "",
  type: "",
  description: "",
  imageUrl: "",
});
 
const router = useRouter();
const route = useRoute();
 
onMounted(() => {
  axios
    .get(`http://localhost:3000/pokemons/${route.params.id}`)
    .then((response) => {
      pokemonToUpdate.id = response.data.id;
      pokemonToUpdate.name = response.data.name;
      pokemonToUpdate.type = response.data.type;
      pokemonToUpdate.description = response.data.description;
      pokemonToUpdate.imageUrl = response.data.imageUrl;
    });
});
 
const updatePokemon = () => {
  axios.put(`http://localhost:3000/pokemons/${route.params.id}`, pokemonToUpdate).then(() => {
    router.push("/");
  });
};
</script>
<template>
  <div class="container mt-4 w-50">
    <form @submit.prevent="updatePokemon">
      <legend>Atualizar Pokemon</legend>
      <div class="mb-3">
        <label for="txtWonderName" class="form-label">Nome</label>
        <input
          type="text"
          v-model="pokemonToUpdate.name"
          class="form-control"
          id="txtWonderName"
        />
      </div>
      <div class="mb-3">
        <label for="txtLocation" class="form-label">Tipo</label>
        <input
          type="text"
          v-model="pokemonToUpdate.type"
          class="form-control"
          id="txtLocation"
        />
      </div>
       <div class="mb-3">
        <label for="txtLocation" class="form-label">Descrição</label>
        <input
          type="text"
          v-model="pokemonToUpdate.description"
          class="form-control"
          id="txtLocation"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageUrl" class="form-label">Image URL</label>
        <input
          type="text"
          v-model="pokemonToUpdate.imageUrl"
          class="form-control"
          id="txtImageUrl"
        />
      </div>
      <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
  </div>
</template>