import React from 'react'
import { useGlobalState, useObserver } from 'dop-react'
import { Show } from 'dop-router/react'

// components
import Content from 'components/styled/Content'
import Header from 'components/views/Playing/Header'
import SendUnits from 'components/views/Playing/SendUnits'
// import Leaders from 'components/views/Playing/Leaders'
// import Recruiting from 'components/views/Playing/Recruiting'
// import Info from 'components/views/Playing/Info'

export default function UX() {
    const state = useGlobalState()
    const observer = useObserver()
    observer.observeProperty(state, 'select_units')
    return (
        <Content>
            <Header />
            {/* <Recruiting /> */}
            {/* <Leaders /> */}
            <Show if={state.select_units !== undefined}>
                <SendUnits />
            </Show>
            {/* <Info /> */}
        </Content>
    )
}
