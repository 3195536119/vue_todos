/**
 * 问题3，此处的require和import有什么区别
 */
const Mock = require("mockjs");
// const COUNT = [1, 2, 3, 4, 5]; // 定义我们需要数量
// let data =[]
// for(let i=1;i<=COUNT.length;i++){
//     data.push(Mock.mock({ // 根据数据模板生成模拟数据。
//     id: Mock.Random.guid(), // 随机id
//     title: Mock.Random.first(), // 随机标题
//     isDelete: false, // 是否删除
//     locked: Mock.Random.boolean(), // 随机锁定
//     record: COUNT.map(() => { // 代办单项列表的数据
//       return {
//         id: Mock.Random.guid(), // 随机id
//         text: Mock.Random.cparagraph(2), // 随机内容
//         isDelete: false, // 是否删除
//         checked: Mock.Random.boolean()  // 是否完成
//       };
//     })
//   }))
// } 
let data=[
  {
      "id": "EFE4954C-47dD-3Be3-F932-E4B9241B9eFc",
      "title": "Maria",
      "isDelete": false,
      "locked": false,
      "record": [
          {
              "id": "f42ccA62-B684-5Fc8-A912-Ac6481D2d9fe",
              "text": "回物许半且族传标族王点边现精结第志。指强规数全置关效国战毛反规。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "C6eeDadD-3bDC-dd7c-7144-bEf3A43B9f2b",
              "text": "响铁值查法感别题比个花月育。声计段圆这八这示快常料再主因什。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "ecD804B4-cC7F-BD1f-E301-d4CAee6E3Ec8",
              "text": "百红条空类具运对后公达决规必连战行。表则存须府机必住期制该都根正更表。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "25C4ABbd-f42b-39AB-aaa1-DAeeebCb493d",
              "text": "效出都断引号应至类直连中公八。直农族需至交种般务观准求群用参生。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "EBF8cE6b-a156-abdd-34AD-5eAf0e6893a4",
              "text": "管九感东治好般还厂物至必断包。除严队法太标长它直说传例应单公式。",
              "isDelete": false,
              "checked": false
          }
      ]
  },
  {
      "id": "AE362A23-fdaA-9741-41d2-2b03DCFc137b",
      "title": "Mary",
      "isDelete": false,
      "locked": true,
      "record": [
          {
              "id": "9112A250-BF99-6AAB-C8dA-7161dc49b64E",
              "text": "在利火通只量们感处走话历更现什。主想界算以儿该体影月包管。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "0cE2Ca2A-b5e9-ccE5-6e4f-6278570DEF5a",
              "text": "解形们文矿历前三导目响什专采。六建走着的热义她过增无场在场法见适。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "1fB18Bee-3D82-33e1-9B90-CDc85E06C53C",
              "text": "理引带信市个车器例所平布。过比候系少细自型满这了观劳但。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "91dEA48e-49d8-Cb94-BEe2-3d617Cd86EcB",
              "text": "关儿青拉火百满口局采发几者看。军四影去快与相王土究少给市。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "E0E2C015-b25c-9C9e-cFd7-ff1b65A4d8ab",
              "text": "日转江具是务规时件就局变调。说省类民着经必群心接劳与。",
              "isDelete": false,
              "checked": false
          }
      ]
  },
  {
      "id": "32D6D8DF-B1aE-6f82-69cd-56fF6Ce45CdD",
      "title": "Joseph",
      "isDelete": false,
      "locked": true,
      "record": [
          {
              "id": "0bD33fdd-9ee8-1bba-C4bb-D5Dfdb75D5Ca",
              "text": "体各高管委将北史深出出同定内。府自着资往采研近历意节识酸设立由。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "979DFfBB-C37E-DAcE-eABe-2Fdd6F4424c5",
              "text": "养被去些点干离米想声况果万集。界细质提周产元务合较商济可员心素己。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "aebeC20E-b3DD-FCef-3054-CE5A6dCAF545",
              "text": "放常志式非受方点路西己事展时。话量意至性府思候七名命者机广。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "F2ce7168-4cDC-dDAF-e57e-cC2FBEEEAEFD",
              "text": "今时老达则二圆给义用法应用料等团工。党计斗提特率规清类议人京且家。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "4161ebBB-A2c9-2BB4-f4c7-05a3fd8C4B7f",
              "text": "对证万党接易取儿面加基业积制。构育个三化干设通他少少制走具对的型。",
              "isDelete": false,
              "checked": true
          }
      ]
  },
  {
      "id": "3c670D9B-ff3A-efaB-f1BD-c7Fb0Dbc842C",
      "title": "Paul",
      "isDelete": false,
      "locked": false,
      "record": [
          {
              "id": "dbBaca2D-CA84-7DBD-4AC9-926c3C51a162",
              "text": "意状术口她因标六二流件收口三小七。规越例确新质高族子面色能段见反就美。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "CdFe5d3e-db29-Ebb0-b3DF-e762584A3B24",
              "text": "治小着特格务千军易取情论。光么会本整入打强改为县领。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "81EFcD61-9BfB-F18d-BeCf-B8ebcf81DdA5",
              "text": "非般点第东把业干战知里公。放在形内商便北强路把断具增国。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "5D1F8C28-8f31-967A-8Ea9-Eb7aA6AE9A7a",
              "text": "边段题教到务须间科清它干东用导。引政省分华相真红般二如土际例记造。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "A6924c87-3f0B-1736-BE83-DD9Db1F34b8f",
              "text": "本加界外正果子它件列很线物。消反观且联何清以越维须切什备。",
              "isDelete": false,
              "checked": true
          }
      ]
  },
  {
      "id": "6dd568ee-360b-f93F-f4FF-89DcBB439f35",
      "title": "Joseph",
      "isDelete": false,
      "locked": false,
      "record": [
          {
              "id": "5C1565Ab-f660-29D2-A9A8-1D0E70909ced",
              "text": "清精理代济速消经问打何劳增。表等现件直厂验山格节三见两造器公铁。",
              "isDelete": false,
              "checked": true
          },
          {
              "id": "363d9A6e-7AF9-7D8b-38dd-CE7Cf3F1BED7",
              "text": "属者照于北情色车门统影接局响所的。能算以可系拉管七万月所便一位。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "Aed7b9E4-6fd3-0E9D-C7fd-84a4154E9C5A",
              "text": "水示造例日成种命么海究解论政况成参很。半北意广性火叫则深政红力容业铁并要。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "32CaCc85-EF94-2ea8-4eBC-30AbBd57ae4d",
              "text": "期更只精相步入向东意不京。同几西切石强学类而知从团值百。",
              "isDelete": false,
              "checked": false
          },
          {
              "id": "Ac6B2374-9db4-A8e8-79d7-49e9BeEcf513",
              "text": "物几同世时把和位入深度报音深了增的。本气被正专活直意儿认报新。",
              "isDelete": false,
              "checked": false
          }
      ]
  }
]



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
