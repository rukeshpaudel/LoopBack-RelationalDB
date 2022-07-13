import { Entity,property,model } from "@loopback/repository";

@model({
    name: 'users',
})

export class Users extends Entity{
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
    
      constructor(data?: Partial<Users>) {
        super(data);
      }

}

export interface UserRelations{}

export type UserWithRelations = Users & UserRelations