import {authenticate, TokenService, UserService} from '@loopback/authentication'
import {inject} from '@loopback/core';
import{model, property} from '@loopback/repository'
import{get, post, requestBody, SchemaObject} from '@loopback/rest'
import {SecurityBindings, securityId, UserProfile} from '@loopback/security'
import {genSalt, hash} from 'bcryptjs'
import {RefreshTokenServiceBindings} from '../keys'
import { TokenObject, RefreshTokenService } from '../types';
import { UserRepository } from '../repositories';
import { Credentials } from '../services/user.service';