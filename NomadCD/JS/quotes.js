const quotes = [
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author: "엘버트 허버드",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈",
    },
    {
        quote: "겨울이 오면 봄이 멀지 않으리",
        author: "셸리",
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라.",
        author: "P.시루스",
    },
    {    
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다",
        author: "데모스테네스",
    },
    {
        quote: "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다. ",
        author: "메이벨 뉴컴버",
    },
    {
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author: "발타사르 그라시안",
    },
    {
        quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
        author: "알랭",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;