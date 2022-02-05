import React from "react"

export default function Button(props) {
    return (
        <>
            <button className={"button " + ("btn-"+props.color || '')} >
                <i className={props.icon[0] + " fa-" + props.icon[1]}></i>
                {props.text}
            </button>
        </>
    )
}