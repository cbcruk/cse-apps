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

<script setup lang="ts">
import useServerState from './composition/useServerState'
import { Status } from './types'

const { serverState, status, getNext } = useServerState()
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
