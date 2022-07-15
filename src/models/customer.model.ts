import {Order} from './order.model';
import {Entity, hasMany, property, model} from '@loopback/repository';

@model({
  name: 'customers',
})
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
    postgresql: {
      columnName: 'id',
      dataType: 'VARCHAR',
    },
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'username',
      dataType: 'VARCHAR',
      min: 5
    },
  })
  username: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'password',
      min: 8
    },
  })
  password: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'email',
      dataType: 'VARCHAR',
    },
  })
  email: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }

  @hasMany(() => Order, {keyTo: 'my_customer_id'})
  orders?: Order[];
}

export interface CustomerRelations {}

export type CustomerWithRelations = Customer & CustomerRelations;
