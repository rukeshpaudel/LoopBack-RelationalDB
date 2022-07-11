import {post,param, requestBody} from '@loopback/rest'
import { Customer } from '../models'
import { Order } from '../models/order.model'
import { CustomerRepository } from '../repositories/customer.repository'
import { repository } from '@loopback/repository'

export class CustomerOrdersController {

    constructor(
        @repository(CustomerRepository)
        protected customerRepository: CustomerRepository,
    )
    {}

    @post('/customers/{id}/order')
    async createOrder(
        @param.path.number('id') customerId: typeof Customer.prototype.id,
        @requestBody() orderData: Order,
    ): Promise<Order>
    {
        return this.customerRepository.orders(customerId).create(orderData);
    }

}