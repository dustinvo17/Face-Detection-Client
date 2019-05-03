import React from 'react'

class Rank extends React.Component  {

  render(){
         return (
        <div>
            <div className='white f3'>
                {`${this.props.userName ? this.props.userName[0].toUpperCase() + this.props.userName.substring(1) :'underfined'}, your current entries count is : `}
            </div>
            <div className="white f3">
                {this.props.entries}
            </div>
        </div>
    )
    }
   
}
export default Rank