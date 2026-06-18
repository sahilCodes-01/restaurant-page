export function menu() {
  const appetizers = [
    {
      name: "Seekh Kebab — $12",
      description:
        "Minced lamb mixed with aromatic spices, skewered and slow-cooked in a tandoor until perfectly charred.",
    },
    {
      name: "Paneer Tikka — $11",
      description:
        "Chunks of fresh cottage cheese marinated in saffron yogurt and grilled to golden perfection.",
    },
    {
      name: "Galouti Kebab — $14",
      description:
        "Melt-in-your-mouth minced mutton patties, a royal recipe from the Nawabs of Lucknow.",
    },
    {
      name: "Shami Kebab — $10",
      description:
        "Tender minced lamb patties with chana dal, pan-fried and served with mint chutney.",
    },
  ];

  const mainCourse = [
    {
      name: "Butter Chicken — $18",
      description:
        "Succulent chicken in a velvety tomato and butter gravy, slow-simmered with warming spices.",
    },
    {
      name: "Dal Makhani — $15",
      description:
        "Whole black lentils slow-cooked overnight with cream and butter — a true Delhi classic",
    },
    {
      name: "Mutton Rogan Josh — $22",
      description:
        "Kashmiri slow-braised mutton in a bold, fragrant gravy of whole spices and dried chilies.",
    },
    {
      name: "Paneer Makhan — $16",
      description:
        " Soft paneer cubes bathed in a rich, creamy tomato sauce with a hint of cardamom.",
    },
  ];

  const drinks = [
    {
      name: "Saffron Lassi — $6 ",
      description:
        "Thick chilled yogurt drink blended with premium saffron strands and a hint of cardamom.",
    },
    {
      name: "Rose Sharbat — $5",
      description:
        "A refreshing chilled drink made with rose syrup, milk and basil seeds — delicate and floral.",
    },
    {
      name: "Masala Chai — $4",
      description:
        "Slow-brewed spiced tea with ginger, cardamom, cinnamon and cloves, served with steamed milk",
    },
    {
      name: "Virgin Mojito — $7",
      description:
        "Fresh mint, lime and soda over crushed ice — light, zesty and perfectly refreshing.",
    },
  ];

  function helper(name, description) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("menu-content-div");
    const headElement = document.createElement("h3");
    const paraElement = document.createElement("p");

    headElement.textContent = name;
    paraElement.textContent = description;

    itemContainer.appendChild(headElement);
    itemContainer.appendChild(paraElement);

    return itemContainer;
  }

  function createSection(title, items) {
    const sectionDiv = document.createElement("div");

    const titleHeading = document.createElement("h2");
    titleHeading.classList.add("title-head")

    sectionDiv.appendChild(titleHeading);

    titleHeading.textContent = title;

    items.forEach((item) => {
      const divReturn = helper(item.name, item.description);
      sectionDiv.appendChild(divReturn);
    });

    return sectionDiv;
  }

  const appetizerSection = createSection("Appetizers", appetizers);
  appetizerSection.classList.add("appetizer-head")

  const mainSection = createSection("Main Course", mainCourse);
  mainSection.classList.add("main-section")

  const drinkSection = createSection("Drinks", drinks);
drinkSection.classList.add("drink-section")

  const divContainer = document.createElement("div");
  const heading = document.createElement("h1");
  heading.classList.add("menu-head")

  heading.textContent = "Menu";

  divContainer.appendChild(heading);
  divContainer.appendChild(appetizerSection);
  divContainer.appendChild(mainSection);
  divContainer.appendChild(drinkSection);

  divContainer.classList.add("menu-section-div")
  return divContainer;
}
