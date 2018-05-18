export default function makeAuthGetters () {
  return {
    // Auth specific "Getters" will go here
    getAuthenticatePending( state ) {
      return function () { return state.isAuthenticatePending }
    },
    getAccessToken( state ) {
      return function () { return state.accessToken }
    },
    getUser( state ) {
      return function () { return state.user }
    }
  }
}
