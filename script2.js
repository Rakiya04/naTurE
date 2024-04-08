 //----SLWLDC Page----//
  
 fetch('slwldc.json')
  .then(response => response.json())
  .then(data => {
    const about4Section = document.getElementById('about4');

    // Mission
    const missionQuote = document.createElement('p');
    missionQuote.textContent = data.about4.mission.quote;
    about4Section.querySelector('.mission:first-child').appendChild(missionQuote);

    // Key Objectives
    const keyObjectivesList = about4Section.querySelector('.Objectives');
    data.about4.keyObjectives.forEach(objective => {
      const listItem = document.createElement('li');
      const title = document.createElement('b');
      title.textContent = objective.title;
      listItem.appendChild(title);
      listItem.appendChild(document.createTextNode(objective.description));
      keyObjectivesList.appendChild(listItem);
    });

    // Commitment
    const commitmentQuote = document.createElement('p');
    commitmentQuote.textContent = data.about4.commitment.quote;
    about4Section.querySelector('.mission:nth-child(3)').appendChild(commitmentQuote);

    // Join Us
    const joinUsQuote = document.createElement('p');
    joinUsQuote.textContent = data.about4.joinUs.quote;
    about4Section.querySelector('.mission:nth-child(4)').appendChild(joinUsQuote);

    // Location
    const locationIframe = about4Section.querySelector('.park-map iframe');
    locationIframe.src = data.about4.location.map;
  })
  .catch(error => console.error('Error fetching about4 data:', error));
 


//----Local Storage----//

const wildlifeData = {
    "About_4": {
      "mission": {
        "title": "Our Mission",
        "description": "At Wildlife Conservation Sri Lanka, our mission is to safeguard the natural heritage of Sri Lanka by implementing effective conservation strategies, fostering community engagement, and promoting sustainable practices."
      },
      "key_objectives": {
        "title": "Key Objectives",
        "list": [
          {
            "title": "Biodiversity Preservation",
            "description": "We strive to conserve and protect the wide array of plant and animal species that call Sri Lanka home, with a particular focus on preserving endemic and endangered species."
          },
          {
            "title": "Protected Area Management",
            "description": "Our organization is actively involved in the management and maintenance of national parks, wildlife sanctuaries, and other protected areas to provide safe habitats for wildlife and promote responsible eco-tourism."
          },
          {
            "title": "Law Enforcement",
            "description": "We work closely with local authorities to enforce wildlife protection laws, combat illegal activities such as poaching and trafficking, and ensure the safety of wildlife populations."
          },
          {
            "title": "Scientific Research",
            "description": "Through rigorous scientific research, we aim to deepen our understanding of Sri Lanka's ecosystems, monitor changes in wildlife populations, and implement evidence-based conservation strategies."
          },
          {
            "title": "Community Engagement",
            "description": "We believe in the power of community involvement. By collaborating with local communities, we encourage sustainable practices and create a sense of shared responsibility for the conservation of our natural heritage."
          }
        ]
      },
      "commitment": {
        "title": "Our Commitment",
        "description": "Wildlife Conservation Sri Lanka is committed to fostering a world where humans and wildlife coexist harmoniously. Through education, advocacy, and on-the-ground conservation efforts, we strive to create a sustainable future for generations to come."
      },
      "join_us": {
        "title": "Join Us In The Journey",
        "description": "We invite you to be a part of our mission. Whether you are a nature enthusiast, a conservationist, or someone passionate about preserving Sri Lanka's unique ecosystems, there are various ways to get involved. Together, we can make a significant impact on the future of wildlife in Sri Lanka."
      },
      "location": {
        "title": "Location",
        "map_url": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.782988928731!2d79.9198057!3d6.8970927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250aa85489b1f%3A0xd8773339b6b43dbb!2sDepartment%20of%20Wildlife%20Conservation!5e0!3m2!1sen!2slk!4v1705294761521!5m2!1sen!2slk"
      }
    }
  };
  
  // Convert the wildlifeData object to a string
  const jsonString = JSON.stringify(wildlifeData);
  
  // Save the stringified JSON data in local storage
  localStorage.setItem('wildlifeInfo', jsonString);
  
  console.log("Wildlife data saved to local storage!");
  