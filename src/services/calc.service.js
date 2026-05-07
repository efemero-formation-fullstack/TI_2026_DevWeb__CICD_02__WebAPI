export const calcService = {
  add: (nb1, nb2) => {
    const res = nb1 + nb2;
    const precision = 100;

    return Math.round(res * precision) / precision;
  },

  isEven: (nb) => {
    return nb % 2 === 0;
  },
};

export default calcService;
