import Vue from "vue"
import moment from "moment"
Vue.filter("format-date", function(timeStick, formatStr="YYYY-MM-DD HH:mm:ss"){
  return moment(timeStick).format(formatStr)
})

Vue.filter("count-num", function(countStr){
  if((countStr+"").length<=4){
    return countStr
  }else if((countStr+"").length===5){
    return (countStr/1000).toString().slice(0, 4)+"k "
  }else{
    return (countStr/10000).toString().split(".")[0]+"w "
  }
})
