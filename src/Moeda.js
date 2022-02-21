import React from "react";

const Moeda = ({children}) => {
    
    const valorFormatado = children.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <span>{valorFormatado}</span>
    )
}

export default Moeda