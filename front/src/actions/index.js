export const isAvailable = dbResponse => ({
  type: 'IS_AVAILABLE',
  dbResponse,
});

export const availabilityFailure = () => ({
  type: 'AVAILABILITY_FAILURE',
  message: 'Identification invalide',
});

export function checkAvailability(adult, sensations, humor, romantic, waitingTime, popularity) {
  return (dispatch) => {
    fetch(
      '/isAvailable',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          mode: 'no-cors',
        }),
        body: JSON.stringify({
          adult,
          sensations,
          humor,
          romantic,
          waitingTime,
          popularity,
        }),
      },
    )
      .then(res => res.json())
      .then((res) => {
        if (res.failure !== '') {
          dispatch(isAvailable(res));
        } else {
          dispatch(availabilityFailure());
        }
      });
  };
}
