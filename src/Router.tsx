import React from 'react'
import { List, ListItem } from '@material-ui/core'
import TestSelect from './TestSelect'
import SapphireControl from './SapphireControl'
import { OptimizationType } from './types'

enum RouteState {
  Initial = 'Initial',
  NoTests = 'NoTests',
  Tests = 'Tests',
  Disabled = 'Disabled'
}

const Route = ({ routeState }: { routeState: RouteState }) => {
  switch (routeState) {
    case RouteState.Initial:
      return <div>Select an option to left to view dropdowns</div>
    case RouteState.NoTests:
      return <SapphireControl key="1" nodeId="no tests" date="2018-01-01" />
    case RouteState.Tests:
      return <SapphireControl key="2" nodeId="55b0t" date="2018-01-01" />
    case RouteState.Disabled:
      return (
        <SapphireControl
          key="3"
          nodeId="55b0t"
          date="2018-01-01"
          testType={OptimizationType.Test}
          testId="12345"
          treatmentId="treatment-2"
        />
      )
    default:
      throw new Error('Unhandled RouteState')
  }
}

const Router = () => {
  const [routeState, updateRouteState] = React.useState<RouteState>(
    RouteState.Initial
  )
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div style={{ width: '250px' }}>
        <h3>Toggle between states</h3>
        <List>
          <ListItem
            selected={routeState === RouteState.NoTests}
            onClick={() => updateRouteState(RouteState.NoTests)}
          >
            No Tests
          </ListItem>
          <ListItem
            selected={routeState === RouteState.Tests}
            onClick={() => updateRouteState(RouteState.Tests)}
          >
            Tests
          </ListItem>
          <ListItem
            selected={routeState === RouteState.Disabled}
            onClick={() => updateRouteState(RouteState.Disabled)}
          >
            Tests Already Selected
          </ListItem>
        </List>
      </div>
      <div style={{ width: '500px', marginLeft: '24px' }}>
        <h3>Click through inputs</h3>
        <Route routeState={routeState} />
      </div>
    </div>
  )
}

export default Router
