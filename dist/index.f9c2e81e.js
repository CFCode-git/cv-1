let html=document.querySelector("#html"),style=document.querySelector("#style"),n=0,string="/*你好，我叫呆尬猴\n*接下来我演示一下我的前端功底\n*首先，我要准备一个div\n**/\n#div1 {\n    border:1px solid red;\n    width:200px;\n    height:200px;\n}\n/**接下来，我把div变成一个八卦图\n * 注意看好了\n * 首先把div变成一个圆\n **/\n#div1 {\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,.5);\n    border:none;\n} \n/**八卦阴阳两极\n * 一黑一白\n **/\n#div1 {\n    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/**加两个神秘的小球\n **/\n#div1::before {\n    width:100px;\n    height:100px;\n    border-radius:50%;\n    background:#000;\n    left:50%;\n    transform:translate(-50%);\n    top:0;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after {\n    width:100px;\n    height:100px;\n    border-radius:50%;\n    background:#fff;\n    left:50%;\n    transform:translate(-50%);\n    bottom:0;\n    background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%);\n}\n",string2="",step=()=>{setTimeout((()=>{n<string.length&&("\n"===string[n]?string2+="<br>":" "===string[n]?string2+="&nbsp;":string2+=string[n],n+=1,html.innerHTML=string2,style.innerHTML=string.substring(0,n),window.scrollTo(0,99999),html.scrollTo(0,99999),step())}),50)};step();
//# sourceMappingURL=index.f9c2e81e.js.map