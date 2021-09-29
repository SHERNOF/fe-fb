import React from 'react'
import Menu from '../menu-item/Menu'
import './directory.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import selectDirectorySections from '../../redux/directory/directory-selector'



const Directory = ({ sections}) => {
  return (
      <div className="directory-menu">
      {
          // this.state.sections.map(({id, ...otherSectionsProps}) => (
            sections.map(({id, ...otherSectionsProps}) => (
              <Menu key={id} {...otherSectionsProps}></Menu>
          ))
      }
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  })


export default connect(mapStateToProps)(Directory)