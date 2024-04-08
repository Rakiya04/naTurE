//----YAala Page----//

fetch("yala.json") 
  .then(response => response.json())
  .then(data => {
    // Display Introduction Section
    displaySection(data.introduction, "introduction");

    // Display Wildlife Section
    displaySection(data.wildlife, "wildlife");

    // Display Conservation Section
    displaySection(data.conservation, "conservation");
  })
  .catch(error => console.error("Error fetching JSON data:", error));

// Function to display a section
function displaySection(sectionData, introduction) {
  const sectionContainer = document.querySelector(`#${introduction}`);
  sectionContainer.innerHTML = `
    <h2>${sectionData.title}</h2>
    <p>${sectionData.description}</p>
    
  `;


  // Display images (if any)
  if (sectionData.images) {
    const imageContainer = document.createElement("div");
    sectionContainer.appendChild(imageContainer);
    sectionData.images.forEach(imagePath => {
      const image = document.createElement("img");
      image.src = imagePath;
      image.alt = "Yala National Park Image";
      imageContainer.appendChild(image);
    });
  }

  // Display map (if any)
  if (sectionData.map) {
    const iframe = document.createElement("iframe");
    iframe.src = sectionData.map;
    iframe.width = "1000";
    iframe.height = "300";
    iframe.style.border = "0";
    iframe.allowfullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    sectionContainer.appendChild(iframe);
  }
}


//----Local Storage----//
const yalaData = {
    "introduction": {
        "title": "Introduction",
        "description": "Yala National Park, situated in Sri Lanka, stands as a testament to the country's rich biodiversity and natural beauty. The park encompasses diverse ecosystems and is renowned for its wildlife, making it a prime destination for nature enthusiasts. Yala is particularly famous for its elephants, leopards, and other exotic species. Conservation efforts are underway to safeguard this park.",
        "images": [
          "/img/Crocodile Mouth.jpg",
          "/img/yalaimg2 copy.jpg",
          "/img/Yala National Park Sri Lanka.jpg"
        ],
        "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15857.817998947383!2d81.4718847!3d6.4639613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5d3a62ffb9359%3A0x3bb623d70b5a3314!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1705509021520!5m2!1sen!2slk"
      },
      "wildlife": {
        "title": "Wildlife",
        "description": "Yala National Park, situated in the southeastern corner of Sri Lanka, stands as a testament to the country's extraordinary biodiversity. Spanning over 97,000 hectares, it is the second-largest national park in Sri Lanka and a sanctuary of remarkable wildlife diversity. Renowned for its thriving ecosystems, Yala National Park is a haven for nature enthusiasts and wildlife photographers alike. The park boasts a spectacular array of fauna, with the iconic Sri Lankan elephant gracefully navigating its landscapes, leopards stealthily prowling through the dense foliage, and elusive sloth bears ambling in their natural habitats. Yala's varied topography, including grasslands, lagoons, and dense forests, creates a mosaic of environments that supports an extensive range of species. Birdwatchers are treated to a spectacle as vibrant birdlife, including flamingos, peafowls, and numerous species of eagles, inhabit the park's diverse habitats. The park's most sought-after resident, the Sri Lankan leopard, draws wildlife enthusiasts from around the globe, providing a rare opportunity to witness this majestic big cat in its natural setting. Conservation efforts at Yala National Park focus on maintaining the delicate balance of its ecosystems. Anti-poaching initiatives, habitat preservation, and community engagement play pivotal roles in safeguarding the park's biodiversity. As visitors explore the park responsibly, they contribute to the sustainability of Yala's precious wildlife. Yala National Park stands as a testament to the harmonious coexistence of diverse species and serves as a reminder of the importance of preserving these natural wonders for future generations to marvel at and cherish.(Groundviews, 2022)",
        "images": [
          "/img/wl4.webp",
          "/img/wl1.jpeg",
          "/img/wl2.webp"
        ]
      },
      "conservation": {
        "title": "Conservation",
        "description": "Yala National Park is a stronghold for conservation efforts. The park's commitment is evident through initiatives like habitat preservation, anti-poaching measures, and community involvement. Visitors are encouraged to practice responsible tourism to ensure the park's sustainability.",
        "image": "/img/Environmental Conservation Volunteer Abroad Projects _ IVHQ.jpeg"
      }
  };
  
  // Store data in local storage
  localStorage.setItem("yalaNationalParkData", JSON.stringify(yalaData));
  console.log("Yala National Park data stored in local storage!");
  