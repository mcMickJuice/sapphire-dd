import { Test, Channel, State, OptimizationType } from './types'

const testData: Test[] = [
  {
    id: '12345',
    channels: [Channel.App],
    name: 'A/B Test One',
    description: 'First Test available',
    state: State.Live,
    treatments: [
      {
        id: 'treatment-1',
        name: 'Control 1',
        control: true
      },
      {
        id: 'treatment-2',
        name: 'Treatment 1',
        control: false
      },
      {
        id: 'treatment-3',
        name: 'Treatment 2',
        control: false
      }
    ],
    testType: OptimizationType.Test
  },
  {
    id: '6778',
    channels: [Channel.App],
    name: 'ShipIt Campaign',
    description: 'Campaign for shipit',
    state: State.Live,
    treatments: [],
    testType: OptimizationType.Campaign
  },
  {
    id: 'test-2',
    channels: [Channel.App],
    name: 'Second AB Test',
    description: 'AB test to test things',
    state: State.Live,
    treatments: [
      {
        id: 'treatment-4',
        name: 'Control 1',
        control: true
      },
      {
        id: 'treatment-5',
        name: 'Users A',
        control: false
      },
      {
        id: 'treatment-6',
        name: 'Users B',
        control: false
      }
    ],
    testType: OptimizationType.Test
  }
]

export async function getTestDataForSlice(
  nodeId: string,
  date: string
): Promise<Test[]> {
  return Promise.resolve(testData)
}
