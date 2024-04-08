//----Local Storage----//

const yalaData = { 
    "introduction": {
      "title": "Introduction",
      "images": [
        "/img/w1.jpeg",
        "/img/w2.jpeg",
        "/img/w3.jpeg"
      ],
      "description": "Wilpattu National Park, located in the northwest of Sri Lanka, stands as a testament to the country's rich natural heritage. Spanning over 1,300 square kilometers, it's the largest national park in Sri Lanka, renowned for its beauty and diverse ecosystems. Wilpattu is characterized by its unique landscape, featuring a combination of dense scrub jungles, open grasslands, and numerous lakes. This park provides a haven for wildlife, making it a prime destination for nature enthusiasts and photographers. The park's name translates to 'land of lakes,' aptly describing its scenic charm. Wilpattu is home to a variety of fauna, including elephants, sloth bears, spotted deer, and numerous birds. Its remote location enhances the sense of wilderness. As one of Sri Lanka's oldest parks, Wilpattu not only captivates with its biodiversity but also serves as a crucial conservation area.", 
      "id": "wintro"
    },
    "wildlife": {
      "title": "Wildlife",
      "images": [
        "/img/w5.jpeg",
        "/img/w8.jpeg",
        "/img/w6.jpeg"
      ],
      "description": "Wilpattu National Park, situated in the northwest of Sri Lanka, is a sprawling sanctuary renowned for its diverse wildlife. Spanning over 1,300 square kilometers, Wilpattu boasts a unique landscape and rich biodiversity. The park's inhabitants include leopards, elephants, sloth bears, water buffalo, spotted deer, and a variety of bird species like painted storks, white ibises, and the endangered Sri Lankan junglefowl. Wilpattu National Park is also a significant cultural and historical site.", 
      "id": "wlife"
    },
    "conservation": {
      "title": "Conservation",
      "description": "Conservation efforts within Wilpattu National Park focus on safeguarding its unique biodiversity and promoting sustainable practices. The park's diverse habitats provide a haven for wildlife. Conservation initiatives involve habitat preservation, anti-poaching measures, and community engagement. Wilpattu National Park stands as a testament to successful conservation practices, highlighting the importance of preserving natural habitats for future generations.",
      "id": "wcon"
    }
  }; 

  // Convert the JSON object to a string (local storage can only store strings)
const yalaDataString = JSON.stringify(yalaData);

// Store the data in local storage with a key
localStorage.setItem("wilpattuData", yalaDataString);

console.log("Wilpattu National Park data stored in local storage!");


//----Wilpattue page----//
  
  // Function to display a section
  function displaySection(sectionData) {
    const sectionElement = document.getElementById(sectionData.id);
    if (sectionElement) {
      sectionElement.innerHTML = `
        <h2>${sectionData.title}</h2>
        <p>${sectionData.description}</p>
      `;
  
      // Display images (if any)
      if (sectionData.images) {
        const imageContainer = document.createElement("div");
        sectionElement.appendChild(imageContainer);
        sectionData.images.forEach(imagePath => {
          const image = document.createElement("img");
          image.src = imagePath;
          image.alt = "Wilpattu National Park Image";
          imageContainer.appendChild(image);
        });
      }
  
      // Display map (if there's a map element in your HTML)
      const mapElement = sectionElement.querySelector(".park-map iframe");
      if (mapElement) {
        mapElement.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505153.2015998011!2d79.70708348661616!3d8.449741952813257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdac7787e4bc27%3A0xcdd9a0715dad187c!2sWilpattu%20National%20Park!5e0!3m2!1sen!2slk!4v1705515258167!5m2!1sen!2slk";
      }
    } else {
      console.error(`Section with ID "${sectionData.id}" not found!`);
    }
  }
  
  // Display sections using your data
  displaySection(yalaData.introduction);
  displaySection(yalaData.wildlife);
  displaySection(yalaData.conservation);
  