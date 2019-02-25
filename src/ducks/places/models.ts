import { ImageSourcePropType } from 'react-native';
export interface Place {
  readonly id: string;
  readonly name: string;
  readonly image: ImageSourcePropType;
}

export type Places = ReadonlyArray<Place>;
