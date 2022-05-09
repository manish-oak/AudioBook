import React, { useState } from "react";
import ListsContext from "./Context";
import file1 from "../AudioFiles/121101_fiction_sedaris.mp3"
import file2 from "../AudioFiles/art_of_war_01-02_sun_tzu_64kb.mp3"
import file3 from "../AudioFiles/Ginsberg-Allen_01_Supermarket-in-California_SFSU_10-25-56.mp3"


const ContextState = ({ children }) => {
    const [Data, setData] = useState({
        Audios: [{ Id: 1, file: file1, fileName: 'Fiction_sedaris',TimeStamp:0 }, { Id: 2, file: file2, fileName: 'Art_of_war',TimeStamp:0 }, { Id: 3, file: file3, fileName: 'Ginsberg-Allen',TimeStamp:0 }],
        TimeStamp: [],
        Ended:[]
    })
    return (
        <ListsContext.Provider
            value={[Data, setData]}>
            {children}
        </ListsContext.Provider>
    )
}
export default ContextState;