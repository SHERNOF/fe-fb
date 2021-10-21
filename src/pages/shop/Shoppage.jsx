import React from 'react'
import CollectionOverviews from '../../components/collection-overviews/CollectionOverviews'
import { Route } from 'react-router-dom'
import Collection from '../collection/Collection'



const Shoppage = ({ match }) => {
    console.log(match)
        return (
            <div className="shoppage">
                <Route exact path={`${match.path}`} component={CollectionOverviews}></Route>
                <Route path={`${match.path}/:collectionId`} component={Collection}></Route>
            </div>
        )
    }
export default Shoppage

