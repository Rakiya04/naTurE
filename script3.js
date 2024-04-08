//----Local Storage----//

const leopardVenues = {
  
    "venues": {
      "leo1": {
        "venueContainer": [
          {
            "title": "Yala National Park",
            "description": "The place to go for leopard sightings. This five-block park is billed as the best place to see leopards in the wild. With an estimated 60 to 70 leopards dispersed throughout the park, it is the world's most popular tourist destination with the highest density of leopards.",
            "image": "/img/leopard1.jpeg"
          },
          {
            "title": "Kumana National Park",
            "image": "/img/leopard2.webp",
            "description": "The island's far eastern corner is home to Kumana, the land of mystery and wonder. Initially, Kumana gained notoriety as a bird sanctuary. However, over the past ten or so years, the park has seen an increase in the number of leopard sightings."
          },
          {
            "title": "Horton Plains National Park",
            "description": "Horton Plains National Park is one of the last remaining highland wilderness refuges. One of Mother Nature's most breathtaking marvels, this montane wilderness is perched atop a high plateau at an elevation of more than 2500 metres above sea level. With perseverance and innumerable visits over the past few years, this has also resulted in some incredible leopard encounters. The most important landscapes of this habitat are the deep, dense cloud forests and the edges of the open plains, which are home to these predators, who rule this domain. With their diet consisting mostly of Sambhur, the largest deer species in Sri Lanka, these cats appear to differ physiologically from their cousins in the lowlands.",
            "image": "/img/leopard3.jpeg"
          }
        ]
      }
    }   
};
  
  const threatsData = {
    "leo2": {
      "threatContainer": [
        {
          "title": "Climate Change",
          "image": "/img/leopard5.jpeg",
          "description": "The Sri Lankan leopard population is threatened by climate change. The main challenges they face include prolonged droughts, temperature rise, disruptions in reproduction, and habitat loss. To reduce this threat, the government has implemented several conservation programs.",
          "link": "https://groundviews.org/2022/07/30/saving-the-sri-lankan-leopard-from-extinction/",
          "linkText": "Leran More"
        },
        {
          "title": "Habitat Destruction",
          "image": "/img/leopard4.jpeg",
          "description": "Habitat loss and fragmentation is a primary threat to Sri Lankan leopards. The Sri Lankan government has implemented several mechanisms to address this threat, including establishing national parks and reserves.",
          "link": "https://www.australiangeographic.com.au/blogs/ag-blog/2013/12/meeting-the-leopards-of-sri-lanka/",
          "linkText": "Learn More"
        }
      ]
    }
  };
  

const leopardVenuesString = JSON.stringify(leopardVenues);
const threatsDataString = JSON.stringify(threatsData);

localStorage.setItem('leopardVenues', leopardVenuesString);
localStorage.setItem('threatsData', threatsDataString);

console.log("Leopard and Threat data saved to local storage!");

  

//----Leopard page----// 

fetch('Leopard.json')
  .then(response => response.json())
  .then(data => {
    const venuesSection = document.getElementById('leo1');
    const threatsSection = document.getElementById('leo2');

    data.venues.leo1.venueContainer.forEach(venue => {
      const venueDiv = document.createElement('div');
      venueDiv.classList.add('venue');

      const title = document.createElement('h1');
      title.textContent = venue.title;
      venueDiv.appendChild(title);

      const description = document.createElement('p');
      description.textContent = venue.description;
      venueDiv.appendChild(description);

      const image = new Image();
      image.src = venue.image;
      venueDiv.appendChild(image);

      venuesSection.appendChild(venueDiv);
    });

    data.venues.leo2.threatContainer.forEach(threat => {
      const threatDiv = document.createElement('div');
      threatDiv.classList.add('threat');

      const title = document.createElement('h1');
      title.textContent = threat.title;
      threatDiv.appendChild(title);

      const image = new Image();
      image.src = threat.image;
      threatDiv.appendChild(image);

      const description = document.createElement('p');
      description.textContent = threat.description;
      threatDiv.appendChild(description);

      const link = document.createElement('a');
      link.textContent = threat.linkText;
      link.href = threat.link;
      threatDiv.appendChild(link);

      threatsSection.appendChild(threatDiv);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));

