import { SyntheticEvent } from "react"

    const iframeCss = `
        #player {
            max-height: fit-content;
        }
        .OfflineEmbed_offlineContainer__fdZ07 {
            background: #000068;
        }
        .OfflineEmbed_offlineContainer__fdZ07 .OfflineEmbed_content__j10dd .OfflineEmbed_pageLogo__cl5VS{
            border: none;
            border-radius: 0;
            background-size: cover !important;
            background: transparent;
        }
        .OfflineEmbed_heading__KnMu3 {
            display: none;
        }
        .OfflineEmbed_offlineContainer__fdZ07 .OfflineEmbed_content__j10dd .OfflineEmbed_pageName__9lEC_ {
            font-size: 0;
        }   
        .OfflineEmbed_pageName__9lEC_:before {
            font-family: 'Krypton';
            font-size: 1.5rem;
            content: "Stream offline";
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