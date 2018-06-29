const initialAvailability = [
  {
    "id":1,"name":"Mount Krushmore","minage":6,"waiting":30,"picture":null,"bestlike":4,"type":"Sensations"
  }, {
    "id":2,"name":"Unoriginal log ride","minage":10,"waiting":45,"picture":null,"bestlike":3,"type":"Sensations"
  }, {
    "id":3,"name":"Krusty\u0027s waterless waterslide","minage":8,"waiting":15,"picture":null,"bestlike":4,"type":"Sensations"
  }, {
    "id":4,"name":"Poochie\u0027s half pipe","minage":14,"waiting":15,"picture":null,"bestlike":5,"type":"Sensations"
  }, {
    "id":5,"name":"Krusty\u0027s giant wheel","minage":6,"waiting":30,"picture":null,"bestlike":4,"type":"Romantic"
  }, {
    "id":6,"name":"Sleeping Itchy\u0027s castle","minage":4,"waiting":15,"picture":null,"bestlike":3,"type":"Romantic"
  }, {
    "id":7,"name":"Krusty\u0027s wet \u0026 shocky stunt show","minage":6,"waiting":45,"picture":null,"bestlike":5,"type":"Sensations"
  }, {
    "id":8,"name":"Captain Dinosaur\u0027s pirate rip off","minage":4,"waiting":45,"picture":null,"bestlike":5,"type":"Humor"
  }, {
    "id":9,"name":"Happy little elves in Panda Land","minage":4,"waiting":15,"picture":null,"bestlike":2,"type":"Romantic"
  }, {
    "id":10,"name":"The Dragon boat ride","minage":4,"waiting":45,"picture":null,"bestlike":5,"type":"Romantic"
  }, {
    "id":11,"name":"Castle ressembling stadium","minage":6,"waiting":45,"picture":null,"bestlike":5,"type":"Sensations"
  }, {
    "id":12,"name":"Krusty\u0027s haunted condo","minage":14,"waiting":45,"picture":null,"bestlike":5,"type":"Sensations"
  }, {
    "id":13,"name":"The tooth chipper","minage":18,"waiting":60,"picture":null,"bestlike":5,"type":"Sensations"
  }, {
    "id":14,"name":"Krusty\u0027s dustbowl jalopy rush","minage":6,"waiting":30,"picture":null,"bestlike":4,"type":"Humor"
  }, {
    "id":15,"name":"Duff pavillon","minage":10,"waiting":30,"picture":null,"bestlike":4,"type":"Humor"
  }, {
    "id":16,"name":"Sea Captain\u0027s Queasytime lagoon ride","minage":6,"waiting":45,"picture":null,"bestlike":4,"type":"Romantic"
  }, {
    "id":17,"name":"Krusty\u0027s carousel","minage":4,"waiting":30,"picture":null,"bestlike":3,"type":"Romantic"
  }, {
    "id":18,"name":"Death drop ","minage":18,"waiting":60,"picture":null,"bestlike":5,"type":"Sensations"
  }, {
    "id":19,"name":"Moe\u0027s tunnel of shame \u0026 rejection","minage":4,"waiting":0,"picture":null,"bestlike":0,"type":"Humor"
  }, {
    "id":20,"name":"Radioactive man: the ride","minage":4,"waiting":30,"picture":null,"bestlike":3,"type":"Humor"
  }, {
    "id":21,"name":"The screamatorium of Dr Frightmarstein","minage":18,"waiting":45,"picture":null,"bestlike":5,"type":"Sensations"
  }, {
    "id":22,"name":"Get probed by Kang \u0026 Kodos","minage":6,"waiting":30,"picture":null,"bestlike":5,"type":"Sensations"
  }
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
