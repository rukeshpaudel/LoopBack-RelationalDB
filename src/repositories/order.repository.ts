import {Customer, CustomerRelations} from '../models'
// import {DbDataSource} from '../datasources'
import{
    DefaultCrudRepository,
    juggler,
    repository
} from '@loopback/repository'

import {inject, Getter} from '@loopback/core';
import { Order, OrderRelations } from "../models/order.model";
import { CustomerRepository } from '.';

export class OrderRepository extends DefaultCrudRepository<
    Order,
    OrderRelations>
    {
        constructor(
            @inject('datasources.db') protected db: juggler.DataSource,
        )
    {
        super(Order, db)
        
    }
}