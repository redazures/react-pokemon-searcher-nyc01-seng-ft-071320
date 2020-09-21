import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  getDigiMons=()=>{
    return this.props.digimons.map(el=><PokemonCard key={el.id} el={el}/>)
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {this.getDigiMons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
