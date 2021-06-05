import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-color: rgba(182, 218, 85);
    padding: 10px;
    font-weight: bold;
    color: #272727;
`;
const TextoHeader = styled.h1`
    text-align: center;
    font-size:2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;

`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;