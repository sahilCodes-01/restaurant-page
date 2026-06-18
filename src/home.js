export function loadHome() {
  const mainContent = document.createElement("div");

  const headOne = document.createElement("h1");
  headOne.classList.add("head-1")
  headOne.textContent = `Welcome to The Saffron & Silk`;

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("desc-div")

  const paraOne = document.createElement("p");
  paraOne.classList.add("para-1")
  const paraTwo = document.createElement("p");
  const paraThree = document.createElement("p");

  paraOne.textContent = `Saffron & Silk is a fine dining Indian restaurant that brings the rich culinary heritage of Mughal kitchens to your table. Born in the heart of Delhi, we craft every dish with hand-picked spices, slow-cooked gravies, and recipes passed down through generations.`;

  paraTwo.textContent = `From the smoky char of our tandoor kebabs to the delicate sweetness of our saffron-infused desserts, every bite tells a story of tradition, patience, and passion.`;

  paraThree.textContent = ` Whether you're joining us for an intimate dinner or a grand celebration, at Saffron & Silk we don't just serve food — we serve an experience. Where every meal is a memory.`;
  
 
  const imgOne = document.createElement("img");
  imgOne.classList.add("img-1");
  imgOne.src = `https://lightandlayer.com/img/image10_indian-restaurant-interior-design-ideas_feature-cultural-motifs.jpg`;

  const imgTwo = document.createElement("img");
  imgTwo.classList.add("img-2");
  imgTwo.src = `https://i.pinimg.com/474x/c3/b9/75/c3b97556164dfd1dbebf7b906bca4f15.jpg`;

  const experienceDiv = document.createElement("div");
  experienceDiv.classList.add("experience-div")
  const expHead = document.createElement("h2");
  expHead.classList.add("exp-head");

  expHead.textContent = `A Dining Experience Like No Other`;

  const paraExpOne = document.createElement("p");
  const paraExpTwo = document.createElement("p");

  paraExpOne.textContent = ` Step into a world where warm candlelight meets rich aromas and every corner whispers elegance.`;

  paraExpTwo.textContent = ` At Saffron & Silk, our ambiance is as carefully crafted as our cuisine — designed to transport you from the moment you walk in.Every table is a stage, every dish a performance. Come hungry, leave enchanted.`;


  mainContent.appendChild(headOne);

  descriptionDiv.appendChild(paraOne);
  descriptionDiv.appendChild(paraTwo);
  descriptionDiv.appendChild(paraThree);
  mainContent.appendChild(descriptionDiv);

  mainContent.appendChild(imgOne);
  mainContent.appendChild(imgTwo);

  experienceDiv.appendChild(expHead);
  experienceDiv.appendChild(paraExpOne);
  experienceDiv.appendChild(paraExpTwo);

  mainContent.appendChild(experienceDiv);
  mainContent.classList.add("home-section");

  return mainContent;
}
