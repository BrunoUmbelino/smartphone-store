const storeProducts = [
  {
    id: 1,
    title: "Samsung Galaxy S20",
    model:
      "Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy ",
    img: "img/samsung-galaxy-s20.jpg",
    price: 599,
    company: "Samsung",
    info:
      "We get you. The standout in the crowd, the one with relentless passion. The one that stays true to yourself and connected to those around you. You deserve a cellphone that delivers industry-leading tech and allows you to express yourself in ways you choose. With bold color options, a pro-grade camera, 120Hz display and an all-day intelligent battery that charges up in minutes, the Galaxy S20 FE 5G factory unlocked Android smartphone delivers uncompromised innovation. This is unexpected. Take game-changing pics and video with the triple lens camera and 3X optical zoom. Zoom in close from farther away and capture images with 30X Space Zoom. Capture crisp images and video at night without flash with Night Mode. Capture video and multiple types of images with one tap of the shutter button. Download, browse, and binge in a flash with Galaxy S20 FE 5G. ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title: "OnePlus Nord N10",
    model:
      "OnePlus Nord N10 5G Unlocked Smartphone, Midnight Ice​, 90Hz Refresh Rate, 6GB RAM + 128GB storage, US Version, Model BE2026 ",
    img: "img/onePlus-nord.jpg",
    price: 299,
    company: "OnePlus",
    info:
      "OnePlus Nord N10 5G brings the most affordable premium 5G experience to the market. It brings the power of 5G to more consumers along with burdenless user experience, 90 Hz smooth display, Warp charge 30T, and high-quality quad-camera performance. ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title: "Moto G Power",
    model:
      "Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 3/32GB | 48MP Camera | Silver",
    img: "img/moto-g-power.jpg",
    price: 199,
    company: "Motorola",
    info:
      'Want longer battery life and gorgeous photos? Get moto g power. With its 5000 mAh battery, you can go up to three days on a single charge. Enjoy that weekend getaway without ever worrying about recharging. moto g power packs a 48 MP triple camera system2, so you can capture stunning images in any light, everywhere you go. Want a better view on the move? Watch games, movies, and video chats come to life on an ultra-wide 6.6" screen. Want to lose that annoying lag? Get more done with a speedy processor. How about a phone that’s not afraid to get a little wet? No worries. Wanna capture more of life? You got it.',
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title: "TCL 10L",
    model:
      'TCL 10L, Unlocked Android Smartphone with 6.53" FHD + LCD Display, 48MP Quad Rear Camera System, 64GB+6GB RAM, 4000mAh Battery - Arctic White ',
    img: "img/tlc-10l.jpg",
    price: 249,
    company: "TLC",
    info:
      "6.53” FHD+ Dotch LCD display, powered by NXTVISION, will upgrade your visual experience with the sharper details, vibrant images and allow you to enjoy true-to-life color accuracy in everything you present. Quad rear cameras with dual LED flash: 48MP (high-res) + 8MP (118° super wide-angle) + 2MP (macro) + 2MP (depth). 16MP front-facing selfie camera. Up to 64GB of internal memory, expandable up to 256GB via microSD card (sold separately). Compatible with GSM carriers, including AT&T and T-Mobile. This device is also certified for use on Verizon’s LTE network. If your device is not receiving messages or experiences an error when making phone calls on Verizon, your account may need to be ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    title: "Samsung Galaxy A12",
    model:
      "Samsung Galaxy A12 (A125M) 64GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone Latin American Version No Warranty (Black)",
    img: "img/samsung-galaxy-a12.jpg",
    price: 179,
    company: "Samsung",
    info:
      "More display means more room to play: Expand your view to the 6.5-inch Infinity-V Display of Galaxy A12 and see what you've been missing. Thanks to HD+ technology, your everyday content looks sharp, crisp and clear. Upgrade your mobile photography with Quad Camera: Snap memorable moments in clear detail with the 48MP Main Camera. Expand the viewing angle with Ultra Wide Camera. Customize focus with Depth Camera, or get closer to the details with Macro Camera. Power that keeps you going: Stay ahead of the day with a battery that won't slow you down. The 5,000mAh (typical) battery lets you keep doing what you do, for hours on end. And with up to 15W of Adaptive Fast Charging, Galaxy A12 quickly gets back to full power. Give yourself more room to play: Galaxy A12 combines Octa-core processing power with up to 4GB of RAM for fast and efficient performance for the task at hand. Enjoy 64GB of internal storage",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    title: "Google Pixel 4a",
    model:
      "Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black",
    img: "img/google-pixel-4a.jpg",
    price: 408,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    title: "Xiaomi Redmi Note 9",
    model:
      'Xiaomi Redmi Note 9 Pro 128GB + 6GB RAM, 6.67" FHD+ DotDisplay, 64MP AI Quad Camera, Qualcomm Snapdragon 720G LTE Factory Unlocked Smartphone - International Version (Interstellar Grey)',
    img: "img/xiaomi-redmi-note9.jpg",
    price: 278,
    company: "Xiaomi",
    info:
      "The true beast of performance.The Redmi Note 9 Pro offers a truly beast performance in every department. This smartphone features an impressive 64MP Quad Camera Array that combines a powerful 64MP primary sensor, 8MP ultra-wide-angle lens, a 5MP macro lens, and a 2MP macro lens, so you are ready to click in any condition. Powered by the Qualcomm Snapdragon 720G, gaming is effortless and efficient. Work and play uninterrupted with the huge 5020mAh battery that is accompanied by the 18W Fast Charger. Splash-proof by P2i..Redmi Note 9 Pro features P2i splash-proof nano-coating technology to ensure your device is protected against spills and splashes. Flagship Haptic Experience Side-Mounted Fingerprint Sensor..Ergonomically designed for easy access and speed. Now unlock your device easily whether it is placed on the table or in your pocket. ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    title: "Samsung Galaxy A50",
    model:
      "Simple Mobile Carrier-Locked Samsung Galaxy A50 4G LTE Prepaid Smartphone - Black - 64GB - Sim Card Included - GSM",
    img: "img/samsung-galaxy-a50.jpg",
    price: 179,
    company: "Simple Mobile",
    info:
      'Designed for the way you live, the Samsung Galaxy A50 is the smartphone you’ve been looking for. Go all day and into the night with a high-capacity, long-lasting, fast-charging battery. Capture life’s moments exactly the way you want to remember them with the Galaxy A50 multi-lens camera. And elevate your entertainment experience with a vibrant 6. 4" Infinity Display that delivers a clear, edge-to-edge view. Long lasting. Fast charging. Go longer with an all-day battery, and power up quickly with Fast Charging. A camera for any occasion Capture images in their entirety, shoot vibrant low-light photos, and take flattering selfies. Capture more of the world around you. Fit more of what you see in every shot, thanks to an ultra-wide 123° field of vision. Broaden your view. The sleek 6. 4" Super AMOLED screen has an edge-to-edge display that’s designed to fit easily in your hand. Stunning photos, day or night The dual aperture lens automatically adjusts in low light, so your images turn out sharp, day or night. Focus on what matters. With Live Focus, you can highlight food, friends or even yourself, and adjust the shot later.',
    inCart: false,
    count: 0,
    total: 0,
  },
];

export default storeProducts;
