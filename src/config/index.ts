enum Render {
  StoryBook, // 0
  ReactNativeNavigation, // 1
  App, // 2
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
