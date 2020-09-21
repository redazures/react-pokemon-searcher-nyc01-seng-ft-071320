import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state={
    image:this.props.el.sprites.front
  }

  switch=()=>{
    console.log("this is pokemon",this.state.image)
    if (this.state.image===this.props.el.sprites.front){
      this.setState({image:this.props.el.sprites.back})
    }else{
      this.setState({image:this.props.el.sprites.front  })
    }
  }

  render() {
    // console.log(this.props)
    const {name, hp} = this.props.el
    // console.log(id, name, hp, sprites)
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.image} onClick={()=>this.switch()}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
