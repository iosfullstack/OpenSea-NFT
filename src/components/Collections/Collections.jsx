import React, {useState} from 'react'
import './Collections.css'
import TabList from '../../TabList'
import TabList1 from '../../Tablist1'
import TabList2 from '../../TabList2'
import TabList3 from '../../TabList3'
import TabList4 from '../../TabList4'



const Collections = () => {
    const [art, setArt] = useState(true)
    const [music, setMusic] = useState(false)
    const [video, setVideo] = useState(false)
    const [cartoon, setCartoon] = useState(false)
    const [craft, setCraft] = useState(false)
    const [tokens, setTokens] = useState(false)
    const [active, setActive] = useState(false)
    // const [alls, setAll] = useState(false)
    
    

    const openArt = () => {
        if (!art) {
            setArt(true)
            setMusic(false)
            setVideo(false)
            setCartoon(false)
            setCraft(false)
            setTokens(false)
            setActive(!active)
            // setAll(false)
        }
    }

    const openMusic = () => {
        if (!music) {
            setArt(false)
            setMusic(true)
            setVideo(false)
            setCartoon(false)
            setCraft(false)
            setTokens(false)
        }
    }

    const openVideo = () => {
        if (!video) {
            setArt(false)
            setMusic(false)
            setVideo(true)
            setCartoon(false)
            setCraft(false)
            setTokens(false)
        }
    }

    const openCartoon = () => {
        if (!cartoon) {
            setArt(false)
            setMusic(false)
            setVideo(false)
            setCartoon(true)
            setCraft(false)
            setTokens(false)
        }
    }

    const openCraft = () => {
        if (!craft) {
            setArt(false)
            setMusic(false)
            setVideo(false)
            setCartoon(false)
            setCraft(true)
            setTokens(false)
        }
    }

    const openTokens = () => {
        if (!tokens) {
            setArt(false)
            setMusic(false)
            setVideo(false)
            setCartoon(false)
            setCraft(false)
            setTokens(true)
        } 
    }

    // const openAll = () => {
    //     if (!alls) {
    //         setArt(true)
    //         setMusic(true)
    //         setVideo(true)
    //         setCartoon(true)
    //         setCraft(true)
    //         setTokens(true)
    //         setAll(true)
    //     } else if (alls === true) {
    //         setTokens(true)
    //         setArt(false)
    //         setMusic(false)
    //         setVideo(false)
    //         setCartoon(false)
    //         setCraft(false)
    //         setAll(false)

    //     }
    // }
  return (
    <div>
        <section className='collections-tab'>
            <h3>Editors Pick for the week</h3>
            <div className="collections-btn">
                <button onClick={() => openArt()}>Art</button>
                <button onClick={() => openMusic()}>Music</button>
                <button onClick={() => openVideo()}>Video</button>
                <button onClick={() => openCartoon()}>Cartoon</button>
                <button onClick={() => openCraft()}>Craft</button>
                <button onClick={() => openTokens()}>Tokens</button>
            </div>
        </section>
        { art && (
            <div>
                <TabList/>
            </div>
        )}
        { music && (
            <div>
                <TabList1/>
            </div>
        )}
        { video && (
            <div>
                <TabList2/>
            </div>
        )}
        { cartoon && (
            <div>
                <TabList3/>
            </div>
        )}
        { craft && (
            <div>
                <TabList/>
            </div>
        )}
        { tokens && (
            <div>
                <TabList4/>
            </div>
        )}
        {/* { alls && (
            <div>
                <TabList/>
                <TabList1/>
                <TabList2/>
                <TabList3/>
                <TabList/>
                <TabList4/>
            </div>
        )} */}
        <div className="see-btn">

        <button className='btn-see'>See All</button>
        </div>
    </div>
  )
}

export default Collections