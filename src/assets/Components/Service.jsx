import React from 'react'

const Service = (props) => {
    return (
        <div>
            <div className='header-card' id='header-card' >
                <div className='card-details' id='icon'>
                    <div>
                        <i className={props.icon}></i>
                    </div>
                    <p className='heading'>{props.title}</p>

                </div>

            </div>
        </div>
    )
}

export default Service