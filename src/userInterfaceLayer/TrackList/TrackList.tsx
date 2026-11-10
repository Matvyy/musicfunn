import { TrackItem } from "../TrackItem.modile.css/TrackItem"
import { useTracks } from "../../businessLogicLayer/useTracks"
import style from "./TrackList.module.css"


type Props = {
  trackId: string | null
  onTrackSelect: (id: string | null) => void
}

export function TrackList({ onTrackSelect, trackId }: Props) {
  const { tracks } = useTracks()

  if (tracks === null) {
    return (
      <>
        <h1>Musik player</h1>
        <span>loading...</span>
      </>
    )
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>Musik player</h1>
        <span>no tracks</span>
      </>
    )
  }

  const handleResetSelection = () => {
    onTrackSelect?.(null)
  }

  const handleClick = (id: string | null) => {
    onTrackSelect?.(id)
  }

  return (
    <div>
      <button onClick={handleResetSelection}>reset selection</button>
      <hr />
      <ul className={style.tracks}>
        {
          tracks.map((track) => {

            return (
              <TrackItem
                key={track.id}
                track={track}
                isSelected={track.id === trackId}
                onSelect={handleClick}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

