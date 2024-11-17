import { Injectable } from '@nestjs/common';
import data from '../data.json';
import {
  calculateTotalPrice,
  formatCatNames,
  getCatsWithActiveSubscriptions,
} from './utils/customerUtils';

export interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
}

export interface NextDeliveryInfo {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
}
const customerArray = data as Customer[]; // note - using 'as' here to avoid the complaint with Union type vs string for pouchsize

const transformUserData = (customer: Customer): NextDeliveryInfo => {
  if (
    !customer.cats ||
    getCatsWithActiveSubscriptions(customer.cats).length === 0
  ) {
    return {
      title: `You do not appear to have any active subscriptions!`,
      message: `Check out our prices at the links below.`,
      totalPrice: 0,
      freeGift: false,
    };
  }

  const catNames = formatCatNames(
    getCatsWithActiveSubscriptions(customer.cats),
  );
  return {
    title: `Your next delivery for ${catNames}`,
    message: `Hey ${customer.firstName}! In two days' time, we'll be charging you for your next order for ${catNames}'s fresh food.`,
    totalPrice: calculateTotalPrice(customer),
    freeGift: calculateTotalPrice(customer) > 120,
  };
};

@Injectable()
export class AppService {
  findCustomer(id: string): NextDeliveryInfo | undefined {
    console.log('data is at index 0?', customerArray[0]);

    const customer = customerArray?.find((d: Customer) => d.id === id);
    if (!customer) {
      return undefined;
    }
    return transformUserData(customer);
  }
}

