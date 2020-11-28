export const state = () => ({
  searchTerm: '',
})
export const mutations = {
  update(state, newSearchTerm) {
    state.searchTerm = newSearchTerm
  },
  reset(state) {
    state.searchTerm = ''
  },
}
export const getters = {
  search(state) {
    return state.searchTerm
  },
}
