import React from 'react'

const Resourceimage = (props) => {
    return (
        <div>
            <div className='resource-image'>
                <img src={props.image} />
            </div>
        </div>
    )
}

export default Resourceimage