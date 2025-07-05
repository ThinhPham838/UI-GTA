import env from '@utils/env';
import { createBrowserHistory, History } from 'history';
const history = createBrowserHistory({ basename: env.appBaseName });

export default history as NonNullable<History>;
