import React from 'react'

export const Person = (props) => {
  return (
    <div>Person {props.name}</div>
  )
}


// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// export default class Person extends Component {
//   static propTypes = {second: third}

//   render() {
//     return (
//       <div>Person</div>
//     )
//   }
// }

export default Person;