import Square from './Square';
function coordinates(i) {
  const raw = Math.ceil(i / 100);
  const column = i % 100 + 1;
  const rc = `r${raw}c${column}`;

  return rc;
}

const sold = {
  r2c2: {img: '8.jpg', caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish', price: 400},
  r2c3: { img: '7.jpg', caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish', price: 400},
  r2c4: { img: '6.jpg', caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish', price: 400},
  r2c5: {img: '5.jpg', caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish'},
  r3c2: {img: '4.jpg', caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish'},
  r3c3: {img: '3.jpg', caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish'},
  r3c4: {img: '2.jpg', caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish'},
  r3c5: {caption: 'How much is the fish', link: 'https://www.google.com/search?q=fish'},
  ...{ "r50c3": { "img": "millionAdaHomepage/r50c3.png", "caption": "Become a pixellord", "price": 500 }, "r51c3": { "img": "millionAdaHomepage/r51c3.png", "caption": "Become a pixellord", "price": 500 }, "r52c3": { "img": "millionAdaHomepage/r52c3.png", "caption": "Become a pixellord", "price": 500 }, "r50c4": { "img": "millionAdaHomepage/r50c4.png", "caption": "Become a pixellord", "price": 500 }, "r51c4": { "img": "millionAdaHomepage/r51c4.png", "caption": "Become a pixellord", "price": 500 }, "r52c4": { "img": "millionAdaHomepage/r52c4.png", "caption": "Become a pixellord", "price": 500 }, "r50c5": { "img": "millionAdaHomepage/r50c5.png", "caption": "Become a pixellord", "price": 500 }, "r51c5": { "img": "millionAdaHomepage/r51c5.png", "caption": "Become a pixellord", "price": 500 }, "r52c5": { "img": "millionAdaHomepage/r52c5.png", "caption": "Become a pixellord", "price": 500 }, "r50c6": { "img": "millionAdaHomepage/r50c6.png", "caption": "Become a pixellord", "price": 500 }, "r51c6": { "img": "millionAdaHomepage/r51c6.png", "caption": "Become a pixellord", "price": 500 }, "r52c6": { "img": "millionAdaHomepage/r52c6.png", "caption": "Become a pixellord", "price": 500 }, "r50c7": { "img": "millionAdaHomepage/r50c7.png", "caption": "Become a pixellord", "price": 500 }, "r51c7": { "img": "millionAdaHomepage/r51c7.png", "caption": "Become a pixellord", "price": 500 }, "r52c7": { "img": "millionAdaHomepage/r52c7.png", "caption": "Become a pixellord", "price": 500 }, "r50c8": { "img": "millionAdaHomepage/r50c8.png", "caption": "Become a pixellord", "price": 500 }, "r51c8": { "img": "millionAdaHomepage/r51c8.png", "caption": "Become a pixellord", "price": 500 }, "r52c8": { "img": "millionAdaHomepage/r52c8.png", "caption": "Become a pixellord", "price": 500 }, "r50c9": { "img": "millionAdaHomepage/r50c9.png", "caption": "Become a pixellord", "price": 500 }, "r51c9": { "img": "millionAdaHomepage/r51c9.png", "caption": "Become a pixellord", "price": 500 }, "r52c9": { "img": "millionAdaHomepage/r52c9.png", "caption": "Become a pixellord", "price": 500 }, "r50c10": { "img": "millionAdaHomepage/r50c10.png", "caption": "Become a pixellord", "price": 500 }, "r51c10": { "img": "millionAdaHomepage/r51c10.png", "caption": "Become a pixellord", "price": 500 }, "r52c10": { "img": "millionAdaHomepage/r52c10.png", "caption": "Become a pixellord", "price": 500 }, "r50c11": { "img": "millionAdaHomepage/r50c11.png", "caption": "Become a pixellord", "price": 500 }, "r51c11": { "img": "millionAdaHomepage/r51c11.png", "caption": "Become a pixellord", "price": 500 }, "r52c11": { "img": "millionAdaHomepage/r52c11.png", "caption": "Become a pixellord", "price": 500 }, "r50c12": { "img": "millionAdaHomepage/r50c12.png", "caption": "Become a pixellord", "price": 500 }, "r51c12": { "img": "millionAdaHomepage/r51c12.png", "caption": "Become a pixellord", "price": 500 }, "r52c12": { "img": "millionAdaHomepage/r52c12.png", "caption": "Become a pixellord", "price": 500 }, "r50c13": { "img": "millionAdaHomepage/r50c13.png", "caption": "Become a pixellord", "price": 500 }, "r51c13": { "img": "millionAdaHomepage/r51c13.png", "caption": "Become a pixellord", "price": 500 }, "r52c13": { "img": "millionAdaHomepage/r52c13.png", "caption": "Become a pixellord", "price": 500 }, "r50c14": { "img": "millionAdaHomepage/r50c14.png", "caption": "Become a pixellord", "price": 500 }, "r51c14": { "img": "millionAdaHomepage/r51c14.png", "caption": "Become a pixellord", "price": 500 }, "r52c14": { "img": "millionAdaHomepage/r52c14.png", "caption": "Become a pixellord", "price": 500 }, "r50c15": { "img": "millionAdaHomepage/r50c15.png", "caption": "Become a pixellord", "price": 500 }, "r51c15": { "img": "millionAdaHomepage/r51c15.png", "caption": "Become a pixellord", "price": 500 }, "r52c15": { "img": "millionAdaHomepage/r52c15.png", "caption": "Become a pixellord", "price": 500 }, "r50c16": { "img": "millionAdaHomepage/r50c16.png", "caption": "Become a pixellord", "price": 500 }, "r51c16": { "img": "millionAdaHomepage/r51c16.png", "caption": "Become a pixellord", "price": 500 }, "r52c16": { "img": "millionAdaHomepage/r52c16.png", "caption": "Become a pixellord", "price": 500 }, "r50c17": { "img": "millionAdaHomepage/r50c17.png", "caption": "Become a pixellord", "price": 500 }, "r51c17": { "img": "millionAdaHomepage/r51c17.png", "caption": "Become a pixellord", "price": 500 }, "r52c17": { "img": "millionAdaHomepage/r52c17.png", "caption": "Become a pixellord", "price": 500 }, "r50c18": { "img": "millionAdaHomepage/r50c18.png", "caption": "Become a pixellord", "price": 500 }, "r51c18": { "img": "millionAdaHomepage/r51c18.png", "caption": "Become a pixellord", "price": 500 }, "r52c18": { "img": "millionAdaHomepage/r52c18.png", "caption": "Become a pixellord", "price": 500 }, "r50c19": { "img": "millionAdaHomepage/r50c19.png", "caption": "Become a pixellord", "price": 500 }, "r51c19": { "img": "millionAdaHomepage/r51c19.png", "caption": "Become a pixellord", "price": 500 }, "r52c19": { "img": "millionAdaHomepage/r52c19.png", "caption": "Become a pixellord", "price": 500 }, "r50c20": { "img": "millionAdaHomepage/r50c20.png", "caption": "Become a pixellord", "price": 500 }, "r51c20": { "img": "millionAdaHomepage/r51c20.png", "caption": "Become a pixellord", "price": 500 }, "r52c20": { "img": "millionAdaHomepage/r52c20.png", "caption": "Become a pixellord", "price": 500 }, "r50c21": { "img": "millionAdaHomepage/r50c21.png", "caption": "Become a pixellord", "price": 500 }, "r51c21": { "img": "millionAdaHomepage/r51c21.png", "caption": "Become a pixellord", "price": 500 }, "r52c21": { "img": "millionAdaHomepage/r52c21.png", "caption": "Become a pixellord", "price": 500 }, "r50c22": { "img": "millionAdaHomepage/r50c22.png", "caption": "Become a pixellord", "price": 500 }, "r51c22": { "img": "millionAdaHomepage/r51c22.png", "caption": "Become a pixellord", "price": 500 }, "r52c22": { "img": "millionAdaHomepage/r52c22.png", "caption": "Become a pixellord", "price": 500 }, "r50c23": { "img": "millionAdaHomepage/r50c23.png", "caption": "Become a pixellord", "price": 500 }, "r51c23": { "img": "millionAdaHomepage/r51c23.png", "caption": "Become a pixellord", "price": 500 }, "r52c23": { "img": "millionAdaHomepage/r52c23.png", "caption": "Become a pixellord", "price": 500 }, "r50c24": { "img": "millionAdaHomepage/r50c24.png", "caption": "Become a pixellord", "price": 500 }, "r51c24": { "img": "millionAdaHomepage/r51c24.png", "caption": "Become a pixellord", "price": 500 }, "r52c24": { "img": "millionAdaHomepage/r52c24.png", "caption": "Become a pixellord", "price": 500 }, "r50c25": { "img": "millionAdaHomepage/r50c25.png", "caption": "Become a pixellord", "price": 500 }, "r51c25": { "img": "millionAdaHomepage/r51c25.png", "caption": "Become a pixellord", "price": 500 }, "r52c25": { "img": "millionAdaHomepage/r52c25.png", "caption": "Become a pixellord", "price": 500 }, "r50c26": { "img": "millionAdaHomepage/r50c26.png", "caption": "Become a pixellord", "price": 500 }, "r51c26": { "img": "millionAdaHomepage/r51c26.png", "caption": "Become a pixellord", "price": 500 }, "r52c26": { "img": "millionAdaHomepage/r52c26.png", "caption": "Become a pixellord", "price": 500 }, "r50c27": { "img": "millionAdaHomepage/r50c27.png", "caption": "Become a pixellord", "price": 500 }, "r51c27": { "img": "millionAdaHomepage/r51c27.png", "caption": "Become a pixellord", "price": 500 }, "r52c27": { "img": "millionAdaHomepage/r52c27.png", "caption": "Become a pixellord", "price": 500 }, "r50c28": { "img": "millionAdaHomepage/r50c28.png", "caption": "Become a pixellord", "price": 500 }, "r51c28": { "img": "millionAdaHomepage/r51c28.png", "caption": "Become a pixellord", "price": 500 }, "r52c28": { "img": "millionAdaHomepage/r52c28.png", "caption": "Become a pixellord", "price": 500 }, "r50c29": { "img": "millionAdaHomepage/r50c29.png", "caption": "Become a pixellord", "price": 500 }, "r51c29": { "img": "millionAdaHomepage/r51c29.png", "caption": "Become a pixellord", "price": 500 }, "r52c29": { "img": "millionAdaHomepage/r52c29.png", "caption": "Become a pixellord", "price": 500 }, "r50c30": { "img": "millionAdaHomepage/r50c30.png", "caption": "Become a pixellord", "price": 500 }, "r51c30": { "img": "millionAdaHomepage/r51c30.png", "caption": "Become a pixellord", "price": 500 }, "r52c30": { "img": "millionAdaHomepage/r52c30.png", "caption": "Become a pixellord", "price": 500 }, "r50c31": { "img": "millionAdaHomepage/r50c31.png", "caption": "Become a pixellord", "price": 500 }, "r51c31": { "img": "millionAdaHomepage/r51c31.png", "caption": "Become a pixellord", "price": 500 }, "r52c31": { "img": "millionAdaHomepage/r52c31.png", "caption": "Become a pixellord", "price": 500 }, "r50c32": { "img": "millionAdaHomepage/r50c32.png", "caption": "Become a pixellord", "price": 500 }, "r51c32": { "img": "millionAdaHomepage/r51c32.png", "caption": "Become a pixellord", "price": 500 }, "r52c32": { "img": "millionAdaHomepage/r52c32.png", "caption": "Become a pixellord", "price": 500 }, "r50c33": { "img": "millionAdaHomepage/r50c33.png", "caption": "Become a pixellord", "price": 500 }, "r51c33": { "img": "millionAdaHomepage/r51c33.png", "caption": "Become a pixellord", "price": 500 }, "r52c33": { "img": "millionAdaHomepage/r52c33.png", "caption": "Become a pixellord", "price": 500 }, "r50c34": { "img": "millionAdaHomepage/r50c34.png", "caption": "Become a pixellord", "price": 500 }, "r51c34": { "img": "millionAdaHomepage/r51c34.png", "caption": "Become a pixellord", "price": 500 }, "r52c34": { "img": "millionAdaHomepage/r52c34.png", "caption": "Become a pixellord", "price": 500 }, "r50c35": { "img": "millionAdaHomepage/r50c35.png", "caption": "Become a pixellord", "price": 500 }, "r51c35": { "img": "millionAdaHomepage/r51c35.png", "caption": "Become a pixellord", "price": 500 }, "r52c35": { "img": "millionAdaHomepage/r52c35.png", "caption": "Become a pixellord", "price": 500 }, "r50c36": { "img": "millionAdaHomepage/r50c36.png", "caption": "Become a pixellord", "price": 500 }, "r51c36": { "img": "millionAdaHomepage/r51c36.png", "caption": "Become a pixellord", "price": 500 }, "r52c36": { "img": "millionAdaHomepage/r52c36.png", "caption": "Become a pixellord", "price": 500 }, "r50c37": { "img": "millionAdaHomepage/r50c37.png", "caption": "Become a pixellord", "price": 500 }, "r51c37": { "img": "millionAdaHomepage/r51c37.png", "caption": "Become a pixellord", "price": 500 }, "r52c37": { "img": "millionAdaHomepage/r52c37.png", "caption": "Become a pixellord", "price": 500 }, "r50c38": { "img": "millionAdaHomepage/r50c38.png", "caption": "Become a pixellord", "price": 500 }, "r51c38": { "img": "millionAdaHomepage/r51c38.png", "caption": "Become a pixellord", "price": 500 }, "r52c38": { "img": "millionAdaHomepage/r52c38.png", "caption": "Become a pixellord", "price": 500 }, "r50c39": { "img": "millionAdaHomepage/r50c39.png", "caption": "Become a pixellord", "price": 500 }, "r51c39": { "img": "millionAdaHomepage/r51c39.png", "caption": "Become a pixellord", "price": 500 }, "r52c39": { "img": "millionAdaHomepage/r52c39.png", "caption": "Become a pixellord", "price": 500 }, "r50c40": { "img": "millionAdaHomepage/r50c40.png", "caption": "Become a pixellord", "price": 500 }, "r51c40": { "img": "millionAdaHomepage/r51c40.png", "caption": "Become a pixellord", "price": 500 }, "r52c40": { "img": "millionAdaHomepage/r52c40.png", "caption": "Become a pixellord", "price": 500 }, "r50c41": { "img": "millionAdaHomepage/r50c41.png", "caption": "Become a pixellord", "price": 500 }, "r51c41": { "img": "millionAdaHomepage/r51c41.png", "caption": "Become a pixellord", "price": 500 }, "r52c41": { "img": "millionAdaHomepage/r52c41.png", "caption": "Become a pixellord", "price": 500 }, "r50c42": { "img": "millionAdaHomepage/r50c42.png", "caption": "Become a pixellord", "price": 500 }, "r51c42": { "img": "millionAdaHomepage/r51c42.png", "caption": "Become a pixellord", "price": 500 }, "r52c42": { "img": "millionAdaHomepage/r52c42.png", "caption": "Become a pixellord", "price": 500 }, "r50c43": { "img": "millionAdaHomepage/r50c43.png", "caption": "Become a pixellord", "price": 500 }, "r51c43": { "img": "millionAdaHomepage/r51c43.png", "caption": "Become a pixellord", "price": 500 }, "r52c43": { "img": "millionAdaHomepage/r52c43.png", "caption": "Become a pixellord", "price": 500 }, "r50c44": { "img": "millionAdaHomepage/r50c44.png", "caption": "Become a pixellord", "price": 500 }, "r51c44": { "img": "millionAdaHomepage/r51c44.png", "caption": "Become a pixellord", "price": 500 }, "r52c44": { "img": "millionAdaHomepage/r52c44.png", "caption": "Become a pixellord", "price": 500 }, "r50c45": { "img": "millionAdaHomepage/r50c45.png", "caption": "Become a pixellord", "price": 500 }, "r51c45": { "img": "millionAdaHomepage/r51c45.png", "caption": "Become a pixellord", "price": 500 }, "r52c45": { "img": "millionAdaHomepage/r52c45.png", "caption": "Become a pixellord", "price": 500 }, "r50c46": { "img": "millionAdaHomepage/r50c46.png", "caption": "Become a pixellord", "price": 500 }, "r51c46": { "img": "millionAdaHomepage/r51c46.png", "caption": "Become a pixellord", "price": 500 }, "r52c46": { "img": "millionAdaHomepage/r52c46.png", "caption": "Become a pixellord", "price": 500 }, "r50c47": { "img": "millionAdaHomepage/r50c47.png", "caption": "Become a pixellord", "price": 500 }, "r51c47": { "img": "millionAdaHomepage/r51c47.png", "caption": "Become a pixellord", "price": 500 }, "r52c47": { "img": "millionAdaHomepage/r52c47.png", "caption": "Become a pixellord", "price": 500 }, "r50c48": { "img": "millionAdaHomepage/r50c48.png", "caption": "Become a pixellord", "price": 500 }, "r51c48": { "img": "millionAdaHomepage/r51c48.png", "caption": "Become a pixellord", "price": 500 }, "r52c48": { "img": "millionAdaHomepage/r52c48.png", "caption": "Become a pixellord", "price": 500 }, "r50c49": { "img": "millionAdaHomepage/r50c49.png", "caption": "Become a pixellord", "price": 500 }, "r51c49": { "img": "millionAdaHomepage/r51c49.png", "caption": "Become a pixellord", "price": 500 }, "r52c49": { "img": "millionAdaHomepage/r52c49.png", "caption": "Become a pixellord", "price": 500 }, "r50c50": { "img": "millionAdaHomepage/r50c50.png", "caption": "Become a pixellord", "price": 500 }, "r51c50": { "img": "millionAdaHomepage/r51c50.png", "caption": "Become a pixellord", "price": 500 }, "r52c50": { "img": "millionAdaHomepage/r52c50.png", "caption": "Become a pixellord", "price": 500 }, "r50c51": { "img": "millionAdaHomepage/r50c51.png", "caption": "Become a pixellord", "price": 500 }, "r51c51": { "img": "millionAdaHomepage/r51c51.png", "caption": "Become a pixellord", "price": 500 }, "r52c51": { "img": "millionAdaHomepage/r52c51.png", "caption": "Become a pixellord", "price": 500 }, "r50c52": { "img": "millionAdaHomepage/r50c52.png", "caption": "Become a pixellord", "price": 500 }, "r51c52": { "img": "millionAdaHomepage/r51c52.png", "caption": "Become a pixellord", "price": 500 }, "r52c52": { "img": "millionAdaHomepage/r52c52.png", "caption": "Become a pixellord", "price": 500 }, "r50c53": { "img": "millionAdaHomepage/r50c53.png", "caption": "Become a pixellord", "price": 500 }, "r51c53": { "img": "millionAdaHomepage/r51c53.png", "caption": "Become a pixellord", "price": 500 }, "r52c53": { "img": "millionAdaHomepage/r52c53.png", "caption": "Become a pixellord", "price": 500 }, "r50c54": { "img": "millionAdaHomepage/r50c54.png", "caption": "Become a pixellord", "price": 500 }, "r51c54": { "img": "millionAdaHomepage/r51c54.png", "caption": "Become a pixellord", "price": 500 }, "r52c54": { "img": "millionAdaHomepage/r52c54.png", "caption": "Become a pixellord", "price": 500 }, "r50c55": { "img": "millionAdaHomepage/r50c55.png", "caption": "Become a pixellord", "price": 500 }, "r51c55": { "img": "millionAdaHomepage/r51c55.png", "caption": "Become a pixellord", "price": 500 }, "r52c55": { "img": "millionAdaHomepage/r52c55.png", "caption": "Become a pixellord", "price": 500 }, "r50c56": { "img": "millionAdaHomepage/r50c56.png", "caption": "Become a pixellord", "price": 500 }, "r51c56": { "img": "millionAdaHomepage/r51c56.png", "caption": "Become a pixellord", "price": 500 }, "r52c56": { "img": "millionAdaHomepage/r52c56.png", "caption": "Become a pixellord", "price": 500 }, "r50c57": { "img": "millionAdaHomepage/r50c57.png", "caption": "Become a pixellord", "price": 500 }, "r51c57": { "img": "millionAdaHomepage/r51c57.png", "caption": "Become a pixellord", "price": 500 }, "r52c57": { "img": "millionAdaHomepage/r52c57.png", "caption": "Become a pixellord", "price": 500 }, "r50c58": { "img": "millionAdaHomepage/r50c58.png", "caption": "Become a pixellord", "price": 500 }, "r51c58": { "img": "millionAdaHomepage/r51c58.png", "caption": "Become a pixellord", "price": 500 }, "r52c58": { "img": "millionAdaHomepage/r52c58.png", "caption": "Become a pixellord", "price": 500 }, "r50c59": { "img": "millionAdaHomepage/r50c59.png", "caption": "Become a pixellord", "price": 500 }, "r51c59": { "img": "millionAdaHomepage/r51c59.png", "caption": "Become a pixellord", "price": 500 }, "r52c59": { "img": "millionAdaHomepage/r52c59.png", "caption": "Become a pixellord", "price": 500 }, "r50c60": { "img": "millionAdaHomepage/r50c60.png", "caption": "Become a pixellord", "price": 500 }, "r51c60": { "img": "millionAdaHomepage/r51c60.png", "caption": "Become a pixellord", "price": 500 }, "r52c60": { "img": "millionAdaHomepage/r52c60.png", "caption": "Become a pixellord", "price": 500 }, "r50c61": { "img": "millionAdaHomepage/r50c61.png", "caption": "Become a pixellord", "price": 500 }, "r51c61": { "img": "millionAdaHomepage/r51c61.png", "caption": "Become a pixellord", "price": 500 }, "r52c61": { "img": "millionAdaHomepage/r52c61.png", "caption": "Become a pixellord", "price": 500 }, "r50c62": { "img": "millionAdaHomepage/r50c62.png", "caption": "Become a pixellord", "price": 500 }, "r51c62": { "img": "millionAdaHomepage/r51c62.png", "caption": "Become a pixellord", "price": 500 }, "r52c62": { "img": "millionAdaHomepage/r52c62.png", "caption": "Become a pixellord", "price": 500 }, "r50c63": { "img": "millionAdaHomepage/r50c63.png", "caption": "Become a pixellord", "price": 500 }, "r51c63": { "img": "millionAdaHomepage/r51c63.png", "caption": "Become a pixellord", "price": 500 }, "r52c63": { "img": "millionAdaHomepage/r52c63.png", "caption": "Become a pixellord", "price": 500 }, "r50c64": { "img": "millionAdaHomepage/r50c64.png", "caption": "Become a pixellord", "price": 500 }, "r51c64": { "img": "millionAdaHomepage/r51c64.png", "caption": "Become a pixellord", "price": 500 }, "r52c64": { "img": "millionAdaHomepage/r52c64.png", "caption": "Become a pixellord", "price": 500 } }
}
const List = (props) => {
  const { items } = props;

  return (
    <div className="grid">
      {
        items.map((item, i) => {
          const metadata = sold[coordinates(i)];
          return (<Square key={i} metadata={metadata} />)
        })
      }
    </div>
  )
}

export default List;
