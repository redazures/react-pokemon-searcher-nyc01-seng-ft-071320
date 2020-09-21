import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    data:[],
    search:""
  }

  componentDidMount=()=>{
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(string=>this.setState(()=>({data:string})))
  }

  createDigimon=(obj)=>{
    console.log("this is my submit",obj)
    const faker={
      name:obj.name,
      hp:obj.hp,
      sprites:{front:obj.front,back:obj.back}
    }
    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(
        faker
        )
      }).then(res=>res.json()).then(wargreymon=>{
        let newArray=[wargreymon,...this.state.data]
        this.setState({data:newArray})
      })
  }

  changer=(e)=>{
    console.log("this is fly", e.target.value)
    this.setState({search:e.target.value})
  }

  filter=()=>{
    return this.state.data.filter(el=>el.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    // console.log(this.state.data)
    console.log(this.state.search)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createDigimon={this.createDigimon}/>
        <br />
        <Search search={this.state.search} changer={this.changer}/>
        <br />
        <PokemonCollection digimons={this.filter()}/>
      </Container>
    )
  }
}

export default PokemonPage
