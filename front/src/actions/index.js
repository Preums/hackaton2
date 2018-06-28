export const isAvailable = (dbResponse) => ({
	type: 'IS_AVAILABLE',
	...dbResponse
});

export const availabilityFailure = () => ({
	type: 'AVAILABILITY_FAILURE',
	message: 'Identification invalide'
});

export function checkAvailability( adult, sensation, humor, romantic, waitingTime, popularity) {
	return (dispatch) => {

		fetch("/isAvailable",
			{
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({
          adult: adult,
          sensations: sensations,
          humor: humor,
          romantic: romantic,
          waitingTime: waitingTime,
          popularity: popularity,
        }),
			})
			.then((res) => res.json())
			.then(
				res => {
					if (res.failure !=='') {
						dispatch(isAvailable(res))
					}
					else {
						dispatch(availabilityFailure(res.failure))
					}
				}
			);
	}
}