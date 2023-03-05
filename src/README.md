# 总体的数据格式：
let data=[
  {
      "todoID": "EFE4954C-47dD-3Be3-F932-E4B9241B9eFc",
      "title": "Maria",
      "isDelete": false,
      "locked": false,
      "record": [
          {
              "itemID": "f42ccA62-B684-5Fc8-A912-Ac6481D2d9fe",
              "text": "回物许半且族传标族王点边现精结第志。指强规数全置关效国战毛反规。",
              "isDelete": false,
              "checked": false
          }
      ]
  }
]
# 2.api设置
    获取页面所有待办事项列表
        名称：getTodos
        参数：
        返回值：todos数组
        [
            {
                "todoID": "EFE4954C-47dD-3Be3-F932-E4B9241B9eFc",
                "title": "Maria",
                "isDelete": false,
                "locked": false,
            }
        ]
    点击左侧代办事项右侧显示具体的内容和小代办
        名称：getInfos
        参数：todoID
        返回值：一条todo数据
        {
            "todoID": "EFE4954C-47dD-3Be3-F932-E4B9241B9eFc",
            "title": "Maria",
            "isDelete": false,
            "locked": false,
            "record": [
                {
                    "itemID": "f42ccA62-B684-5Fc8-A912-Ac6481D2d9fe",
                    "text": "回物许半且族传标族王点边现精结第志。指强规数全置关效国战毛反规。",
                    "isDelete": false,
                    "checked": false
                }
            ]
        }
    新增一个代办事项
        名称：addTodo
        参数：
        返回值：
    修改代办事项的标题
        名称：editTodoContent
        参数：todoID
        返回值：
    锁定/解锁代办事项
        名称：changeTodoLocked
        参数：todoID
        返回值：
    删除代办事项
        名称：deleteTodo
        参数：todoID
        返回值：
    添加小代办
        名称：addItem
        参数：
        返回值：
    勾选完成小代办
        名称：changeItemChecked
        参数：itemID
        返回值：
    删除小代办
        名称：deleteItem
        参数：itemID
        返回值：
    修改小代办
        名称:changeItemContent
        参数：itemID
        返回值：
# 数据的流向问题
    将todos数据存放在vuex中，最开始获取数据时就存入vuex，以后只修改vuex中的数据
