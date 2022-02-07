import React from "react"

export default function SocialBar(props){
    return(
        <section className="social-bar">
            <ul className="social-bar--icon_list">
                {Object.entries(props.icons).map(([icon, url]) =>(
                    <li key={icon}>
                        <a href={url} title={icon.toUpperCase()}><i className={"fab fa-"+icon+"-square"}></i></a>
                    </li>
                    //console.log(icon + " " + url)
                ))}
            </ul>
        </section>
    )
}