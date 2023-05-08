const inspirationBtn = document.getElementById('inspirationBtn');
const inspirationContainer = document.getElementById('inspirationContainer');

const texts = [
  'Stay hungry, stay foolish. — Steve Jobs',
  'Don’t count the days, make the days count. — Muhammad Ali',
  'Believe you can and you’re halfway there. — Theodore Roosevelt',
  'The only way to do great work is to love what you do. — Steve Jobs',
  'Your time is limited, don’t waste it living someone else’s life. — Steve Jobs',
  'If you look at what you have in life, you’ll always have more. — Oprah Winfrey',
  'If you want to lift yourself up, lift up someone else. — Booker T. Washington',
  'If you want to go fast, go alone. If you want to go far, go together. — African proverb',
  'Strive not to be a success, but rather to be of value. — Albert Einstein',
  'The best way to predict the future is to invent it. — Alan Kay',
  'You miss 100% of the shots you don’t take. — Wayne Gretzky'
];

inspirationBtn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const randomText = texts[randomIndex];
  const inspirationText = document.createElement('p');
  inspirationText.innerText = randomText;
  inspirationContainer.appendChild(inspirationText);
});
