# Qxjiaoben
[rewrite_local]
^https:\/\/ltdh.wxatech.com\/app-love\/api\/user\/mine.+$ url script-response-body https://github.com/lambret2023/Qxjiaoben/new/main?readme=1lianai.js
[mitm] 
hostname = *.wxatech.*
*******************************
Surge

[Script]
^https:\/\/ltdh.wxatech.com\/app-love\/api\/user\/mine.+$ requires-body=1,max-size=0,script-path=lianai.js

[MITM]
hostname = ltdh.wxatech.com

*******************************/
var obj = JSON.parse($response.body);
    obj.data.vipStatus= 2;
obj.data.isVip= true;
obj.time=2099-09-09 00:00；
    $done({body: JSON.stringify(obj)});
