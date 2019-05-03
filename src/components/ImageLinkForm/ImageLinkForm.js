import React from 'react'
import './ImageLinkForm.css'
import clarifai from 'clarifai'
const ImageLinkForm = (props) => {
   
    
    return (
        <div>
            <p className='f3'>
                {'Try to detect faces in your pictures.'}
            </p>
            <div className="center">
            <div className='pa4 br3 shadow-5 center form'>
                <input onChange={(e)=>props.onInputChange(e)} className="f4 pa2 w-70 center" type='text'/>
                <button onClick={props.onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
            </div>
            </div>
        </div>
    )
}
export default ImageLinkForm