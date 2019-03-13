import {
  GET_TABS,
  GET_RECOMMEND_DATA,
  GET_MORE_RECOMMEND_DATA,
  GET_COMMENT_DATA,
  GET_THREE_TYPE_DATA
} from "./mutation-type"

import {
  reqTabs,
  reqRecommendData,
  reqAutoRecommendData,
  reqColection,
  reqList
} from '../../../../api'

export default {
  async getTabs ({commit}) {    // tab 导航栏标题 信息
    const result = await reqTabs();    // 发送 ajax
    const tabs = result.data
    
    if (result.code === "200") {
      commit(GET_TABS, {tabs})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getRecommendData ({commit}) {    // 推荐
    const result = await reqRecommendData();    // 发送ajax
    const recommendData = result.data
    
    if (result.code === "200") {
      commit(GET_RECOMMEND_DATA, {recommendData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getMoreRecommendData ({commit},{page, size}) {    // 推荐 - 上拉加载数据
    const result = await reqAutoRecommendData(page, size);    // 发送ajax
    const moreRecommendData = result.data
    
    if (result.code === "200") {
      commit(GET_MORE_RECOMMEND_DATA, {moreRecommendData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getCommentData ({commit},id=6) {    // 晒单 - 可爱值max的严选萌物
    const result = await reqColection(id);    // 发送ajax
    const commentData = result.data
    
    if (result.code === "200") {
      commit(GET_COMMENT_DATA, {commentData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getThreeTypeData ({commit},{page, size, type}) {    // 晒单 - 可爱值max的严选萌物
    const result = await reqList(page, size, type);    // 发送ajax
    const threeTypeData = result.data
    
    if (result.code === "200") {
      threeTypeData.type = type
      commit(GET_THREE_TYPE_DATA, {threeTypeData})    // 根据返回的数据调用 mutations 更改数据
    }
  }
}
