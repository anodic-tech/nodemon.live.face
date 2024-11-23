import { SyntheticEvent } from "react"

    const iframeCss = `
        #player {
            max-height: fit-content
        }
    `

export const StreamEmbed = () => {

    const injectStyles = (e:SyntheticEvent<HTMLIFrameElement, Event>) =>{
        const iframe = e.target as HTMLIFrameElement
        if(!iframe?.contentDocument?.head) return
        const style = document.createElement('style')
        style.append(iframeCss)
        iframe.contentDocument.head.appendChild(style)
    }

    return <iframe
        src="https://nodemon.live/embed/video"
        title="Owncast"
        referrerPolicy="origin"
        allowFullScreen 
        onLoad={injectStyles}/>
}