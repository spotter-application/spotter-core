export type SpotterActionId = string

export type SpotterAction = () => void

export interface SpotterOption {
  title: string,
  subtitle: string,
  image: string,
  action: SpotterAction;
}

export interface SystemApplication {
  title: string,
  path: string,
  icon: string,
}

export interface SystemApplicationDimensions {
  appName: string,
  x: number,
  y: number,
  width: number,
  height: number,
}

export abstract class SpotterPlugin {

  abstract query(query: string): SpotterOption[]

}

export abstract class SpotterApi {

  abstract shellCommand(command: string): void

  abstract getAllApplications(): Promise<SystemApplication[]>

  abstract openApplication(path: string): void

  abstract setDimensions(appName: string, x: number, y: number, width: number, height: number): void

  abstract getAllDimensions(): Promise<SystemApplicationDimensions[]>

}
