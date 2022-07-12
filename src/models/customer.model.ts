import {Order} from './order.model'
import {Entity, hasMany, property, model} from '@loopback/repository';


@model({
  settings:{
      foreignkey: {
        fk_customer:{
          name: 'fk_customer',
          entity: 'Customer',
          entityKey: 'id',
          foreignKey: 'my_customer_id'
        }

      }

  }
})
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

  constructor(data?: Partial<Customer>) {
    super(data);
  }
  

  @hasMany(()=>Order,{keyTo: 'my_customer_id'})
  orders?: Order[];

}

export interface CustomerRelations{
  
}

export type CustomerWithRelations = Customer & CustomerRelations;
