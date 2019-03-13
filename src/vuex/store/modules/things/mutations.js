import {
  GET_TABS,
  GET_RECOMMEND_DATA,
  GET_MORE_RECOMMEND_DATA,
  GET_COMMENT_DATA,
  GET_THREE_TYPE_DATA
} from "./mutation-type"

export default {
  [GET_TABS] (state, {tabs}) {
    state.tabs = tabs    // mutation 直接操作状态
  },
  [GET_RECOMMEND_DATA] (state, {recommendData}) {
    state.recommendData = recommendData    // mutation 直接操作状态
  },
  [GET_MORE_RECOMMEND_DATA] (state, {moreRecommendData}) {
    if (!state.moreRecommendData.hasMore) {
      state.moreRecommendData = moreRecommendData    // 如果 autoRecommendData 还没有数据
    } else if (state.moreRecommendData.hasMore) {
      state.moreRecommendData.result.push(...moreRecommendData.result)    // 如果有数据向其中追加
    }
  },
  [GET_COMMENT_DATA] (state, {commentData}) {
    state.commentData = commentData    // mutation 直接操作状态
  },
  [GET_THREE_TYPE_DATA] (state, {threeTypeData}) {
    if (!state.threeTypeData.hasMore) {
      state.threeTypeData = threeTypeData    // 如果tabData还没有数据
    } else if (state.threeTypeData.hasMore) {
      if (state.threeTypeData.type === threeTypeData.type) {
        // 如果类型相同再追加, 避免所有数据都追加在一个数组内
        state.threeTypeData.topicList.push(...threeTypeData.topicList)
      } else {
        // 不相同, 则不追加, 直接赋值 - 切换了 type - 最新、最热、晒单合辑
        state.threeTypeData = threeTypeData
      }
    }
  }
}
