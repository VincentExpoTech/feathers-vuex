export default function makeAuthGetters () {
  return {
    // Auth specific "Getters" will go here
    getAuthenticatePending( state ) {
      return function () { return state.isAuthenticatePending }
    }
  }
}
