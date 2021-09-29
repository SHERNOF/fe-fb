import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.jsx'
import { selectCollections } from '../../redux/shop/shop.selector'

// import SHOP_DATA from '../../redux/shop/shop.data.js'

const Shoppage = ({ collections }) => {
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

    const mapStateToProps = createStructuredSelector({
        collections: selectCollections
    })

    export default  connect(mapStateToProps)(Shoppage)

