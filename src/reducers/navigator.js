import * as types from '../constants'

const initialRoute = {path: ['videos']}
const initialState = {route: initialRoute}

export default function navigator(state = initialState, action) {
  switch (action.type) {
  case types.CHANGE_PATH:
    return Object.assign({}, state, {
      route: action.route
    });
  default:
    return state;
  }
}
