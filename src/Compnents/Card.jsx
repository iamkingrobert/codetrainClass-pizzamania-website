import React from 'react'

export default function Card({imgSrc, title, description}) {
  return (
    <div>
        <div className="card">
                    <img src={imgSrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
    </div>
  )
}
