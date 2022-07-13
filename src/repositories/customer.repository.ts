import { Customer, CustomerRelations } from '../models';
import { Order } from '../models/';
import {OrderRepository} from '../repositories';
import{
    DefaultCrudRepository,
    juggler,
    HasManyRepositoryFactory,
    repository
} from '@loopback/repository';
import {inject, Getter} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
    Customer,
    typeof Customer.prototype.id,
    CustomerRelations
    > {
        public readonly orders: HasManyRepositoryFactory<
        Order,
        typeof Customer.prototype.id
        >;
    
    constructor(
        @inject('datasources.db') protected db: juggler.DataSource,
        @repository.getter('OrderRepository')
        orderRepositoryGetter: Getter<OrderRepository>
    )
    {
        super(Customer, db)
        this.orders = this.createHasManyRepositoryFactoryFor(
            'orders',
            orderRepositoryGetter
       )
    }
}
