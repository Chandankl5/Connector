import { setContext, provideContext } from '../Context/index'

const requestParser = (req, res, next) => {
  setContext(req);
  provideContext();
  next();
}

export default requestParser;