import { en } from './languages/en';

declare module 'MyTypes' {
  export type Locale = typeof en;
}
