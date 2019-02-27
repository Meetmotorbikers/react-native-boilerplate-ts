enum Render {
  Storybook, // 0
  App, // 1
  RNNTutorial, // 2

  RNNPlayground, // 3
}

interface Config {
  readonly selectWhatToRender: Render;
  readonly USER_KEY: string;
}

const config: Config = {
  selectWhatToRender: Render.App,
  USER_KEY: 'USER_KEY',
};

export default config;
