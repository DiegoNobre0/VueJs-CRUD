<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
let newPokemon = reactive({
  name: "",
  type: "",
  description: "",
  imageUrl: "",
});
const router = useRouter();
const addNewPokemon = () => {
  axios.post("http://localhost:3000/pokemons", newPokemon).then(() => {
    router.push("/");
  });
};
</script>
 
<template>
  <div class="container mt-4 w-50">
    <form @submit.prevent="addNewPokemon">
      <legend >Adicionar Novo Pokemon</legend>
      <div class="mb-3">
        <label for="txtwonderName" class="form-label">Nome</label>
        <input
          type="text"
          v-model="newPokemon.name"
          class="form-control"
          id="txtwonderName"
        />
      </div>
      <div class="mb-3">
        <label for="txtLocation" class="form-label">Tipo</label>
        <input
          type="text"
          v-model="newPokemon.type"
          class="form-control"
          id="txtLocation"
        />
      </div>
       <div class="mb-3">
        <label for="txtLocation" class="form-label">Descrição</label>
        <input
          type="text"
          v-model="newPokemon.description"
          class="form-control"
          id="txtLocation"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageUrl" class="form-label">Imagem URL</label>
        <input
          type="text"
          v-model="newPokemon.imageUrl"
          class="form-control"
          id="txtImageUrl"
        />
      </div>
      <button type="submit" class="btn btn-primary">Adicionar</button>
    </form>
  </div>
</template>