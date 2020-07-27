export type SpotterActionId = string;

export interface SpotterAction {
  id?: string,
  key: string,
  title: string,
  subtitle: string,
  image: string,
}

export abstract class SpotterPlugin {

  abstract get actions(): SpotterAction[];

  abstract onSelectAction(action: SpotterAction): void;

}

export abstract class SpotterApi {

  abstract shellCommand(command: string): void

}
