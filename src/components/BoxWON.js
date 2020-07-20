import React from 'react'

export default function BoxWON(props) {
    return (
        <div class="wonbox">
            <h1 class="youwontext">You</h1>
            <img src={props.wonimage} width={190} height={150} />
            <h1 class="outcomewontext">Won</h1>
        </div>
    )
}

// import React, { Component } from 'react'

// export default class Box extends Component {
//     render() {
//         return (
//             <div className="box">
//             <img src={this.props.image} width={200} height={200} />
//             box{this.props.number}
//             </div>
//         )
//     }
// }
