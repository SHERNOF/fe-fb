import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './collectionItem.scss'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

//  function CollectionItem({ id, imageUrl, name, price, addItem }) {
const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item
    return (
        <div className="collection-item">
            <div style={{backgroundImage: `url(${imageUrl})`}} className="image"></div>
            <div className="collection-footer">
                <span>{ name }</span>
                <span>{ price }</span>
            </div>
            <CustomButton onClick={() => addItem(item) } inverted> Add to Cart </CustomButton>
        </div>
    )
}

const mapToDisPatchProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapToDisPatchProps)(CollectionItem)
