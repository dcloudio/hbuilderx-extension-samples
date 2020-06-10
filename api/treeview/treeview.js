let hx = require('hbuilderx');

class DemoTreeDataProvider {
  constructor() {
    this._demoData = [{
        name: "Root1",
        children: [{
            name: "child1"
          },
          {
            name: "child2"
          }
        ]
      },
      {
        name: "Root2",
        children: [{
            name: "child3",
          },
          {
            name: "child4"
          }
        ]
      }
    ];
  }
  getChildren(element) {
    let demoData = this._demoData;
    return new Promise(resolve => {
      if (!element) {
        resolve(demoData);
      } else {
        resolve(element.children);
      }
    });
  }

  getTreeItem(element) {
    return {
      label: element.name,
      collapsibleState: element.children ? 1 : 0,
      command: {
        command: element.children ? "" : "extension.helloWorld",
        arguments: [
          element.name
        ]
      }
    }
  }
}

module.exports = {
	DemoTreeDataProvider
};