// Sponsers section

const sponsorersData = [
  {
    brand1: 'images/bitpander.png',
    brand2: 'images/bibox.jpeg',
    brand3: 'images/d-block.png',
    brand4: 'images/cryptopia.png',
    brand5: 'images/binance.png',
    copyright: 'images/gatex-logo.png',
  },
];

const body = document.querySelector('body');
const sponsorers = document.createElement('section');
sponsorers.className = 'sponsorers';
sponsorers.id = 'sponsorers';
const brand = sponsorersData[0];

sponsorers.innerHTML = `<h2 class='sponsorers__header'>Sponsorers</h2> 
                          <hr class='sponsorers__line'>
                          <div class='sponsorers__logos'> 
                            <img src='${brand.brand1}' class='sponsorers__logo' alt='${brand.brand1}'>
                            <img src='${brand.brand2}' class='sponsorers__logo' alt='${brand.brand2}'>
                            <img src='${brand.brand3}' class='sponsorers__logo' alt='${brand.brand3}'>
                            <img src='${brand.brand4}' class='sponsorers__logo' alt='${brand.brand4}'>
                            <img src='${brand.brand5}' class='sponsorers__logo' alt='${brand.brand5}'>
                          </div>`;
body.appendChild(sponsorers);