import {asProvider, inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: process.env.DB_HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  min:5,
  max:200,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 0,
  ssl: false
};

@lifeCycleObserver('datasource')
export class CustomerDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'customer';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.customer', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
