import React, { Component } from 'react'

export class Player extends Component {
  render() {
    console.log('player props',this.props)
    return (
      <div>
        player
      </div>
    )
  }
}

export default Player
