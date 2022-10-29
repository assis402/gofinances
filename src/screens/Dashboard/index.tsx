import React from 'react'
import { HighlightCard } from '../../components/Highlight'

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Power,
    HighlghtCards
} from './styles'

export function DashBoard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://avatars.githubusercontent.com/u/72348081?v=4'}}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Matheus</UserName>
                        </User>
                    </UserInfo>
                    <Power name="power"/>
                </UserWrapper>
            </Header>
            <HighlghtCards>
                <HighlightCard/>
                <HighlightCard/>
                <HighlightCard/>
            </HighlghtCards>
        </Container>
    )
}