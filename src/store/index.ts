import { createStore } from 'vuex'

export interface State {
  count: number
}

const store = createStore<State>({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})

export default store
