import {asProvider, inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  // url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'ruke$#p@udel',
  database: 'test',
};

@lifeCycleObserver('datasource')
export class CustomerDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
