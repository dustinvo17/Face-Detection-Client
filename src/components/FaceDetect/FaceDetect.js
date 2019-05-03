import React from 'react'
import './FaceDetect.css'
const FaceDetect= (props) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <div className="bounding-box" style={{top:props.box.top,bottom:props.box.bottom,right:props.box.right,left:props.box.left}}></div>
                <img id="imgface"src={props.imageUrl} alt="" width="500px" height="auto"/>
            </div>
            
        </div>
    )
}
export default FaceDetect