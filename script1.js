//----SLWL Page----//


fetch('slwl.json')
 .then(response => response.json())
 .then(data => {
    data.forEach(park => {
      const parkSection = document.createElement('section');
      parkSection.classList.add('national-park');
      parkSection.id = park.id;

      const parkName = document.createElement('h2');
      parkName.textContent = park.name;
      parkSection.appendChild(parkName);

      const parkImages = document.createElement('div');
      parkImages.classList.add('park-images');

      park.images.forEach(image => {
        const parkImage = document.createElement('img');
        parkImage.src = image;
        parkImages.appendChild(parkImage);
      });

      parkSection.appendChild(parkImages);

      const parkInfo = document.createElement('div');
      parkInfo.classList.add('park-info');
      parkInfo.innerHTML = park.description;
      parkSection.appendChild(parkInfo);

      const parkMap = document.createElement('div');
      parkMap.classList.add('park-map');
      parkMap.innerHTML = `<iframe src="${park.map}" width="1000" height="300" style="border:0;" allowfullscreen="" ></iframe>`;
      parkSection.appendChild(parkMap);

      document.body.appendChild(parkSection);
    });
  })
 .catch(error => console.error('Error fetching national parks:', error));



//----Local storage----//

  const nationalParksData = [
    {
      "id": "minneriyapark",
      "name": "Minneriya National Park",
      "images": [
        "./img/Minneriya 1.jpeg",
        "./img/Minneriya 2.jpeg"
      ],
      "description": "Minneriya National Park is located in Sri Lanka's North Central Province, 182 kilometers from Colombo. The major cities closest to Minneriya National Park are Habarana and Polonnaruwa. The renovated, vast ancient Minneriya Rainwater Reservoir that irrigates a considerable area of the district of Polonnaruwa is the focal point of the Minneriya National Park. Minneriya National Park, which is part of the elephant corridor that connects Kaudulla and Wasgamuwa National Parks, provides visitors with the opportunity to see elephant herds all year. May to October is the best period to visit Minneriya National Park in view of the world-famous Great Elephant Gathering of the Asian wild elephants. During this period, herds of up to 350 elephants are seen at the 8,890-hectare park within a few square kilometers of the Minneriya Tank. According to some reports, there are as many as 700 elephants. In August and September each year, during the dry season, wild elephants migrate from Wasgamuwa National Park to Minneriya National Park in search of food and shelter. Tourists visit Minneriya National Park largely because of elephants, especially in the dry season.", 
      "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1975.412821684194!2d80.84842539262084!3d8.016908555900207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb6009a20be05d%3A0xa4d046f2f06b05f5!2sMinneriya%20National%20Park!5e0!3m2!1sen!2slk!4v1703647097642!5m2!1sen!2slk",
    },
    {
        "id": "sinharajaforest",
        "name": "Sinharaja Forest Reserve",
        "images": [
          "./img/sinharaja 1.jpeg",
          "./img/sinharaja 2.jpeg"
        ],
        "description": "<p>Sinharaja Forest, a UNESCO World Heritage Site in Sri Lanka, is a verdant jewel teeming with biodiversity. Spanning 8,864 hectares, this tropical rainforest stands as a testament to the island's ecological richness. A treasure trove of endemic flora and fauna, Sinharaja is home to elusive species like the purple-faced langur and the Sri Lankan leopard. Towering trees, draped in lush greenery, create a majestic canopy, sheltering myriad life forms. The forest's importance extends beyond its borders, contributing to the nation's water resources and climate regulation. As a living laboratory for scientists and a haven for nature enthusiasts, Sinharaja Forest epitomizes the delicate balance between human and environmental well-being. Its preservation is vital for sustaining the intricate web of life that thrives within its emerald embrace.</p>",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8991566477052!2d80.45745167467092!3d6.406990793583732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e76bd109d45f%3A0x8c0ef10"
      }, 
      {
          "name": "Udawalawe National Park",
          "images": [
          "./img/udawalawe 1.jpeg",
          "./img/udaawalwe 2.jpeg"
          ],
          "description": "<p>Udawalawe National Park is a national park located in the Sabaragamuwa and Uva Provinces of Sri Lanka. The park was created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir on the Walawe River, as well as to protect the catchment of the reservoir. The reserve covers 30,821 hectares (119.00 sq mi) of land area and was established on 30 June 197212. The park is home to a large population of Sri Lankan elephants, water buffalo, sambar deer, and crocodiles. The park is also an important habitat for water birds</p>",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.370803868233!2d80.87374407467155!3d6.474628793517159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae408ff88887e79%3A0xaf12e79ffbd980d7!2sUdawalawe%20National%20Park!5e0!3m2!1sen!2slk!4v1703647476204!5m2!1sen!2slk"
      },
      {
        "name": "Horton Plains National Park",
        "images": [
          "./img/Hortan 1.png",
          "./img/horton 2.jpeg"
        ],
        "description": "Horton Plains National Park, nestled in the central highlands of Sri Lanka, unfolds a captivating landscape at an elevation of over 2,100 meters. This UNESCO World Heritage Site is a testament to nature's artistic prowess. Sprawling across 3,160 hectares, the park boasts unique ecosystems, including cloud forests and grasslands, fostering diverse flora and fauna. The iconic World's End precipice unveils a breathtaking panorama of mist-covered valleys, making it a sought-after destination for hikers and nature enthusiasts. Baker's Falls, a cascading marvel, adds to the park's allure. Home to elusive wildlife such as sambar deer and the endemic purple-faced langur, Horton Plains stands as a sanctuary of biodiversity. The cool, crisp air and surreal landscapes make it a haven for those seeking serenity amidst nature's grandeur. Preserving Horton Plains is paramount not only for its ecological significance but also for the spiritual connection it fosters between visitors and the untamed beauty of the highlands.",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6740385671706!2d80.79975837467472!3d6.809445993188103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3882edb4b78ef%3A0xcebca89153777249!2sHorton%20Plains%20National%20Park!5e0!3m2!1sen!2slk!4v1703647916929!5m2!1sen!2slk"
      }
  ];
  
  // Convert the nationalParksData object to a string
  const jsonString = JSON.stringify(nationalParksData);
  
  // Save the stringified JSON data in local storage
  localStorage.setItem('nationalParks', jsonString);
  
  console.log("National Parks data saved to local storage!");
  