<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="search"
      name="q"
      placeholder="검색어를 입력하세요"
      class="
        w-full
        p-2
        rounded-lg
        bg-gray-200
        focus:bg-white
        focus:border-gray-300
        text-gray-600
        placeholder-gray-500
      "
      v-model="q"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SearchForm',
  setup() {
    const q = ref<string>('')
    const router = useRouter()
    const handleSubmit = () => {
      if (!q.value) {
        return
      }

      router.push({
        query: {
          q: q.value,
        },
      })

      q.value = ''
    }

    return {
      q,
      handleSubmit,
    }
  },
})
</script>
