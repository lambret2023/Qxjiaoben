const url = "https://share.qingfe.com/mag/circle/v1/forum/threadWapPage?tid=542941&themecolor=e70000&circle_id=118&p_u=61238";
const totalRequests = 15;
let requestCount = 0;

const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 10; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
  'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0'
];

function generateRandomCookie() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const length = 16;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getRandomUserAgent() {
  const randomIndex = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomIndex];
}

function visitPage(callback) {
  const options = {
    method: 'GET',
    url: url,
    headers: {'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'User-Agent': getRandomUserAgent(),
      'Cookie': generateRandomCookie(),
   'Accept-Language': 'zh-cn',
'Accept-Encoding': 'gzip,deflate,br'
}
  };

  $task.fetch(options).then(response => {
    console.log(`请求 ${requestCount + 1}: 亮哥哥今天很帅！`);
    callback(true);
  }, reason => {
    console.log(`请求 ${requestCount + 1}: 失败`);
    callback(false);
  });
}

function refreshPageNTimes(n) {
  if (requestCount < n) {
    visitPage(success => {
      if (success) {
        requestCount++;
      }
      setTimeout(() => {
        refreshPageNTimes(n);
      }, 1000);
    });
  } else {
    console.log('所有请求已完成');
    $done();
  }
}

refreshPageNTimes(totalRequests);
