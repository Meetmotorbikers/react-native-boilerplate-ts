enum Render {
  Storybook, // 0
  App, // 1
  RNNTutorial, // 2

  RNNPlayground, // 3
}

interface Config {
  readonly shouldDisplayStorybook: boolean;
  readonly selectWhatToRender: Render;
}

const config: Config = {
  shouldDisplayStorybook: true,

  selectWhatToRender: Render.App,
};

export default config;
