import { ref } from 'vue'
import { Status } from '../types'

function useStatus() {
  const status = ref(Status.Idle)

  return status
}

export default useStatus
