import { createWrapper } from 'next-redux-wrapper';
import { makeStore } from './store';

export const wrapper = createWrapper(makeStore, { debug: true });
