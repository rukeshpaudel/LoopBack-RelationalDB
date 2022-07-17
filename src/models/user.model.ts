import {Entity, model, property} from '@loopback/repository';

@model({name: 'users'} )
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    postgresql: {
      columnName: 'id',
      dataType: 'VARCHAR',
    },
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'email',
      dataType: 'VARCHAR',
    },
  })
  email: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'password',
      dataType: 'VARCHAR',
    },
  })
  password: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
  

}

export type UsersWithRelations = User & UserRelations;
