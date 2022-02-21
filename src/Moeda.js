import React from "react";
import numeral from "numeral";

const Moeda = ({children}) => {
    
    const valorFormatado = children.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <span>{valorFormatado}</span>
    )
}

export default Moeda