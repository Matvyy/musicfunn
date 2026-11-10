import { useEffect, useState } from "react"
import { getTracks, type TrackListItemResource } from "../dataAccsessLayer/api"

export const useTracks = () => {
    const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null)


    useEffect(() => {
        getTracks().then(json => setTracks(json.data))
    }, [])

    return{
        tracks,

    }
}