import {authenticate, TokenService} from '@loopback/authentication';
import {
  Credentials,
  MyUserService,
  TokenServiceBindings,
  User,
  UserRepository,
  UserServiceBindings,
} from '@loopback/authentication-jwt';
import {inject} from '@loopback/core';
import {model, property, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  post,
  requestBody,
  SchemaObject,
} from '@loopback/rest';
import {SecurityBindings, securityId, UserProfile} from '@loopback/security';
import {genSalt, hash} from 'bcryptjs';
import _ from 'lodash';

export class NewUserRequest extends User {
@property({
    type:'string',
    required: true,
})
password: string;

}

const CredentialsSchema: SchemaObject= {
    type:'object',
    required:['email', 'password'],
    postgres:{
        email:{
            type: 'string',
            format: 'email'
        },
        password:{
            type: 'string',
            minLength: 8,
        }
    }
}

export const CredentialsRequestBody={
    required: true,
    content:{
        'application/json':{schema: CredentialsSchema}
    }
}

export class UserController {
    constructor(
      @inject(TokenServiceBindings.TOKEN_SERVICE)
      public jwtService: TokenService,
      @inject(UserServiceBindings.USER_SERVICE)
      public userService: MyUserService,
      @inject(SecurityBindings.USER, {optional: true})
      public user: UserProfile,
      @inject(UserServiceBindings.USER_REPOSITORY)
      protected userRepository: UserRepository
    ) {}

    // @post('/users/login', {
    //     responses: {
    //       '200': {
    //         description: 'Token',
    //         content: {
    //           'application/json': {
    //             schema: {
    //               type: 'object',
    //               properties: {
    //                 token: {
    //                   type: 'string',
    //                 },
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   })
      @post('/signup', {
        responses: {
          '200': {
            description: 'User',
          },
        },
      })
      async signUp(
        @requestBody({
          content: {
            'application/json': {
              schema: getModelSchemaRef(NewUserRequest, {
                title: 'NewUser',
              }),
            },
          },
        })
        
        newUserRequest: NewUserRequest,
      ): Promise<User> {
        const password = await hash(newUserRequest.password, await genSalt());
        
        
        const savedUser = await this.userRepository.create(
          _.omit(newUserRequest, 'password'),
          );
          
          await this.userRepository.userCredentials(savedUser.id).create({password});
          console.log(password);
    
        return savedUser;
            // @post('/users/signup')
            // async createUser()

  }
}