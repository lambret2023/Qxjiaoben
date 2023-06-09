# Qxjiaoben
const url = `https://app.yiyan.art/yiyan/checksession`;

const method = `POST`;

const headers = {

'Cookie' : `JSESSIONID=384F0C473A620F3EF9B4BBBAFF78D42B`,

'Accept' : `*/*`,

'Connection' : `keep-alive`,

'Content-Type' : `application/x-www-form-urlencoded`,

'Accept-Encoding' : `gzip, deflate, br`,

'Host' : `app.yiyan.art`,

'User-Agent' : `GongMing/4.60 (iPhone; iOS 14.0.1; Scale/3.00)`,

'Accept-Language' : `zh-Hans-CN;q=1`

};

const body = `YanYan=2&a=5bb65a455c5c98c7e74b06dc5001ca00&t=5&v=4.60`;

const myRequest = {

    url: url,

    method: method,

    headers: headers,

    body: body

};

$task.fetch(myRequest).then(response => {

    console.log(response.statusCode + "\n\n" + response.body);

    $done();

}, reason => {

    console.log(reason.error);

    $done();

});
