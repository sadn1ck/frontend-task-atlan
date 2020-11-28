export const state = () => ({
  picked: '',
  players: {
    bowl: '',
    bathand: '',
    name: '',
    country: '',
  },
  team: {
    won: 0,
  },
})
export const mutations = {
  setPicked(state, newPicked) {
    state.picked = newPicked
  },
  setPlayerBowl(state, newBowl) {
    state.players.bathand = newBowl
  },
  reset(state) {
    state.picked = ''
    state.players = {
      bowl: '',
      bathand: '',
      name: '',
      country: '',
    }
    state.team = {
      won: 0,
    }
  },
}
export const getters = {
  search(state) {
    return state.picked
  },
}
