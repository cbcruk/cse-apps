import { reactive, onMounted, watch } from 'vue'
import { stringifyQuery, useRoute } from 'vue-router'
import { ServerState, Status } from '../types'
import useStatus from './useStatus'

function useServerState() {
  const route = useRoute()
  const status = useStatus()
  const serverState = reactive<ServerState>({
    items: [],
  })
  const getSearchResult = async (start?: number) => {
    const { q } = route.query

    if (!q) {
      return
    }

    try {
      status.value = Status.Loading

      const queryString = stringifyQuery({
        q,
        start,
      })

      const response = await fetch(`/api/search?${queryString}`)
      const data = await response.json()

      serverState.items = serverState.items.concat(data.items)
      serverState.queries = data.queries

      status.value = Status.Succeeded
    } catch (error) {
      status.value = Status.Failed
    }
  }
  const getNext = () => {
    const nextPage = serverState.queries?.nextPage

    getSearchResult(nextPage ? nextPage[0].startIndex : 0)
  }

  onMounted(() => getSearchResult())

  watch(
    () => route.query,
    () => getSearchResult()
  )

  return {
    status,
    serverState,
    getNext,
  }
}

export default useServerState
