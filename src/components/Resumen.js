import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { primerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    background-color:#17e856 ;
    padding: 1rem;
    text-align:center;
    margin-top: 1rem;

`;

const Resumen = ({datos}) => {
    const {marca, year, plan} = datos;

    if(marca ==='' || year ==='' || plan === '') return null;
    return ( 
        <ContenedorResumen>
            <h1>Resumen De Cotizacion</h1>
            <ul>
                <li>Brand: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Year: {year}</li>
                
                
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;