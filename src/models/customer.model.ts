import {Order} from './order.model'
import {Entity, hasMany, property, model} from '@loopback/repository';


@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

 

  @hasMany(()=>Order,{keyTo: 'my_customer_id'})
  orders?: Order[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations{
  
}

export type CustomerWithRelations = Customer & CustomerRelations;
