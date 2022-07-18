import {Entity, model, property} from '@loopback/repository';

@model({name: 'users'} )
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    required: false,
    index: {"unique":true },
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
    },
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    index: {"unique":true },
    postgresql: {
      columnName: 'email',
      dataType: 'VARCHAR',
    },
  })
  email: string;

  @property({
    type: 'string',
    //required: true,
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
