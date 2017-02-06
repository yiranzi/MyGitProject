/**
 * 1输入
 * 2点击确定后检测数据合理性
 * 3录入数据或者是要求重新输入
 * 4在数据表中新增一个条目
 * 5将新增条目刷新
 * 6如果删除某一个条目
 * 7在数据表中.移除掉这个条目.根据编号.
 * 5删除制定条目
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *
 *    "北京": 90,
 *    "上海": 40
 * };
 * 1使用标记ID的方式..
 *
 */
var aqiData = new Array();
aqiData.iNumber = 0;

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {

    var oCityName = document.getElementById("aqi-city-input");
    var sCityName = oCityName.value;
    var oData = document.getElementById("aqi-value-input");
    var nData = oData.value;
    //检测数据合理性
    aqiData.push([aqiData.iNumber,sCityName,nData])
    aqiData.iNumber++;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    if(aqiData.length ==1 )
    {
        renderHead();
    }
    var nodeTr = null;
    var nodeFather = null;
    nodeTr = document.createElement("tr");
    nodeTr.iNumber = aqiData[aqiData.length-1][0];
    nodeFather = document.getElementById("aqi-table");
    nodeFather = nodeFather.appendChild(nodeTr);
    for(var i = 0;i<3;i++)
    {
        var node = document.createElement("td");
        nodeFather.appendChild(node);
    }
    nodeFather.children[0].innerHTML = aqiData[aqiData.length-1][1];
    nodeFather.children[1].innerHTML = aqiData[aqiData.length-1][2];
    var oBtn = document.createElement("button");
    nodeFather.children[2].appendChild(oBtn);
    oBtn.innerHTML = "删除";
    oBtn.onclick = delBtnHandle;
    console.log(nodeTr.iNumber);
}

function renderDelete() {
    //处理删除最后一个元素
    //遍历查找到那个元素.
    //删除那个节点
}

function renderHead()
{
    var nodeTr = null;
    var nodeFather = null;
    nodeTr = document.createElement("tr");
    nodeTr.iNumber = aqiData[aqiData.length-1][0];
    nodeFather = document.getElementById("aqi-table");
    nodeFather = nodeFather.appendChild(nodeTr);
    for(var i = 0;i<3;i++)
    {
        var node = document.createElement("td");
        nodeFather.appendChild(node);
    }
    nodeFather.children[0].innerHTML = "ID";
    nodeFather.children[1].innerHTML = "姓名";
    nodeFather.children[2].innerHTML = "年龄";
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
    var oTr = this.parentNode.parentNode;
    var index = oTr.iNumber;
    console.log("删除了第几个"+index);
    for(var i=0;i<aqiData.length;i++)
    {
        if(aqiData[i][0] == index)
        {
            console.log(aqiData.splice(i,1));
            break;
        }
    }
    oTr.parentNode.removeChild(oTr);

    //renderDelete(oTr);
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数


    var oBtn = document.getElementById("add-btn");
    oBtn.onclick = addBtnHandle;
}

window.onload = init;
