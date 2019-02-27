const en = require('./languages/en');

declare module 'MyTypes' {
  export type Locale = typeof en;
}
