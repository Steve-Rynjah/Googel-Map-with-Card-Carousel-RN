const Images = [
   {image: require('../../assets/1.jpg')},
   {image: require('../../assets/2.jpg')},
   {image: require('../../assets/3.jpg')},
   {image: require('../../assets/4.jpg')},
   {image: require('../../assets/5.jpg')}
]

export const markers = [
    {
        coordinate: {
            latitude: 1.3602082,
            longitude: 103.9897593
        },
        title: "Jewel Changi Airport",
        description: "Marvel at the intricate architecture of the striking glass and steel dome as you run through the Changi Airport park connecter",
        image: Images[0].image,
        rating: 4,
        reviews: 99,
        country: "Singapore"
    },
    {
        coordinate: {
            latitude: 1.2876834,
            longitude: 103.8605974
        },
        title: "Helix Bridge",
        description: "Run through the pedestrian bridge linking Marina Centre with Marina South and marvel at the towering skyscrapers all around.",
        image: Images[1].image,
        rating: 3,
        reviews: 88,
        country: "Singapore"
    },
    {
        coordinate: {
            latitude: 1.3138397,
            longitude: 103.8159136
        },
        title: "Botanic Gardens",
        description: "Centrally located, home to a variety of attractions and ultimately a great running route.",
        image: Images[2].image,
        rating: 4,
        reviews: 102,
        country: "Singapore"
    },
    {
        coordinate: {
            latitude: 1.2815683,
            longitude: 103.8636132
        },
        title: "Gardens by the Bay",
        description: "Awarded the 2019 Urban Parks Legacy Award, Gardens by the Bay stands tall as a must visit location for people of all ages.",
        image: Images[3].image,
        rating: 5,
        reviews: 149,
        country: "Singapore"
    },
    {
        coordinate: {
            latitude: 1.2867892,
            longitude: 103.8545014
        },
        title: "Merlion",
        description: "Home to a prominent tourist attraction, the Merlion Park is a good place to enjoy the sunrise, and an even better place for a run!",
        image: Images[4].image,
        rating: 4,
        reviews: 70,
        country: "Singapore"
    }
]

// export const markers = {
//     "Jewel Changi Airport":{
//         results:[
//             {
//                 geometry:{
//                     location:{
//                         latitude: 1.2876834,
//                          longitude: 103.8605974
//                     }
//                 },
//                 title: "Jewel Changi Airport",
//                 description: "Marvel at the intricate architecture of the striking glass and steel dome as you run through the Changi Airport park connecter",
//                 image: Images[0].image,
//                 rating: 4,
//                 reviews: 99,
//                 country: "Singapore"
//             }
//         ]
//     },
//     "Helix Bridge":{
//         results:[
//             {
//                 geometry:{
//                     location:{
//                         latitude: 1.3602082,
//                         longitude: 103.9897593
//                     }
//                 },
//                 title: "Helix Bridge",
//                 description: "Run through the pedestrian bridge linking Marina Centre with Marina South and marvel at the towering skyscrapers all around.",
//                 image: Images[1].image,
//                 rating: 3,
//                 reviews: 88,
//                 country: "Singapore"
//             }
//         ]
//     },

// }