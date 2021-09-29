import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './collectionPreview.scss'


export default function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                {
                    items
                    .filter( (item, idx) => idx < 4)
                    // .map( ({ id, ...otherItemsProps}) => (
                        .map(item => (
                        // <CollectionItem key={id} { ...otherItemsProps }></CollectionItem>
                        <CollectionItem key={item.id} item={ item }></CollectionItem>
                    ))
                }
                
            </div>
        </div>
    )
}
