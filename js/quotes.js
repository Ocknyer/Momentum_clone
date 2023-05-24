const quotes = [
  {
    quote: '고양이 귀엽다.',
    author: '김옥녀',
  },
  {
    quote: '돌돌이 귀엽다.',
    author: '안용',
  },
  {
    quote: '오히려 좋아.',
    author: '뚠딴',
  },
  {
    quote: '공유 오피스가 그런 곳이었나...',
    author: '고나덩',
  },
  {
    quote: '담주 금요일에 술 가능?',
    author: '윾수',
  },
  {
    quote: '스페샬리티 블렌드!',
    author: '컴포즈 커피',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

setInterval(() => {
  const randomNum = Math.round(Math.random() * quotes.length);
  const todaysQuote = quotes[randomNum];
  quote.innerHTML = todaysQuote.quote;
  author.innerHTML = todaysQuote.author;
}, 5000);
