<template>
  <div class="max-w-sm p-4 m-auto">
    <SearchForm />
    <SearchList
      :items="serverState.items"
      :isSucceded="status === Status.Succeeded"
      class="mt-4"
    />
    <SearchMore v-if="serverState.queries?.nextPage" @click="getNext" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchForm from './components/SearchForm.vue'
import SearchList from './components/SearchList.vue'
import SearchMore from './components/SearchMore.vue'
import useServerState from './composition/useServerState'
import { Status } from './types'

export default defineComponent({
  name: 'App',
  components: {
    SearchForm,
    SearchList,
    SearchMore,
  },
  setup() {
    const { serverState, status, getNext } = useServerState()

    return {
      serverState,
      status,
      Status,
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
