import React from 'react'

const Navigation = ({onRouteChange, isSignedin}) => {
    return (isSignedin === false
        ? <nav
                style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <p
                    className='f3 link dim black underline pa3 pointer'
                    onClick
                    ={() => onRouteChange('register')}>Register</p>
                <p
                    className='f3 link dim black underline pa3 pointer'
                    onClick
                    ={() => onRouteChange('signin')}>Sign in</p>
            </nav>
        : <nav
            style={{
            display: 'flex',
            justifyContent: 'flex-end'
        }}>
            <p
                className='f3 link dim black underline pa3 pointer'
                onClick
                ={() => onRouteChange('signout')}>Sign Out</p>
        </nav>)
}
export default Navigation