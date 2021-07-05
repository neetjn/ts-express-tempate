import { IApiRootDto } from './apiroot';
import { ITodo } from '../models/todo';

export type ITodoDto = ITodo & IApiRootDto;
export type ITodoCollectionDto = {
  items: Array<ITodoDto>,
} & IApiRootDto;

