enum Render {
  Storybook, // 0
  App, // 1
  RNNTutorial, // 2

  RNNPlayground, // 3
}

interface Config {
  readonly selectWhatToRender: Render;
}

const config: Config = {
  selectWhatToRender: Render.App,
};

export default config;
