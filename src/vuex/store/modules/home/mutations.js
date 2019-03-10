import {
  GET_HOME_DATA,
  GET_SEARCH_DATA
} from "./mutation-type"

export default {
  [GET_HOME_DATA] (state, {homeData}) {
    state.homeData = homeData    // mutation直接操作状态
  },
  [GET_SEARCH_DATA] (state, {searchData}) {
    state.searchData = searchData    // mutation直接操作状态
  }
}
