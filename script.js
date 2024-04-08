//-----Home page----//

const fetchData = async () => {
  try {
    const response = await fetch('index.json'); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    populateVision(data.vision);
    populateAnimals(data.animals);
    populateWildlifeConservation(data.wildlife_conservation);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors gracefully, like displaying an error message to the user
  }
};

const populateVision = (visionData) => {
  const titleElement = document.querySelector('.About-1 .title h2');
  const textElement = document.querySelector('.About-1 .title p');
  titleElement.textContent = visionData.title;
  textElement.innerHTML = visionData.text;
};

const populateAnimals = (animalsData) => {
  const animalsContainer = document.querySelector('.About-1 .row');
  animalsContainer.innerHTML = ''; // Clear existing content

  animalsData.forEach(animal => {
    const animalCard = document.createElement('div');
    animalCard.classList.add('col');
    animalCard.innerHTML = `
      <img class="img-${animal.name.replace(/\s/g, '')}" src="${animal.image}" alt="${animal.name}">
      <h4>${animal.name}</h4>
      <p class="p2">${animal.description}</p>
      <a href="${animal.link}" class="ctn">Learn More</a>
    `;
    animalsContainer.appendChild(animalCard);
  });
};

const populateWildlifeConservation = (conservationData) => {
  const titleElement = document.querySelector('.About-2 h1');
  const textElement = document.querySelector('.About-2 .About2-content p');
  const imageElement = document.querySelector('.About-2 .About2-image img');
  titleElement.textContent = conservationData.title;
  textElement.textContent = conservationData.description;
  imageElement.src = conservationData.image;
  imageElement.alt = conservationData.title; // Set alt text for accessibility
};

fetchData();



//----Local Storage----//

  const jsonData = {
    "vision": {
      "title": "Vision",
      "text": "In our pursuit of a harmonious coexistence with nature, we envision a Sri Lanka where the rich tapestry of wildlife thrives in its natural habitats, creating a vibrant and sustainable ecosystem. Our vision encompasses the preservation of diverse species, from majestic elephants to elusive leopards, as well as the myriad of flora and fauna that call this island home. Through conservation efforts and community engagement, we aspire to safeguard these invaluable ecosystems, ensuring the enduring beauty and ecological balance of Sri Lanka's wildlife for generations to come."
    },
    "animals": [
      {
        "name": "Sri Lankan leopard",
        "image": "./img/Sri-Lankan-leopard.jpg",
        "description": "The Sri Lankan leopard (Panthera pardus kotiya) is a captivating and elusive big cat native to the island of Sri Lanka. Renowned for its distinctive golden-yellow coat adorned with dark rosettes, the Sri Lankan leopard is a symbol of the country's unique biodiversity. As a subspecies of the leopard, it thrives in a variety of habitats, from dense rainforests to dry plains. With a slender and agile build, these magnificent predators are skilled climbers, making them adept at navigating the diverse landscapes of Sri Lanka. Unfortunately, the Sri Lankan leopard faces threats such as habitat loss and human-wildlife conflict, highlighting the importance of conservation efforts to ensure the continued existence of this remarkable species.", 
        "link": "Leopard.html"
      },
      {
        "name": "Sri Lankan junglefowl",
        "image": "./img/sri-lankan-junglefowl-sri-lanka-945x630.jpg",
        "description": "The Sri Lankan Junglefowl, scientifically known as Gallus lafayettii, is a captivating and vibrant bird species endemic to the lush landscapes of Sri Lanka. Characterized by its striking plumage, the male boasts a dazzling combination of brilliant red, orange, and gold feathers, while the female exhibits more muted tones for camouflage. Often found in the dense tropical forests of the island, these junglefowls contribute to the rich biodiversity of Sri Lanka. Beyond their aesthetic appeal, these birds play a crucial role in the ecosystem, contributing to seed dispersal and maintaining a delicate ecological balance in their natural habitat. The Sri Lankan Junglefowl stands as a symbol of the island's unique wildlife and the importance of preserving its natural heritage.", 
        "link": "sla1.html"
      }
    ],
    "wildlife_conservation": {
      "title": "Sri Lankan Wild Life Conservation",
      "description": "Sri Lankan wildlife conservation stands as a testament to the nation's commitment to preserving its rich biodiversity. The island, known for its unique ecosystems and endemic species, recognizes the imperative of safeguarding its natural heritage. Through a combination of protected areas, national parks, and concerted conservation efforts, Sri Lanka endeavors to ensure the survival of diverse flora and fauna. The conservation initiatives extend beyond boundaries, engaging local communities in sustainable practices and fostering a harmonious coexistence between humans and wildlife.",
      "image": "./img/wildlife_2.jpg",
      "link": "slwldc.html"
    }
  };
  
  // Convert the JSON object to a string
  const jsonString = JSON.stringify(jsonData);
  
  // Save the stringified JSON data in local storage
  localStorage.setItem('wildlifeData', jsonString);
  
  console.log("Wildlife data saved to local storage!");
  


  // Save Button

  const saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", () => {
    saveContent();
  });