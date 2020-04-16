import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getProduct() {
    return [
      { id: 1, name: 'One Plus 7 Pro', mfd: new Date('1-Jan-2019'), price: 500 },
      { id: 2, name: 'IPhone 11 Pro', mfd: new Date('1-Mar-2019'), price: 1000 },
      { id: 3, name: 'Pixel 3', mfd: new Date('1-Dec-2019'), price: 700 }
    ];
  }
}
