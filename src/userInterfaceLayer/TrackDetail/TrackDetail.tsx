import { useTrackDetials } from "../../businessLogicLayer/useTrackDetials"
import style from "./TrackDetail.module.css"

type Props = {
    selectedTrackId: string | null
}


export function TrackDetail({ selectedTrackId }: Props) {

    const {trackDetials} = useTrackDetials(selectedTrackId)

    return (
        <>
            <div className={style.track}>
                <h3>Details</h3>
                {!selectedTrackId && !trackDetials && <p>Track is not selected</p>}
                {!trackDetials && selectedTrackId && <p>loading...</p>}
                {trackDetials && trackDetials.id !== selectedTrackId && <p>loading...</p>}
                {trackDetials && <>
                    <p style={{ width: "150px" }}>Title: {trackDetials.attributes.title}</p>
                    <p style={{ width: "150px" }}>Lyrics: {trackDetials.attributes.lyrics || "No lyrics available"}</p>
                </>}

            </div></>
    )
}