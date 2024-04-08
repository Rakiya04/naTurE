//----Indegeneous Animal Page----//

fetch("sla1.json")
  .then(response => response.json())
  .then(data => {
    // Display Indigenous Animals
    displayIndigenousAnimals(data.indigenous_animals);

    // Display Wildlife Areas
    displayWildlifeAreas(data.wildlife_areas);
  })
  .catch(error => console.error("Error fetching JSON data:", error));

// Function to display Indigenous Animals
function displayIndigenousAnimals(animals) {
  const animalContainer = document.querySelector(".About-1 .row");
  animalContainer.innerHTML = ""; // Clear existing content

  animals.forEach(animal => {
    const animalElement = document.createElement("div");
    animalElement.classList.add("col"); 
    animalElement.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}">
      <h4>${animal.name}</h4>
      <p>${animal.description}</p>
      <a href="${animal.link}" class="ctn">Learn More</a>
    `;
    animalContainer.appendChild(animalElement);
  });
}

// Function to display Wildlife Areas
function displayWildlifeAreas(areas) {
  const areaContainer = document.querySelector(".leo .threat-container");
  areaContainer.innerHTML = ""; // Clear existing content

  areas.forEach(area => {
    const areaElement = document.createElement("div");
    areaElement.classList.add("threat"); 
    areaElement.innerHTML = `
      <h1>${area.name}</h1>
      <img src="${area.image}" alt="${area.name}">
      <p>${area.description}</p>
      <a href="${area.link}" class="ctn">Learn More</a>
    `;
    areaContainer.appendChild(areaElement);
  });
}


//-----Local Storage----//

const sriLankaData = {
  "indigenous_animals": [
    {
      "name": "Toque Macaque",
      "image": "./img/sla1.webp",
      "description": "This little macaque has golden-brown fur and is a native of Sri Lanka. The toque-like swirl of hair on the top of this primate's head is its most defining characteristic. Their physiological traits differ based on climate.",
      "link": "https://animalia.bio/toque-macaque"
    },
    {
      "name": "Sloth Bear",
      "image": "./img/sla2.webp",
      "description": "The Indian subcontinent is home to the sloth bear. Habitat loss and degradation are the primary reasons for its vulnerable status. Sloth bears have been domesticated and kept as pets and performers.",
      "link": "https://animalia.bio/sloth-bear"
    },
    {
      "name": "Sri-Lankan Blue Magpie",
      "image": "./img/sla3.webp",
      "description": "The brightly coloured Ceylon magpie, also known as the Sri Lanka blue magpie (Urocissa ornata), is a member of the Corvidae family that is unique to Sri Lanka. This species is extremely active and nimble because it is adapted to hunting in the dense canopy. However, it is rarely used for long-distance flying due to its weak flight. The Sri Lanka blue magpie is categorised as vulnerable to extinction because of the fragmentation and destruction of its habitat, which is dense primary forest in the wet zone of southern Sri Lanka, despite its ability to adapt to human presence.",
      "link": "https://animalia.bio/sri-lanka-blue-magpie"
    },
    {
      "name": "Purple-faced langur",
      "image": "./img/sla4.webp",
      "description": "The purple-faced leaf monkey, or purple-faced langur (Semnopithecus vetulus), is an Old World monkey species that is unique to Sri Lanka. It is a long-tailed arboreal species that is primarily brown in colour, has a dark face (with a paler lower face), and is extremely shy. The species was formerly quite common, found in the wet zone villages and suburban areas of Colombo (areas with year-round high temperatures and high humidity, along with monsoon rainstorms). However, rapid urbanisation has resulted in a significant decline in the monkey population.",
      "link": "https://animalia.bio/purple-faced-langur"
    },
    {
      "name": "Grizzled giant squirrel",
      "image": "./img/sla5.webp",
      "description": "The grizzled giant squirrel, or Ratufa macroura, is a large tree squirrel belonging to the genus Ratufa. It can be found in the hill forests of southern India's Karnataka, Tamil Nadu, and Kerala states, as well as in the highlands of Sri Lanka's Central and Uva provinces. It can also be found in patches of riparian forest along the Kaveri River. Because of habitat loss and hunting, the International Union for Conservation of Nature (IUCN) has listed the species as near threatened.",
      "link": "https://animalia.bio/grizzled-giant-squirrelr"
    }
  ],
  "wildlife_areas": [
    {
      "name": "Yala National Park",
      "image": "/img/yalabg.jpeg",
      "description": "Yala National Park is a biodiversity hotspot renowned for its stunning landscapes and diverse wildlife. Visitors can explore its varied ecosystems and archaeological ruins. With robust conservation efforts, the park provides a sanctuary for endangered species.",
      "link": "Yala.html"
    },
    {
      "name": "Wilpattu National Park",
      "image": "/img/wilpattubg.jpeg",
      "description": "Wilpattu National Park captivates with its pristine landscapes and diverse habitats. The park shelters a rich array of wildlife and offers an immersive experience amid nature's splendor. Conservation efforts strive to safeguard this biodiversity hotspot.",
      "link": "Wilpattu.html"
    }
  ]
};

// Store data in local storage
localStorage.setItem("sriLankaData", JSON.stringify(sriLankaData));
console.log("Sri Lanka data stored in local storage!");
