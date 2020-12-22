import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from '../actions';

export interface State {
    name: string;
}

export const initialState: State = {
    name: 'default'
  };

const scoreboardReducer = createReducer( initialState,
    on(BookActions.BooksApiActions.createBook, (state, { name }) => ({ ...state, name })),
    on(BookActions.BooksApiActions.selectBook, state => ({ ...state, name: 'www' })),
    on(BookActions.BooksPageActions.bookUpdated, state => ({ name: 'ttt' })),
    on(BookActions.BooksPageActions.bookDeleted, (state) => ({ ...state}))
);

// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
}
