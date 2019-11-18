let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0
let string = `/*你好，我叫呆尬猴
*接下来我演示一下我的前端功底
*首先，我要准备一个div
**/
#div1 {
    border:1px solid red;
    width:200px;
    height:200px;
}
/**接下来，我把div变成一个八卦图
 * 注意看好了
 * 首先把div变成一个圆
 **/
#div1 {
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border:none;
} 
/**八卦阴阳两极
 * 一黑一白
 **/
#div1 {
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**加两个神秘的小球
 **/
#div1::before {
    width:100px;
    height:100px;
    border-radius:50%;
    background:#000;
    left:50%;
    transform:translate(-50%);
    top:0;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width:100px;
    height:100px;
    border-radius:50%;
    background:#fff;
    left:50%;
    transform:translate(-50%);
    bottom:0;
    background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';
// string = string.replace(/\n/g, "<br>")
// demo.innerHTML = string.substring(0, n)

let step = () => {
    setTimeout(() => {
        //判断n是否小于字符串的长度，小于就执行,否则return拜拜。
        if (n < string.length) {
            //如果碰到回车就回车，碰到空格就空格，否则照搬。
            if (string[n] === '\n') {
                string2 += '<br>';
            } else if (string[n] === ' ') {
                string2 += '&nbsp;';
            } else {
                string2 += string[n];
            }

            n = n + 1;
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            window.scrollTo(0, 99999);
            html.scrollTo(0, 99999);
            // html.innerHTML = string.substring(0, n);
            step();
        } else { return }
    }, 50)
}

step();