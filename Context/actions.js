export const setContextAction = (context, setContext) => {
  setContext(context);
}

export const addTargetByRouteAction = (route, target, addTargetByRoute) => {
  addTargetByRoute(route, target);
}

export const addConnectorAction = (connector, addConnector) => {
  addConnector(connector);
}

export const provideContextAction = (provideContext) => {
  provideContext();
}