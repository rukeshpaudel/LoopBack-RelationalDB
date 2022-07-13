import {Users, UserRelations} from '../models';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {inject, Getter} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UserRelations
> {
  constructor(@inject('datasources.db') protected db: juggler.DataSource) {
    super(Users, db);
  }
}
