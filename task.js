/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = new Array();

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function pt(a) {
    console.log(a);
}
function addAqiData() {
    var oCityName = document.getElementById("aqi-city-input");
    var sCityName = oCityName.value;
    pt(sCityName);
    var oData = document.getElementById("aqi-value-input");
    var nData = oData.value;
    pt(nData);
    aqiData.push([sCityName,nData])
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var nodeTr = null;
    var nodeFather = null;
    if(aqiData.length == 1)
    {
        nodeTr = document.createElement("tr");
        nodeFather = document.getElementById("aqi-table");
         nodeFather = nodeFather.appendChild(nodeTr);
        for(var i = 0;i<3;i++)
        {
            nodeTr = document.createElement("td");
            nodeFather.appendChild(nodeTr);
        }
        nodeFather.children[0].innerHTML = "ID";
        nodeFather.children[1].innerHTML = "姓名";
        nodeFather.children[2].innerHTML = "年龄";
    }
    else
    {
        nodeTr = document.createElement("tr");
        nodeFather = document.getElementById("aqi-table");
        nodeFather = nodeFather.appendChild(nodeTr);

    }




}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数


    var oBtn = document.getElementById("add-btn");
    pt(oBtn);
    oBtn.onclick = addBtnHandle;
}

window.onload = init;
