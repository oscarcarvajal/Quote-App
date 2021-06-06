import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup , CSSTransition, } from 'react-transition-group';
import PropTypes from 'prop-types';


const Mensaje = styled.p`
     background-color:rgba(182, 218, 85);
     margin-top: 2rem;
     padding: 1rem;
     text-align: center;
`;
const ResultadoCotizacion = styled.div`
    text-align:center;
    background-color: #4997d0;
    margin-top: 1rem;
    border: 1px solid #26c6da;
    position: relative
`;
const TextoCotizacion = styled.p`
    color: #fff;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    `;


const Resultado = ({cotizacion}) => {
    
    return(
        (cotizacion === 0) ? <Mensaje>Choose Band, Year and Plan</Mensaje> 
        : 
            (
                <ResultadoCotizacion>
                   <TransitionGroup
                    component="span"
                    className="resultado"
                   >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{ enter: 500, exit: 500}}
                    >
                        <TextoCotizacion>Total is: $ <span>{cotizacion}</span></TextoCotizacion>
                    </CSSTransition>
                   </TransitionGroup>
                </ResultadoCotizacion>
                
            )
      
    )
 
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;