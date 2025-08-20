// types/global.d.ts
import * as lodash from 'lodash';

declare global {
  interface Window {
    _: typeof lodash;
  }
  
  // Node.js 환경을 위한 global 객체
  namespace NodeJS {
    interface Global {
      _: typeof lodash;
    }
  }
}

export { };

