import {
  GET_CATEGORY_DATA
} from "./mutation-type"

import {reqMockCategory} from '../../../../api'

export default {
  async getCategoryData ({commit}) {
    const result = await reqMockCategory();    // 发送ajax
    const categoryData = result.data.categoryL1List
    
    if (result.code === 0) {
      commit(GET_CATEGORY_DATA, {categoryData})    // 根据返回的数据调用 mutations 更改数据
    }
  }
}
