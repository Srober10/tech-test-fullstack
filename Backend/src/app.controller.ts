import { Controller, Get, Param } from '@nestjs/common';
import { AppService, NextDeliveryInfo } from './app.service';

// empty parameter in controller here means this is the base url
// e.g '/'
@Controller('comms/your-next-delivery')
export class AppController {
  constructor(private readonly appService: AppService) {} // injects AppService

  @Get(':id')
  findOne(@Param('id') id: string): NextDeliveryInfo | undefined {
    console.log('id passedin: ', id);
    const customer: NextDeliveryInfo | undefined =
      this.appService.findCustomer(id);
    if (!customer) {
      console.log(`can't find customer with id ${id}`);
      return undefined;
    }

    console.log('transformed data', customer);

    return customer;
  }
}

