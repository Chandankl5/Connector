import { addConnector } from '../Context/index'

const Query = (key) => {
  const connector = (target, context) => {
    let query = key ? context.query[key] : context.query ;
    target.query = context.query
  }

  addConnector(connector);

}

export default Query;