// function Context() {
//   this.context = {},
//   this.context_map = {},
//   this.connectors = []
// }

// Context.prototype.addConnector = function(connector) {
//   console.log(this)
//   this.connectors.push(connector);
// }

// Context.prototype.addTargetByRoute = function(route, target) {
//   let target_obj = { target, connectors: this.connectors };

//   try {
//     this.context_map[route].push(target_obj);
//   }
//   catch(err) {
//     this.context_map[route] = [target_obj];
//   }

//   this.connectors = [];

// }

// Context.prototype.setContext = function(context) {
//   this.context = context;
// }

// Context.prototype.provideContext = function() {
//   const { route } = this.context;

//   let current_route_targets = this.context_map[route];

//   current_route_targets.forEach(({target, connectors}) => {
//     connectors.forEach((connector) => connector(target, this.context))
//   })

// }

class Context {
  constructor() {
    this.context = {},
    this.context_map = {},
    this.connectors = []
  }

  addConnector = (connector) => {
    this.connectors.push(connector);
  } 
  
  addTargetByRoute = (route, target) => {
    // console.log('route', route, 'target', target)
    let target_obj = { target, connectors: this.connectors };

    try {
      this.context_map[route].push(target_obj);
    }
    catch(err) {
      this.context_map[route] = [target_obj];
    }

    // console.log('Map', this.context_map)
  
    this.connectors = [];
  
  }

  setContext = (context) => {
    // console.log('context', context)
    this.context = context;
  }

  provideContext = () => {
    const { path } = this.context;
    let current_route_targets = this.context_map[path];
    current_route_targets.forEach(({target, connectors}) => {
      connectors.forEach((connector) => connector(target, this.context))
    })
  
  }

}

export default Context;

