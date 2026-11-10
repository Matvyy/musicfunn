import { useState, useEffect } from "react"
import { type GetTrackDetailsOutputDataType, getTrack} from "../dataAccsessLayer/api"


export const useTrackDetials = (trackId: string | null) => {
    const [trackDetials, setTrackDetials] = useState<GetTrackDetailsOutputDataType | null>(null)


    useEffect(() => {
        if (!trackId) {
            setTrackDetials(null)
            return;
        }

        getTrack(trackId).then(json => setTrackDetials(json.data))

    }, [trackId])

    return{
        trackDetials: trackDetials
    }
}