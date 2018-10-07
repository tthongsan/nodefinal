// import React, { Component } from 'react';
// import './ToRead.css';

// class ToRead extends Component {
//   constructor() {
//     super();
//     this.state = {
//       artTitle: [],
//       tempTitle: ''
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

// handleChange(val) {
//   console.log(val)
//   this.setState({tempTitle: val})
// }

// handleClick() {
//   let arr = this.state.artTitle.slice()
//   arr.push(this.state.tempTitle)
//   this.setState({artTitle: arr})
//   console.log(this.state.artTitle)
// }


//   render() {
//     return (
//       <div className="readlist">
//         <input type="text" onChange={(el) => this.handleChange(el.target.value)}/>
//         <button onClick={this.handleClick}>hhih</button>
//         <div>{this.state.artTitle}</div>
//       </div>
//     )
//   }
// }

// export default ToRead;

