export function about() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("about-div");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("about-content-div");

  const head = document.createElement("h1");
  head.classList.add("about-head");
  head.textContent = `About us`;

  const paraOne = document.createElement("p");
  const paraTwo = document.createElement("p");
  const paraThree = document.createElement("p");

  paraOne.textContent = `Welcome, dear guest! I'm the proud owner of  The Saffron & Silk a little corner of the world where every dish is cooked with tradition, passion, and a whole lot of love. From the smoky tandoors of old Lucknow to the royal kitchens of the Nawabs, our recipes have traveled generations to reach your plate.`;

  paraTwo.textContent = `Every kebab is hand-skewered, every curry is slow-simmered, and every spice is freshly ground because shortcuts have no place in real cooking. Whether it's the melt-in-your-mouth Galouti Kebab, the velvety Butter Chicken, or a chilled glass of Saffron Lassi, each bite tells a story of heritage, warmth, and craftsmanship.`;

  paraThree.textContent = `  We don't just serve food we serve memories. So pull up a chair, take a deep breath of those aromatic spices, and let us treat you like family. Because at The Saffron & Silk, you're not just a customer you're an honored guest`;

  const addressDiv = document.createElement("div");
  const paraContent = document.createElement("p");
  paraContent.classList.add("about-address");
  paraContent.textContent = `You can find us at:
831 Bottom Feeder Lane,
Bikini Bottom,
Pacific Ocean`;

  mainDiv.appendChild(head);
  contentDiv.appendChild(paraOne);
  contentDiv.appendChild(paraTwo);
  contentDiv.appendChild(paraThree);
  mainDiv.appendChild(contentDiv);
  addressDiv.appendChild(paraContent);
  mainDiv.appendChild(addressDiv);

  return mainDiv;
}
