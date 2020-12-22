import { createAction, props } from '@ngrx/store';

export const bookUpdated = createAction(
    '[Books API] Book Updated Success',
    props<{book: any}>()
);

export const bookDeleted = createAction(
   '[Books API] Book Deleted Success',
   props<{bookId: string}>()
);
