import propTypes from 'prop-types'
import { Suspense } from 'react'
import gify from "../../assets/Images/gify.gif"
import '../Css/Signin.css';
function LazySuspense ({component:Component, ...rest}) {
    return (
        <Suspense fallback={<img className='suspense-container' src={gify} alt='Loader'/>} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Component {...rest}/>
        </Suspense>
    )
}

LazySuspense.propTypes = {
    component:propTypes.element.isRequired
}

export default LazySuspense