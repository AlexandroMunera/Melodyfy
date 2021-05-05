import React from "react"
import { Typography } from "../../atoms/typography/Typography"
import "./albumCard.scss"

export default function AlbumnCard({ imageUrl, title, by }) {
  return (
    <div className="m-album-card">
      <img className="m-album-card__img" src={imageUrl} alt={title} />
      <Typography variant="p">{title}</Typography>
      <Typography variant="p">
        <i>By {by} </i>
      </Typography>
    </div>
  )
}
