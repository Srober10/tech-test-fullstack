import { Cat, Customer } from 'src/app.service';

const DEFAULT_CAT_GREETING = 'your cat' as const;

const PRICE_TO_POUCHSIZE_MAP = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66,
  E: 69,
  F: 71.25,
} as const;

export const getCatsWithActiveSubscriptions = (cats: Cat[]) =>
  cats?.filter((cat) => cat.subscriptionActive === true);

export const formatCatNames = (catNames: Cat[]): string => {
  if (!catNames || catNames.find((cat) => cat.name === '')) {
    return DEFAULT_CAT_GREETING;
  }
  if (catNames.length === 1) {
    return catNames[0].name;
  }
  if (catNames.length === 2) {
    return `${catNames[0].name} and ${catNames[1].name}`;
  }
  if (catNames.length >= 3) {
    let nameString = catNames[0].name;
    for (let i = 1; i < catNames.length - 1; i++) {
      nameString += `, ${catNames[i].name}`;
    }
    nameString += ` and ${catNames[catNames.length - 1].name}`;
    return nameString;
  }
  return DEFAULT_CAT_GREETING; // default value in case of an error
};

export const hasFreeGift = (totalPrice: number): boolean => {
  return totalPrice > 120;
};

export const calculateTotalPrice = (customer: Customer): number => {
  const activeCats = getCatsWithActiveSubscriptions(customer.cats);
  const getCostOfCat = (cat: Cat) => {
    if (!cat || !PRICE_TO_POUCHSIZE_MAP[cat.pouchSize]) {
      throw Error(
        `Error - no price mapping for the pouchsize: ${cat.pouchSize}`,
      );
    }
    return PRICE_TO_POUCHSIZE_MAP[cat.pouchSize];
  };
  return activeCats.reduce((total, cat) => {
    return total + getCostOfCat(cat);
  }, 0);
};
