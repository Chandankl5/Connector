import { addTargetByRoute } from '../Context/index'

const Get = (route) => {
  return (target) => {
    addTargetByRoute(route, target);
  }
}

export default Get;