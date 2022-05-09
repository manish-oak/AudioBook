import { useContext, useState, useRef, useEffect } from "react"
import ListsContext from "../../ContextApi/Context"
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';
import playSvg from "../../svg/play.svg";
import pauseSvg from "../../svg/pause.svg";
import hurrySummary from "../../assets/images/hurry's-summary.png";
const AudioPlayer = () => {
    const [Data, setData] = useContext(ListsContext)
    const [music, setMusic] = useState('')
    const musicRef = useRef(null)

    const HandlePlayMusic = async (e, MusicName) => {
        const idOfMusic = Data.TimeStamp.map(val => val.Id)
        if (Data.TimeStamp.length != 0 && idOfMusic.includes(music.Id)) {

            const cloneTimeStamp = Data.TimeStamp.map(timestamp => {
                const copytimestamp = { ...timestamp }
                if (copytimestamp.Id === music.Id) {
                    copytimestamp.TimeStamp = musicRef.current.audioEl.current.currentTime
                }
                return copytimestamp
            })
            setData({ ...Data, TimeStamp: cloneTimeStamp })
            localStorage.setItem('timeStamp', JSON.stringify(cloneTimeStamp))
        }
        else {
            const clone = [...Data.TimeStamp]
            const data = { Id: music.Id, TimeStamp: musicRef.current.audioEl.current.currentTime }
            clone.push(data)
            music.Id !== undefined && setData({ ...Data, TimeStamp: clone })
            music.Id !== undefined && localStorage.setItem('timeStamp', JSON.stringify(clone))
        }
        if (MusicName.Id === music.Id) {
            console.log(musicRef.current.audioEl.current.paused)
            musicRef.current.audioEl.current.paused ? musicRef.current.audioEl.current.play() : musicRef.current.audioEl.current.pause()
        }
        setMusic(MusicName)
    }

    useEffect(() => {
        const localStorageTimeStamp = localStorage.getItem('timeStamp')
        if (localStorageTimeStamp) {
            setData({ ...Data, TimeStamp: JSON.parse(localStorageTimeStamp) })
        }


    }, [])
    const handlePause = (e) => {
        const idOfMusic = Data.TimeStamp.map(val => val.Id)
        if (Data.TimeStamp.length != 0 && idOfMusic.includes(music.Id)) {
            const cloneTimeStamp = Data.TimeStamp.map(timestamp => {
                const copytimestamp = { ...timestamp }
                if (copytimestamp.Id === music.Id) {
                    copytimestamp.TimeStamp = e.target.currentTime
                }
                return copytimestamp
            })
            setData({ ...Data, TimeStamp: cloneTimeStamp })
            localStorage.setItem('timeStamp', JSON.stringify(cloneTimeStamp))
        }
        else {
            const clone = [...Data.TimeStamp]
            const data = { Id: music.Id, TimeStamp: e.target.currentTime }
            clone.push(data)
            setData({ ...Data, TimeStamp: clone })
            localStorage.setItem('timeStamp', JSON.stringify(clone))
        }
    }
    const handlePlay = (e) => {
        console.log(Data, "STATE")
        console.log(e, "handle Play")
        const PlayAudio = Data.TimeStamp.find(time => time.Id === music.Id)
        // console.log(PlayAudio, 'inhandleplasy');
        e.target.currentTime = PlayAudio.TimeStamp


    }
    const handleSeeked = (e) => {
        handlePause(e)
    }
    const handleEnded = (e) => {

        const index = Data.TimeStamp.findIndex(x => x.Id === music.Id);
        const clone = [...Data.TimeStamp]
        console.log("clone before slics: ", clone)

        clone.splice(index, 1);
        // console.log(clone,'Showing removed Data')
        console.log("data", Data)
        console.log("clone after slics: ", clone)
        localStorage.setItem('timeStamp', JSON.stringify(clone))
        setData({ ...Data, TimeStamp: clone })
        setMusic('')

        console.log('ENDED')

    }


    return (
        <>
            <div>
                <p className="m-0"><b>Audiobook</b></p>
                <div className="audio__container mt-md-5 mt-lg-3">
                    <ReactAudioPlayer
                        src={music.file}
                        autoPlay
                        onPlay={(e) => handlePlay(e)}
                        onPause={(e) => handlePause(e)}
                        onSeeked={(e) => handleSeeked(e)}
                        onEnded={(e) => handleEnded(e)}
                        controls
                        ref={musicRef}
                    />
                    <img src={hurrySummary} />
                </div>
                <table class="table">
                    <thead>

                    </thead>
                    <tbody>
                        {Data.Audios.map((audio, ind) => {

                            return (<tr key={ind}>
                                <td>{audio.Id}</td>
                                <td>{audio.fileName}</td>
                                <td onClick={(e) => HandlePlayMusic(e, audio)}>{music.Id === audio.Id && !musicRef.current.audioEl.current.paused ? <img src={pauseSvg} /> : <img src={playSvg} />}</td>

                            </tr>)
                        })
                        }
                    </tbody>
                </table>
            </div>


        </>
    )
}
export default AudioPlayer
