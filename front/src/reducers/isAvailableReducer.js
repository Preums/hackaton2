const initialAvailability = [];

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
