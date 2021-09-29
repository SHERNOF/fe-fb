import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.jsx'
import SHOP_DATA from '../../redux/shop/shop.data.js'

export default class Shoppage extends Component {
    constructor(props){
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className="shoppage">
                {
                    collections.map( ({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} { ...otherCollectionProps } ></CollectionPreview>
                    ) )
                }
            </div>
        )
    }
}

