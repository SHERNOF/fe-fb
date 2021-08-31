import React from 'react'
import './collectionItem.scss'

export default function CollectionItem({ id, imageUrl, name, price }) {
    return (
        <div className="collection-item">
            <div style={{backgroundImage: `url(${imageUrl})`}} className="image"></div>
            <div className="collection-footer">
                <span>{ name }</span>
                <span>{ price }</span>
            </div>
        </div>
    )
}
