import { Cat, Customer } from 'src/app.service';
import { formatCatNames, calculateTotalPrice } from './customerUtils';

describe('utils: customerUtils', () => {
  describe('formatCatNames - formats correctly', () => {
    test('customer has only one cat', () => {
      const customerWithOneCat: Cat[] = [
        {
          name: 'Dorian',
          subscriptionActive: true,
          breed: 'Thai',
          pouchSize: 'C',
        },
      ];

      const res = formatCatNames(customerWithOneCat);

      expect(res).toEqual('Dorian');
    });

    test('customer has exactly two cats', () => {
      const customerWithTwoCats: Cat[] = [
        {
          name: 'Dorian',
          subscriptionActive: true,
          breed: 'Thai',
          pouchSize: 'C',
        },
        {
          name: 'Ocie',
          subscriptionActive: true,
          breed: 'Somali',
          pouchSize: 'F',
        },
      ];

      const res = formatCatNames(customerWithTwoCats);

      expect(res).toEqual('Dorian and Ocie');
    });

    test('customer has three cats', () => {
      const customerWithThreeCats: Cat[] = [
        {
          name: 'Dorian',
          subscriptionActive: true,
          breed: 'Thai',
          pouchSize: 'C',
        },
        {
          name: 'Ocie',
          subscriptionActive: true,
          breed: 'Somali',
          pouchSize: 'F',
        },
        {
          name: 'Eldridge',
          subscriptionActive: false,
          breed: 'Himalayan',
          pouchSize: 'A',
        },
      ];

      const res = formatCatNames(customerWithThreeCats);

      expect(res).toEqual('Dorian, Ocie and Eldridge');
    });

    test('customer has MORE than three cats', () => {
      const customerWithFiveCats: Cat[] = [
        {
          name: 'Dorian',
          subscriptionActive: true,
          breed: 'Thai',
          pouchSize: 'C',
        },
        {
          name: 'Ocie',
          subscriptionActive: true,
          breed: 'Somali',
          pouchSize: 'F',
        },
        {
          name: 'Eldridge',
          subscriptionActive: false,
          breed: 'Himalayan',
          pouchSize: 'A',
        },
        {
          name: 'Christina',
          subscriptionActive: true,
          breed: 'Scottish Fold',
          pouchSize: 'D',
        },
        {
          name: 'Frederick',
          subscriptionActive: true,
          breed: 'Himalayan',
          pouchSize: 'C',
        },
      ];

      const res = formatCatNames(customerWithFiveCats);

      expect(res).toEqual('Dorian, Ocie, Eldridge, Christina and Frederick');
    });

    test('returns the default placeholder if there are no cats provided', () => {
      const res = formatCatNames([]);

      expect(res).toEqual('your cat');
    });

    test('returns the default placeholder if there are any cats who dont have a name inputted', () => {
      const dataInvalid: Cat[] = [
        {
          name: '',
          subscriptionActive: true,
          breed: 'Thai',
          pouchSize: 'C',
        },
        {
          name: 'Ocie',
          subscriptionActive: true,
          breed: 'Somali',
          pouchSize: 'F',
        },
      ];

      const res = formatCatNames(dataInvalid);

      expect(res).toEqual('your cat');
    });
  });

  describe('hasFreeGift', () => {});

  describe('calculateTotalPrice', () => {
    test('it calculates the correct price with a mix of cats with active and non-active subscription', () => {
      const customerWithThreeCats: Customer = {
        id: '11',
        firstName: '',
        lastName: '',
        email: '',
        cats: [
          {
            name: 'Dorian',
            subscriptionActive: true,
            breed: 'Thai',
            pouchSize: 'C',
          },
          {
            name: 'Ocie',
            subscriptionActive: true,
            breed: 'Somali',
            pouchSize: 'F',
          },
          {
            name: 'Eldridge',
            subscriptionActive: false,
            breed: 'Himalayan',
            pouchSize: 'A',
          },
        ],
      };

      const rest = calculateTotalPrice(customerWithThreeCats);
      expect(rest).toEqual(134);
    });
  });
});
