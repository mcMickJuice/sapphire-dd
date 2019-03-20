import React from 'react'
import { Select, MenuItem } from '@material-ui/core'
import { OptimizationType } from './types'

interface State {
  selectedTestType: OptimizationType | null
  selectedTestId?: string
  selectedTreatmentId?: string | undefined
}

const defaultState: State = {
  selectedTestType: null
}

type Action = Initialize | TestTypeSelected | TestSelected | TreatmentSelected

interface Initialize {
  type: 'initialize'
  initialState: State
}

interface TestTypeSelected {
  type: 'selectTestType'
  testType: OptimizationType | null
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

const SapphireSelect = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState)

  function handleTestTypeChange({
    target: { value }
  }: {
    target: { value: OptimizationType | null }
  }) {
    dispatch({
      type: 'selectTestType',
      testType: value
    })
  }

  const { selectedTestType } = state

  return (
    <div>
      <Select
        fullWidth
        variant="outlined"
        value={selectedTestType || ''}
        onChange={handleTestTypeChange}
      >
        <MenuItem value={''}>None Selected</MenuItem>
        <MenuItem value={OptimizationType.Test}>A/B Test</MenuItem>
        <MenuItem value={OptimizationType.Campaign}>Campaign</MenuItem>
      </Select>
      {}
    </div>
  )
}

export default SapphireSelect
