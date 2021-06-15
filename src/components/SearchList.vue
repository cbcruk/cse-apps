<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="item in items"
      :key="item.cacheId"
      class="w-full shadow rounded-md overflow-hidden"
    >
      <img :src="item.pagemap.cse_image[0].src" alt="" class="w-full" />
      <div class="p-4">
        <div
          v-html="item.htmlTitle"
          class="title text-md text-gray-900 font-semibold"
        />
        <div v-html="item.snippet" class="mt-1 text-xs text-gray-500" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ServerState } from '../types'

interface Props {
  items: ServerState['items']
}

export default defineComponent({
  name: 'SearchList',
  props: {
    items: Array as PropType<Props['items']>,
  },
})
</script>

<style scoped>
.title :deep(b) {
  color: #000;
}
</style>
