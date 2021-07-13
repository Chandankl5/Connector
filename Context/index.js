import  Context from './context'
import { setContextAction, addTargetByRouteAction, addConnectorAction, provideContextAction } from './actions'

let context_obj = new Context()

const setContextWrapper = (context) => {
  setContextAction(context, context_obj.setContext);
}

const addTargetByRouteWrapper = (route, target) => {
  addTargetByRouteAction(route, target, context_obj.addTargetByRoute);
}

const addConnectorWrapper = (connector) => {
  addConnectorAction(connector, context_obj.addConnector);
}

const provideContextWrapper = () => {
  provideContextAction(context_obj.provideContext);
}

export { setContextWrapper as setContext, addTargetByRouteWrapper as addTargetByRoute, 
  addConnectorWrapper as addConnector, provideContextWrapper as provideContext }