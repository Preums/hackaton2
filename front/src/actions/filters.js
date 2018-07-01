export const adultToggle = () => ({
  type: 'ADULT_TOGGLE',
});

export const sensationsToggle = () => ({
  type: 'SENSATIONS_TOGGLE',
});

export const humorToggle = () => ({
  type: 'HUMOR_TOGGLE',
});

export const romanticToggle = () => ({
  type: 'ROMANTIC_TOGGLE',
});

export function filtersToggler(type) {
  switch (type) {
    case 'isAdult':
      return adultToggle();
    case 'Sensations':
      return sensationsToggle();
    case 'Humor':
      return humorToggle();
    case 'Romantic':
      return romanticToggle();
    default:
      return console.log('type unavailable');
  }
}

export const setPopularity = popularity => ({
  type: 'SET_POPULARITY',
  popularity,
});

export const setWaiting = waiting => ({
  type: 'SET_WAITING',
  waiting,
});
