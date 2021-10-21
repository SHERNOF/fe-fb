import React from 'react'
import { connect } from 'react-redux'
import  { selectCollection }  from '../../redux/shop/shop.selector'
import './collection.scss'

// const Collection = ({match}) => {
    const Collection = ({ collection }) => {
    // console.log(match.params.collectionId)
    console.log(collection)
    return (
        <div className="collection-page">
            <h2>COLLECTION PAGE</h2>
        </div>  
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
// export default Collection       


