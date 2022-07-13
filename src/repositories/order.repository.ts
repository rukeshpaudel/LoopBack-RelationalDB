import { Order, OrderRelations } from '../models';
import {CustomerRepository} from '../repositories';
import{
    DefaultCrudRepository,
    juggler,
    HasManyRepositoryFactory,
    repository
} from '@loopback/repository';
import {inject, Getter} from '@loopback/core';

export class OrderRepository extends DefaultCrudRepository<
    Order,
    typeof Order.prototype.id,
    OrderRelations
    > {
       // public readonly orders: HasManyRepositoryFactory<
        //Order,
        //typeof Order.prototype.id
       // >
    
    constructor(
        @inject('datasources.db') protected db: juggler.DataSource,
        //@repository.getter('OrderRepository')
        //orderRepositoryGetter: Getter<OrderRepository>
    )
    {
        super(Order, db)
        // this.orders = this.createHasManyRepositoryFactoryFor(
        //     'orders',
        //     orderRepositoryGetter
        // )
    }
}