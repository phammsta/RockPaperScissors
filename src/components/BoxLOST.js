import React from 'react'

export default function BoxLOSE(props) {
    return (
        <div class="lostbox">
            <h1 class="youlosttext">Computer</h1>
            <img src={props.lostimage} width={160} height={200} />
            <h1 class="outcomelosttext">Lost</h1>
        </div>
    )
}