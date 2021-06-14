import React from 'react'

export const Error = ({error}) => {

    return (
        <>
            <p className="alert alert-danger error">{ error }</p>
        </>
    )
}
