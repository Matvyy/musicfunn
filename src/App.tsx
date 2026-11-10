import { TrackList } from "./userInterfaceLayer/TrackList/TrackList"
import { TrackDetail } from "./userInterfaceLayer/TrackDetail/TrackDetail"
import { Header } from "./userInterfaceLayer/Header"
import { useTrackSelection } from "./businessLogicLayer/useTrackSelection"


export function App() {

  const {trackId, handleTrackSelect} = useTrackSelection()

  return (
    <>
      <Header/>
      <div style={{ display: "flex", gap: "20px" }}>
        <TrackList onTrackSelect={handleTrackSelect} trackId={trackId}/>
        <TrackDetail selectedTrackId={trackId} />
      </div>
    </>
  )
}


