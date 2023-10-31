import { Random } from 'random-js';

const inRange = (num: number, min: number, max: number) => {
  return num >= min && num <= max;
};

export const addRandomStrength = (keywords: string[]) => {
  const random = new Random();

  const strongKeywords = keywords.map((k) => {
    const r = random.integer(0, 100);

    if (inRange(r, 0, 1)) return `(((${k})))`;
    if (inRange(r, 0, 5)) return `((${k}))`;
    if (inRange(r, 0, 15)) return `(${k})`;
    return k;
  });

  return strongKeywords;
};
