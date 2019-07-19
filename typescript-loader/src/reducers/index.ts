import { repositoriesReducer } from './repositories';
import { combineReducers } from 'redux'
import { RepositoryEntity } from '../model';

export interface State {
  repositories: RepositoryEntity[]
}

export const state = combineReducers<State>({ //对内部属性的约束,repositoriesReducer的返回
  repositories: repositoriesReducer
})