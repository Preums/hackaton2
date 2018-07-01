const initialFiltersState = {
  Adult: false,
  Sensations: true,
  Humor: true,
  Romantic: true,
  Waiting: 60,
  Popularity: 0,
};

const filters = (state = initialFiltersState, action) => {
  const FiltersList = { ...state };
  switch (action.type) {
    case 'ADULT_TOGGLE':
      FiltersList.Adult = !FiltersList.Adult;
      return FiltersList;

    case 'SENSATIONS_TOGGLE':
      FiltersList.Sensations = !FiltersList.Sensations;
      return FiltersList;

    case 'HUMOR_TOGGLE':
      FiltersList.Humor = !FiltersList.Humor;
      return FiltersList;

    case 'ROMANTIC_TOGGLE':
      FiltersList.Romantic = !FiltersList.Romantic;
      return FiltersList;

    case 'WAITING':
      FiltersList.Waiting = action.waiting;
      return FiltersList;

    case 'SET_POPULARITY':
      FiltersList.Popularity = action.popularity;
      return FiltersList;

    case 'SET_WAITING':
      FiltersList.Waiting = action.waiting;
      return FiltersList;

    default:
      return state;
  }
};

export default filters;
