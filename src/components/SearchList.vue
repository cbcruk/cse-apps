<template>
  <div v-if="hasSearchResult" class="flex flex-wrap gap-4">
    <div
      v-for="item in items"
      :key="item.cacheId"
      class="w-full shadow rounded-md overflow-hidden"
    >
      <img :src="item.pagemap.cse_image[0].src" alt="" class="w-full" />
      <div class="p-4">
        <a
          :href="item.link"
          target="_blank"
          rel="noreferrer"
          v-html="item.htmlTitle"
          class="title text-md text-gray-900 font-semibold"
        />
        <div v-html="item.snippet" class="mt-1 text-xs text-gray-500" />
      </div>
    </div>
  </div>
  <div v-else-if="isSucceded && !hasSearchResult" class="text-lg italic">
    검색 결과가 없습니다.
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import type { ServerState } from '../types'

const props = defineProps<{
  items: ServerState['items']
  isSucceded: boolean
}>()

const route = useRoute()
const hasSearchResult = ref(false)

watchEffect(() => {
  hasSearchResult.value = props.items.length > 0 && route.query.q !== ''
})
</script>

<style scoped>
.title :deep(b) {
  color: #000;
}
</style>
