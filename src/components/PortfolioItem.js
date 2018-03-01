import React from 'react'

const PortfolioItem = ({ item }) => (
    <div>
        <p>{ item.fields.title }</p>
        <img
            alt={ item.fields.thumb.fields.title }
            src={ `${item.fields.thumb.fields.file.url}?fl=progressive&w=200&h=200` }
        />
    </div>
)

export default PortfolioItem