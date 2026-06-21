(function(){
  var price = '$59.63';
  var status = 'Available Soon';
  var basePath = '../assets/merch/';
  function image(file){
    return basePath + file;
  }
  var descriptions = {
    'java-lava-cafe-noir-signature-blouse': [
      'A polished button-front layer with a dark cafe finish and Java Lava presence.',
      'Made for tasting nights, brand events, and easy off-duty styling when you want the merch to feel elevated.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-dark-roast-long-sleeve': [
      'A deep roast long sleeve built for cooler evenings, coffee runs, and laid-back Java Lava loyalists.',
      'The clean silhouette keeps the branding wearable while still carrying the bold energy of the label.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-emerald-brew-tank': [
      'A lightweight tank in a volcanic green mood for warm days and casual pours.',
      'Designed as an easy layer for festivals, beach stops, and relaxed Java Lava moments.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-espresso-reserve-tee': [
      'A clean everyday tee with espresso-toned attitude and a reserved brand finish.',
      'Built for simple styling: denim, shorts, jackets, or anything that lets the Java Lava mark do the work.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-frosted-cappuccino-zip-hoodie': [
      'A soft zip hoodie with a lighter cappuccino feel for travel days and cool nights.',
      'The full-zip shape makes it easy to layer over tees while keeping the brand visible.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-heritage-roast-varsity-jacket': [
      'A varsity-style statement piece inspired by roast-house heritage and after-hours energy.',
      'Made for fans who want the merch drop to feel collectible, structured, and event-ready.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-heritage-roast-varsity-jacket-midnight-navy': [
      'A midnight navy take on the Heritage Roast varsity jacket with a sharper evening profile.',
      'The darker finish gives the piece a more refined edge while keeping the drop unmistakably Java Lava.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-midnight-roast-quarter-zip': [
      'A quarter-zip layer with a midnight roast tone for clean, comfortable everyday wear.',
      'Designed for easy transitions from coffee meetings to late-night plans.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-midnight-roast-tee': [
      'A dark staple tee that keeps the Java Lava mark crisp and wearable.',
      'It is the easiest piece in the drop: simple, versatile, and ready for repeat wear.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-mocha-quarter-zip': [
      'A mocha-toned quarter-zip with a warm, relaxed look for everyday layering.',
      'The silhouette keeps things polished without losing the comfort of a casual staple.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-plum-mocha-long-sleeve': [
      'A plum mocha long sleeve that adds a richer color note to the Java Lava lineup.',
      'Built for customers who want a softer statement piece with enough personality to stand alone.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-rose-latte-tee': [
      'A rose latte tee with a lighter, warmer feel for casual days and easy styling.',
      'The color keeps the piece fresh while the Java Lava branding ties it back to the full merch drop.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-silver-roast-quarter-zip': [
      'A silver roast quarter-zip with a clean athletic edge and everyday polish.',
      'Made for layering when you want something brighter than black but still grounded.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-silver-roast-tee': [
      'A silver roast tee that keeps the look crisp, simple, and easy to wear.',
      'The lighter tone gives the Java Lava mark room to stand out without feeling loud.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-vanilla-bean-tee': [
      'A vanilla bean tee with a soft neutral palette and everyday reach.',
      'Built for customers who want the merch drop in a lighter, cleaner staple.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ],
    'java-lava-vanilla-cream-hoodie': [
      'A vanilla cream hoodie made for cozy layers, weekend errands, and relaxed nights in.',
      'The soft neutral tone gives the Java Lava brand a warmer, more lounge-ready expression.',
      'Join the waitlist and we will notify you when sizing and availability are confirmed.'
    ]
  };
  function product(id, title, label, files){
    return {
      id: id,
      title: title,
      label: label,
      description: descriptions[id],
      price: price,
      showPrice: false,
      status: status,
      stock: 0,
      notify: true,
      image: image(files[0]),
      angles: files.map(image)
    };
  }
  window.JavaLavaMerchCatalogVersion = 'png-merch-2026-06-19';
  window.JavaLavaMerchCatalog = [
    product('java-lava-cafe-noir-signature-blouse','Java Lava Cafe Noir Signature Blouse','Cafe Noir Blouse',[
      'Java Lava Café Noir Signature Blouse.png',
      'Java Lava Café Noir Signature Blouse Back View.png',
      'Java Lava Café Noir Signature Blouse Left View.png',
      'Java Lava Café Noir Signature Blouse Right View.png'
    ]),
    product('java-lava-dark-roast-long-sleeve','Java Lava Dark Roast Long Sleeve','Dark Roast Long Sleeve',[
      'Java Lava Dark Roast Long Sleeve.png',
      'Java Lava Dark Roast Long Sleeve Back View.png',
      'Java Lava Dark Roast Long Sleeve Left View.png'
    ]),
    product('java-lava-emerald-brew-tank','Java Lava Emerald Brew Tank','Emerald Brew Tank',[
      'Java Lava Emerald Brew Tank.png',
      'Java Lava Emerald Brew Tank Back View.png',
      'Java Lava Emerald Brew Tank Left View.png',
      'Java Lava Emerald Brew Tank Right View.png'
    ]),
    product('java-lava-espresso-reserve-tee','Java Lava Espresso Reserve Tee','Espresso Reserve Tee',[
      'Java Lava Espresso Reserve Tee.png',
      'Java Lava Espresso Reserve Tee Back View.png',
      'Java Lava Espresso Reserve Tee Left View.png',
      'Java Lava Espresso Reserve Tee Right View.png'
    ]),
    product('java-lava-frosted-cappuccino-zip-hoodie','Java Lava Frosted Cappuccino Zip Hoodie','Frosted Cappuccino Hoodie',[
      'Java Lava Frosted Cappuccino Zip Hoodie.png',
      'Java Lava Frosted Cappuccino Zip Hoodie Back View.png',
      'Java Lava Frosted Cappuccino Zip Hoodie Left View.png',
      'Java Lava Frosted Cappuccino Zip Hoodie Right View.png'
    ]),
    product('java-lava-heritage-roast-varsity-jacket','Java Lava Heritage Roast Varsity Jacket','Heritage Varsity Jacket',[
      'Java Lava Heritage Roast Varsity Jacket.png',
      'Java Lava Heritage Roast Varsity Jacket Back View.png',
      'Java Lava Heritage Roast Varsity Jacket Left View.png'
    ]),
    product('java-lava-heritage-roast-varsity-jacket-midnight-navy','Java Lava Heritage Roast Varsity Jacket - Midnight Navy','Midnight Navy Varsity Jacket',[
      'Java Lava Heritage Roast Varsity Jacket – Midnight Navy Left View.png',
      'Java Lava Heritage Roast Varsity Jacket – Midnight Navy Right View.png'
    ]),
    product('java-lava-midnight-roast-quarter-zip','Java Lava Midnight Roast Quarter-Zip','Midnight Roast Quarter-Zip',[
      'Java Lava Midnight Roast Quarter-Zip Back View.png'
    ]),
    product('java-lava-midnight-roast-tee','Java Lava Midnight Roast Tee','Midnight Roast Tee',[
      'Java Lava Midnight Roast Tee.png',
      'Java Lava Midnight Roast Tee Back View.png',
      'Java Lava Midnight Roast Tee Left View.png',
      'Java Lava Midnight Roast Tee Right View.png'
    ]),
    product('java-lava-mocha-quarter-zip','Java Lava Mocha Quarter-Zip','Mocha Quarter-Zip',[
      'Java Lava Mocha Quarter-Zip.png',
      'Java Lava Mocha Quarter-Zip Back View.png'
    ]),
    product('java-lava-plum-mocha-long-sleeve','Java Lava Plum Mocha Long Sleeve','Plum Mocha Long Sleeve',[
      'Java Lava Plum Mocha Long Sleeve.png',
      'Java Lava Plum Mocha Long Sleeve Back View.png',
      'Java Lava Plum Mocha Long Sleeve Left View.png',
      'Java Lava Plum Mocha Long Sleeve Right View.png'
    ]),
    product('java-lava-rose-latte-tee','Java Lava Rose Latte Tee','Rose Latte Tee',[
      'Java Lava Rose Latte Tee.png',
      'Java Lava Rose Latte Tee Back View.png',
      'Java Lava Rose Latte Tee Left View.png',
      'Java Lava Rose Latte Tee Right View.png'
    ]),
    product('java-lava-silver-roast-quarter-zip','Java Lava Silver Roast Quarter-Zip','Silver Roast Quarter-Zip',[
      'Java Lava Silver Roast Quarter-Zip.png',
      'Java Lava Silver Roast Quarter-Zip Back View.png',
      'Java Lava Silver Roast Quarter-Zip Left View.png',
      'Java Lava Silver Roast Quarter-Zip Right View.png'
    ]),
    product('java-lava-silver-roast-tee','Java Lava Silver Roast Tee','Silver Roast Tee',[
      'Java Lava Silver Roast Tee.png',
      'Java Lava Silver Roast Tee Back View.png',
      'Java Lava Silver Roast Tee Left View.png',
      'Java Lava Silver Roast Tee Right View.png'
    ]),
    product('java-lava-vanilla-bean-tee','Java Lava Vanilla Bean Tee','Vanilla Bean Tee',[
      'Java Lava Vanilla Bean Tee.png',
      'Java Lava Vanilla Bean Tee Back View.png',
      'Java Lava Vanilla Bean Tee Left View.png',
      'Java Lava Vanilla Bean Tee Right View.png'
    ]),
    product('java-lava-vanilla-cream-hoodie','Java Lava Vanilla Cream Hoodie','Vanilla Cream Hoodie',[
      'Java Lava Vanilla Cream Hoodie.png',
      'Java Lava Vanilla Cream Hoodie Back View.png',
      'Java Lava Vanilla Cream Hoodie Left View.png'
    ])
  ];
})();
