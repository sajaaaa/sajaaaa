var isheng =document.getElementById("sheng");
var ishi =document.getElementById("shi");
var ixian=document.getElementById("xian");

var allsheng =[""];
var allshi=[""];
var allxian=[""];

for(var i=0;i<cityData.length;i++){
    var opt =new Option(cityData[i].text,cityData[i].value);
    isheng.appendChild(opt);
}

isheng.onchange=function(){
    ishi.innerHTML="<option>请选择城市</option>";
    ixian.innerHTML="<option>请选择区县</option>";
    var a =this.selectedIndex-1;
    for(var j=0;j<cityData[a].children.length;j++){
        var opt=new Option(cityData[a].children[j].text,cityData[a].children[j].value);
        ishi.appendChild(opt);
    }

ishi.onchange=function(){
    ixian.innerHTML="<option>请选择区县</option>";
    var b =this.selectedIndex-1;
    for(var k=0;k<cityData[a].children[b].children.length;k++){
        var opt=new Option(cityData[a].children[b].children[k].text,cityData[a].children[b].children[k].value);
        ixian.appendChild(opt);
        }
    }
}

