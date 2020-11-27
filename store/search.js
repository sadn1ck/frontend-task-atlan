export const state = () => ({
  searchTerm: '',
})
export const mutations = {
  update(state, newSearchTerm) {
    state.searchTerm = newSearchTerm
  },
}
export const getters = {
  search(state) {
    return state.searchTerm
  },
}
