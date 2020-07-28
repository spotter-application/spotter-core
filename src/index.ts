export type SpotterActionId = string

export type SpotterAction = () => void

export interface SpotterOption {
  title: string,
  subtitle: string,
  image: string,
  action: SpotterAction;
  shortKey: string,
}

export interface SystemApplication {
  title: string,
  path: string,
  icon: string,
}

export abstract class SpotterPlugin {

  abstract query(query: string): SpotterAction[]

}

export abstract class SpotterApi {

  abstract shellCommand(command: string): void

  abstract getAllSystemApplications(): SystemApplication[]

}
