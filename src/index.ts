export type SpotterActionId = string;

export interface SpotterAction {
  id?: string,
  key: string,
  title: string,
  subtitle: string,
  image: string,
}

export declare interface SpotterPlugin {

  actions: SpotterAction[];

  onSelectAction(action: SpotterAction): void;

}

export abstract class SpotterApi {

  abstract shellCommand(command: string): void

}
