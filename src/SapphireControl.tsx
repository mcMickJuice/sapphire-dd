import React from 'react'
import { Test, TargettedContentType } from './types'
import { getTestDataForSlice } from './sapphire_service'
import TestSelect from './TestSelect'

interface Props {
  nodeId: string
  date: string
  testType?: TargettedContentType
  testId?: string
  treatmentId?: string
}

const SapphireControl = ({
  nodeId,
  date,
  testType,
  testId,
  treatmentId
}: Props) => {
  const [isLoading, updateIsLoading] = React.useState(false)
  const [tests, updateTests] = React.useState<Test[]>([])

  React.useEffect(() => {
    updateIsLoading(true)
    getTestDataForSlice(nodeId, date)
      .then(tests => updateTests(tests))
      .then(() => updateIsLoading(false))
  }, [nodeId, date])

  if (isLoading) {
    return <div>Test data is loading</div>
  } else if (tests.length === 0) {
    return <div>No Tests for this Page Slice</div>
  } else {
    return (
      <TestSelect
        availableTests={tests}
        initialTestType={testType}
        initialTestId={testId}
        initialTreatmentId={treatmentId}
      />
    )
  }
}

export default SapphireControl
