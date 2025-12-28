// 创建JSON格式的JS字符串
let text = `{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}`

// 将JSON格式的JS字符串转换为JS对象
let obj = JSON.parse(text);

// 将JS对象转为JSON字符串
let jsonData = JSON.stringify(obj);

