import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state={
    name:"",
    hp:"",
    front:"",
    back:""
  }

  change=(e)=>{
    e.persist()
    console.log(e.target.name, e.target.value)
    this.setState(()=>({[e.target.name]:e.target.value}))
  }

  submit=(e)=>{
    e.preventDefault()
    this.props.createDigimon(this.state)
    console.log("submitting form...")
    this.setState(({name:"",hp:"",front:"",back:""}))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={(e)=>{this.change(e)}}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={(e)=>{this.change(e)}}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={this.state.front} onChange={(e)=>{this.change(e)}}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={this.state.back} onChange={(e)=>{this.change(e)}}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
