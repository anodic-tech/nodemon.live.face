import { SyntheticEvent } from "react"
import { createRoot } from "react-dom/client"

const IframeStyles = () => {
    const css = `
    #player {
        max-height: 'fit-content'
    }
    `
    return <style>{css}</style>
}

export const StreamEmbed = () => {

    const injectStyles = (e:SyntheticEvent<HTMLIFrameElement, Event>) =>{
        const iframe = e.target as HTMLIFrameElement
        if(!iframe?.contentDocument?.head) return
        const root = createRoot(iframe.contentDocument.head)
        root.render(<IframeStyles/>);
    }

    return <iframe
        src="https://nodemon.live/embed/video"
        title="Owncast"
        referrerPolicy="origin"
        allowFullScreen 
        onLoad={injectStyles}/>
}