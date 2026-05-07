export const calcService = {
  add: (nb1: number, nb2: number): number => {
    const res = nb1 + nb2;
    const precision = 100;

    return Math.round(res * precision) / precision;
  },

  isEven: (nb: number): boolean => {
    return nb % 2 === 0;
  },
};

export default calcService;
