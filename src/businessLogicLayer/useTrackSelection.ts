import { useState } from "react"

export const useTrackSelection = ()=>{
  const [trackId, setTrackId] = useState<string | null>(null)
  
  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id)
  }

  return{
    trackId,
    handleTrackSelect: handleTrackSelect
  }
}