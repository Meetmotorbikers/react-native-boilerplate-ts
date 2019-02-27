import Navigation from 'src/services/navigation';
import * as navigationRoot from './navigation-root';
import * as screens from './screens';

export {
  pushSingleScreenApp,
  pushTabBasedApp,
  startMainTabs,
  goHome,
  goToAuth,
} from './navigation';
export { registerScreens } from './register-screens';
export { screens, navigationRoot, Navigation };
