import { Entity,property,model } from "@loopback/repository";

@model({
    name: 'users',
})

export class User extends Entity{
    @property({
        type: 'number',
        id: true,
        generated: false,
        required: true
    })
    id: number

    @property({
        type: 'string',
        required: true,
        postgresql: {
          columnName: 'username',
          dataType: 'VARCHAR',
          dataLength: 20,
        },
      })
      username: string;
    
      @property({
        type: 'string',
        postgresql: {
          columnName: 'password',
          dataType: 'VARCHAR',
          dataLength: 20,
        },
      })
      password: string;
    
      @property({
        type: 'string',
        postgresql: {
          columnName: 'email',
          dataType: 'VARCHAR',
          dataLength: 20,
        },
      })
      email: string;
    
      constructor(data?: Partial<User>) {
        super(data);
      }

}

export interface UserRelations{}

export type UserWithRelations = User & UserRelations