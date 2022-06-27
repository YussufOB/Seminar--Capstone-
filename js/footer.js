const bodyElement = document.querySelector('body');
const footerData = [
  {
    brand1: 'images/bitpander.png',
    brand2: 'images/bibox.jpeg',
    brand3: 'images/d-block.png',
    brand4: 'images/cryptopia.png',
    brand5: 'images/binance.png',
    copyright: 'images/gatex-logo.png',
  },
];

// Footer section
const data = footerData[0];
const footer = document.createElement('footer');
footer.innerHTML = `<img src='${data.copyright}' alt='${data.copyright}' class='copyright'> 
                    <p class='desc'>2022 Annual Trading Seminar, Twitch Tv. 
                      <br> Some Rights Reserved.
                    </p>`;
bodyElement.appendChild(footer);