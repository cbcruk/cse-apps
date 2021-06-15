<template>
  <div class="max-w-sm p-4 m-auto">
    <SearchForm />
    <SearchList :items="serverState.items" class="mt-4" />
    <button v-if="serverState.queries?.nextPage" @click="getNext">more</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchForm from './components/SearchForm.vue'
import SearchList from './components/SearchList.vue'
import useServerState from './composition/useServerState'

export default defineComponent({
  name: 'App',
  components: {
    SearchForm,
    SearchList,
  },
  setup() {
    const { serverState, getNext } = useServerState()

    return {
      serverState,
      getNext,
    }
  },
})
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
