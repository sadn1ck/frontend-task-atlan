export const state = () => ({
  isTeamSelected: '',
  isPlayerSelected: '',
})
export const mutations = {
  update(state, updatedItem, c) {
    if (c === 't') state.isTeamSelected = updatedItem
    else if (c === 'p') state.isPlayerSelected = updatedItem
  },
}
export const getters = {
  search(state, c) {
    if (c === 't') return state.isTeamSelected
    else if (c === 'p') return state.isPlayerSelected
  },
}
