import Root from "./components"

const materialUi = {
  name: "material-ui",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(signUpHandler);
        libraries.source.handlers.push(materialDemoHandler);
        libraries.source.handlers.push(materialTabsHandler);
      },
    },
  },
}

export default materialUi

const signUpHandler = {
  pattern: "/sign-up/",
  func: ({ state }) => {
    state.source.data["/sign-up/"].isSignUp = true;
  }
}
const materialDemoHandler = {
  pattern: "/material-demo/",
  func: ({ state }) => {
    state.source.data["/material-demo/"].isMaterialDemo = true;
  }
}
const materialTabsHandler = {
  pattern: "/material-tabs/",
  func: ({ state }) => {
    state.source.data["/material-tabs/"].isMaterialTabs = true;
  }
}