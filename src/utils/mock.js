/**
 * 问题3，此处的require和import有什么区别
 */
const Mock = require("mockjs");
const COUNT = [1, 2, 3, 4, 5]; // 定义我们需要数量
let data =[]
for(let i=1;i<=COUNT.length;i++){
    data.push(Mock.mock({ // 根据数据模板生成模拟数据。
    id: Mock.Random.guid(), // 随机id
    title: Mock.Random.first(), // 随机标题
    isDelete: false, // 是否删除
    locked: Mock.Random.boolean(), // 随机锁定
    record: COUNT.map(() => { // 代办单项列表的数据
      return {
        text: Mock.Random.cparagraph(2), // 随机内容
        isDelete: false, // 是否删除
        checked: Mock.Random.boolean()  // 是否完成
      };
    })
  }))
} 
Mock.mock(/msgs/, 'get', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return data
})

//根据ID获取record的接口
Mock.mock(/getListsByID/, 'get', (param) => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  console.log(`getListsByID,params:`,param)
  let url=param.url
  let id=url.slice(url.indexOf('=')+1)
  console.log(id)
  let filter=data.filter(d=>{
    return d.id==id
  })
  return filter[0].record
})
