import clsx from "clsx"
import { type TrackListItemResource } from "../../dataAccsessLayer/api"
import style from "./TrackItem.module.css"

type Props = {
    isSelected: boolean
    onSelect: (trackId: string) => void
    track: TrackListItemResource
}

export function TrackItem({ track, isSelected, onSelect }: Props) {
    const handleClick = () => { return onSelect?.(track.id) }
    const className = clsx({
        [style.track]: true,
        [style.selected]: isSelected
    })

    return (
        <li
            key={track.id}
            className={className}
            onClick={handleClick}
        >
            <div>
                <div>{track.attributes.title}</div>
            </div>

            <audio controls src={track.attributes.attachments[0].url} ></audio>
        </li>
    )
}