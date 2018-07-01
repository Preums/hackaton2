const initialAvailability = [
  {
    id: 1, name: 'Mount Krushmore', minAge: 6, waiting: 30, picture: null, bestlike: 4, type: 'Sensations',
  }, {
    id: 2, name: 'Unoriginal log ride', minAge: 10, waiting: 45, picture: null, bestlike: 3, type: 'Sensations',
  }, {
    id: 3, name: 'Krusty\u0027s waterless waterslide', minAge: 8, waiting: 15, picture: null, bestlike: 4, type: 'Sensations',
  }, {
    id: 4, name: 'Poochie\u0027s half pipe', minAge: 14, waiting: 15, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 5, name: 'Krusty\u0027s giant wheel', minAge: 6, waiting: 30, picture: null, bestlike: 4, type: 'Romantic',
  }, {
    id: 6, name: 'Sleeping Itchy\u0027s castle', minAge: 4, waiting: 15, picture: null, bestlike: 3, type: 'Romantic',
  }, {
    id: 7, name: 'Krusty\u0027s wet \u0026 shocky stunt show', minAge: 6, waiting: 45, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 8, name: 'Captain Dinosaur\u0027s pirate rip off', minAge: 4, waiting: 45, picture: null, bestlike: 5, type: 'Humor',
  }, {
    id: 9, name: 'Happy little elves in Panda Land', minAge: 4, waiting: 15, picture: null, bestlike: 2, type: 'Romantic',
  }, {
    id: 10, name: 'The Dragon boat ride', minAge: 4, waiting: 45, picture: null, bestlike: 5, type: 'Romantic',
  }, {
    id: 11, name: 'Castle ressembling stadium', minAge: 6, waiting: 45, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 12, name: 'Krusty\u0027s haunted condo', minAge: 14, waiting: 45, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 13, name: 'The tooth chipper', minAge: 18, waiting: 60, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 14, name: 'Krusty\u0027s dustbowl jalopy rush', minAge: 6, waiting: 30, picture: null, bestlike: 4, type: 'Humor',
  }, {
    id: 15, name: 'Duff pavillon', minAge: 10, waiting: 30, picture: null, bestlike: 4, type: 'Humor',
  }, {
    id: 16, name: 'Sea Captain\u0027s Queasytime lagoon ride', minAge: 6, waiting: 45, picture: null, bestlike: 4, type: 'Romantic',
  }, {
    id: 17, name: 'Krusty\u0027s carousel', minAge: 4, waiting: 30, picture: null, bestlike: 3, type: 'Romantic',
  }, {
    id: 18, name: 'Death drop', minAge: 18, waiting: 60, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 19, name: 'Moe\u0027s tunnel of shame \u0026 rejection', minAge: 4, waiting: 0, picture: null, bestlike: 0, type: 'Humor',
  }, {
    id: 20, name: 'Radioactive man: the ride', minAge: 4, waiting: 30, picture: null, bestlike: 3, type: 'Humor',
  }, {
    id: 21, name: 'The screamatorium of Dr Frightmarstein', minAge: 18, waiting: 45, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 22, name: 'Get probed by Kang \u0026 Kodos', minAge: 6, waiting: 30, picture: null, bestlike: 5, type: 'Sensations',
  }, {
    id: 23, name: 'Main Entrance', minAge: 0, waiting: 60, picture: null, bestlike: 0, type: 'Other',
  }, {
    id: 24, name: 'Main Street', minAge: 0, waiting: 0, picture: null, bestlike: 0, type: 'Other',
  }, {
    id: 25, name: 'Itchy \u0026 Scratchy Land main entrance', minAge: 0, waiting: 0, picture: null, bestlike: 0, type: 'Other',
  }, {
    id: 26, name: 'Krusty\u0027s one plate maximum buffet', minAge: 0, waiting: 30, picture: null, bestlike: 3, type: 'Restaurant',
  }, {
    id: 27, name: 'Scratchy\u0027s cat a nooga spew spew', minAge: 0, waiting: 45, picture: null, bestlike: 4, type: 'Restaurant',
  }, {
    id: 28, name: 'The tilt n\u0027 spew', minAge: 0, waiting: 45, picture: null, bestlike: 4, type: 'Restaurant',
  }, {
    id: 29, name: 'The change loser', minAge: 0, waiting: 0, picture: null, bestlike: 2, type: 'Other',
  }, {
    id: 30, name: 'K\u0027s dine in the sky food needle', minAge: 0, waiting: 60, picture: null, bestlike: 5, type: 'Restaurant',
  }, {
    id: 31, name: 'K\u0027s L.A. traffic jam', minAge: 0, waiting: 60, picture: null, bestlike: 0, type: 'Other',
  }, {
    id: 32, name: 'Gazebo just north of the line boat ride', minAge: 8, waiting: 30, picture: null, bestlike: 3, type: 'Humor',
  }, {
    id: 33, name: 'It\u0027s a long long line', minAge: 0, waiting: 0, picture: null, bestlike: 0, type: 'Other',
  }, {
    id: 34, name: 'Krusty\u0027s futuristic rootin\u0027 n\u0027 tootin\u0027 BBQ 3000', minAge: 0, waiting: 45, picture: null, bestlike: 4, type: 'Restaurant',
  }, {
    id: 35, name: 'Krustylu studio', minAge: 0, waiting: 60, picture: null, bestlike: 4, type: 'Other',
  }, {
    id: 36, name: 'Krustyland Hotel', minAge: 0, waiting: 0, picture: null, bestlike: 4, type: 'Hotel',
  }, {
    id: 37, name: 'Apu\u0027s concession stand', minAge: 0, waiting: 0, picture: null, bestlike: 2, type: 'Other',
  }, {
    id: 38, name: 'Madame Manjula\u0027s future looked after', minAge: 0, waiting: 0, picture: null, bestlike: 0, type: 'Other',
  }, {
    id: 39, name: 'Scratchy\u0027s flea dip dipper flipper', minAge: 18, waiting: 0, picture: null, bestlike: 1, type: 'Sensations',
  }, {
    id: 40, name: 'Krusty\u0027s spit \u0027n watch aerial gondolas', minAge: 21, waiting: 10, picture: null, bestlike: 3, type: 'Romantic',
  },
];

const isAvailable = (state = initialAvailability, action) => {
  let availabilityList = [...state];

  switch (action.type) {
    case 'IS_AVAILABLE':
      availabilityList = action.dbResponse;
      return availabilityList;

    case 'AVAILABILITY_FAILURE':
      return availabilityList;

    default:
      return state;
  }
};

export default isAvailable;
