import React from 'react';
import * as C from '../../pages/styled';

const Input = ({type, placeholder, value, onChange}) => {
    return(
        <C.Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />    
    )
}

export default Input;