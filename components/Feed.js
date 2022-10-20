import { UploadFile } from '@mui/icons-material'
import React from 'react'
import Navbar from './Navbar'
import Upload from './Uplaod'

function Feed() {
  return (
    <div className='feed-container'>
        <Navbar/>
        <Upload/>
        <div className="videos-container">
          <div className="post-container">
        <video />
          </div>
          <div className="post-container">
        <video />
          </div>
          <div className="post-container">
        <video />
          </div>
        </div>
    </div>
  )
}

export default Feed