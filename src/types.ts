export enum Channel {
  MWeb = 'MWEB',
  Web = 'WEB',
  App = 'APPS'
}

export enum State {
  Live = 'LIVE'
}

export enum OptimizationType {
  Test = 'test',
  Campaign = 'campaign'
}

export interface Treatment {
  id: string
  name: string
  control: boolean
}

export interface Test {
  id: string
  channels: Channel[]
  name: string
  description: string
  state: State
  treatments: Treatment[]
  testType: OptimizationType
}

export enum NoTestType {
  NoTest = 'NoTest'
}

export type TargettedContentType = NoTestType | OptimizationType
