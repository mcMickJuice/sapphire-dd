import React from 'react'
import { MenuItem } from '@material-ui/core'
import {
  OptimizationType,
  Test,
  TargettedContentType,
  NoTestType
} from './types'
import OutlinedSelect from './OutlinedSelect'

interface State {
  selectedTestType: TargettedContentType
  selectedTestId?: string
  selectedTreatmentId?: string | undefined
}

const defaultState: State = {
  selectedTestType: NoTestType.NoTest
}

type Action = Initialize | TestTypeSelected | TestSelected | TreatmentSelected

interface Initialize {
  type: 'initialize'
  initialState: State
}

interface TestTypeSelected {
  type: 'selectTestType'
  testType: TargettedContentType
}

interface TestSelected {
  type: 'selectTest'
  testId: string
}

interface TreatmentSelected {
  type: 'selectTreatment'
  treatmentId: string
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'initialize': {
      return action.initialState
    }
    case 'selectTest': {
      return {
        ...state,
        selectedTestId: action.testId,
        treatmentId: undefined
      }
    }
    case 'selectTestType': {
      return {
        selectedTestType: action.testType,
        selectedTestId: undefined,
        selectedTreatmentId: undefined
      }
    }
    case 'selectTreatment': {
      return {
        ...state,
        selectedTreatmentId: action.treatmentId
      }
    }
    default:
      return state
  }
}

interface Props {
  availableTests: Test[]
  initialTestType?: TargettedContentType
  initialTestId?: string
  initialTreatmentId?: string
}

const TestSelect = ({
  availableTests,
  initialTestType,
  initialTestId,
  initialTreatmentId
}: Props) => {
  const [state, dispatch] = React.useReducer(reducer, {
    selectedTestType: initialTestType || NoTestType.NoTest,
    selectedTestId: initialTestId,
    selectedTreatmentId: initialTreatmentId
  })

  function handleTestTypeChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const value = evt.target.value

    dispatch({
      type: 'selectTestType',
      testType: value as TargettedContentType
    })
  }

  function handleTestChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const value = evt.target.value

    dispatch({
      type: 'selectTest',
      testId: value
    })
  }

  function handleTreatmentChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const value = evt.target.value

    dispatch({
      type: 'selectTreatment',
      treatmentId: value
    })
  }

  const { selectedTestType, selectedTestId, selectedTreatmentId } = state

  const selectedTest =
    selectedTestId != null
      ? availableTests.find(t => t.id === selectedTestId)
      : undefined

  return (
    <div>
      <div>
        <OutlinedSelect
          name="test-type"
          label="Test Type"
          value={selectedTestType || ''}
          onChange={handleTestTypeChange}
        >
          <MenuItem value={NoTestType.NoTest}>No Targetted Content</MenuItem>
          <MenuItem value={OptimizationType.Test}>A/B Test</MenuItem>
          <MenuItem value={OptimizationType.Campaign}>Campaign</MenuItem>
        </OutlinedSelect>

        {selectedTestType != NoTestType.NoTest ? (
          <div style={{ marginTop: '16px' }}>
            <OutlinedSelect
              name="test-select"
              label="Select a Test"
              onChange={handleTestChange}
              value={selectedTestId || ''}
            >
              {availableTests
                .filter(t => t.testType === selectedTestType)
                .map(t => (
                  <MenuItem key={t.id} value={t.id}>
                    {t.name}
                  </MenuItem>
                ))}
            </OutlinedSelect>
          </div>
        ) : null}
        {selectedTest != null && selectedTestType === OptimizationType.Test ? (
          <div style={{ marginTop: '16px' }}>
            <OutlinedSelect
              name="treatment-select"
              label="Select a Treatment"
              onChange={handleTreatmentChange}
              value={selectedTreatmentId || ''}
            >
              {selectedTest.treatments.map(t => (
                <MenuItem key={t.id} value={t.id}>
                  {t.name}
                </MenuItem>
              ))}
            </OutlinedSelect>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TestSelect
