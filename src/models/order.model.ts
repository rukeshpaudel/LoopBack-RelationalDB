import { belongsTo, Entity, model, property  } from "@loopback/repository";
import { Customer, CustomerWithRelations } from "./customer.model";

@model()
export class Order extends Entity
{
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

      @property({
        type: 'number',
      })
      my_customer_id: number; //foreign key


      @belongsTo(()=>Customer,{name: 'customer'})
      customerId: number

      constructor(data?: Partial<Order>)
      {
        super(data);
      }
}

export interface OrderRelations{
    customer?: CustomerWithRelations;
}

export type OrderWithRelations = Order & OrderRelations;