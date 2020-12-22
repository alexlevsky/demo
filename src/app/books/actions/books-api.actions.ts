import { createAction, props } from '@ngrx/store';

export const createBook = createAction(
      '[Books Page] Create a book',
      props<{name: any}>()
  );

export const selectBook = createAction(
      '[Books Page] Select a book',
      props<{bookId: string}>()
  );
