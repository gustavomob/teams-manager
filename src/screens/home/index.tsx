import { Header } from '@components/header'
import { Container } from './styles'
import { Highlight } from '@components/highlight'
import { GroupCard } from '@components/group-card'
import { useState } from 'react'
import { FlatList } from 'react-native'

export function Home() {
  const [groups, setGroups] = useState<string[]>(['Pentests Team', 'Turma do Mobile'])
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList 
      data={groups}
      keyExtractor={item => item}
      renderItem={({item})=> (<GroupCard title={item}/>) }
    />      
    </Container>
  )
}
