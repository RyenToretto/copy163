import {
  GET_CATEGORY_DATA
} from "./mutation-type"

export default {
  [GET_CATEGORY_DATA] (state, {categoryData}) {
    state.categoryData = categoryData    // mutation直接操作状态
  }
}
