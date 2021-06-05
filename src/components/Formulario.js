import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper';

const Campo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: bold;
`;
const Label = styled.label`
    flex:0 0 100px;
    font-weight: bold;
`;
const Select = styled.select`
    background-color:rgba(182, 218, 85);
    font-weight: bold;
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none;
    border-radius:5px;

`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Boton = styled.button`
    background-color:#17e856 ;
    border:none;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    border-radius:5px;
    margin-top:1rem;
    transition: background-color .3s ease;

    &:hover{
        background-color:#12ba45;
        cursor:pointer;
    }
`;

const Error =styled.div`
    background-color: #FA373B;
    padding: 1rem;
    width: 100%;
    color: #fff;
    text-align:center;
    margin-bottom: 2rem;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    //Primero van los useState
  const [ datos, guardarDatos ] = useState({
      marca: '',
      year: '',
      plan: ''
  });

  const [ error, guardarError ] = useState(false);

    //Extraer los valores del state
  const { marca, year, plan } = datos;

  //Leer los datos del formulario 
  const obtenerInformacion = e => {
      guardarDatos ({
        ...datos,
        [e.target.name] : e.target.value
      })
  }
  //Cuando el usuario presiona submit
  const cotizarSeguro = e =>{
      e.preventDefault();

      if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
        guardarError(true);
        return;
      }
        guardarError(false);

        //una base 2000
        let resultado = 2000;

          //obtener la diferencia de anos

        const diferencia = obtenerDiferenciaYear(year);

        //por cada ano hay que restar el 3%
        resultado -= (( diferencia * 3) * resultado) / 100;

        //American 15
        //asiatico 5%
        //eropeo 30%
        resultado =calcularMarca(marca) * resultado;
        console.log(resultado);


        //basico aumenta 20%
        //completo 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado).toFixed(2);

        guardarCargando(true);

        setTimeout  (() => {
            //Elimina el spinner
            guardarCargando(false);

            guardarResumen({
                cotizacion: Number( resultado ),
                datos
            })
        }, 3000)
        

        //total
     
  }


    return ( 
        <form
            onSubmit={cotizarSeguro}
            
        >
            { error ? <Error>Fill the Form</Error> : null}
            <Campo>
                <Label>Brand</Label>
                <Select
                  name="marca"
                  value={marca}
                  onChange={obtenerInformacion}
                >
                    <option value="">-- Select --</option>
                    <option value="americano">North America</option>
                    <option value="europeo">European</option>
                    <option value="asiatico">South America</option>
                </Select>

            </Campo>
            <Campo>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                <option value="">-- Select --</option>
                    <option value="2019">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>

            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                />Basic
                 <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                />Complete
            </Campo>
            <Boton type="submit">Request Quote</Boton>
        </form>
     );
}

Formulario.propTypes = {
    guardarResumen:PropTypes.func.isRequired,
    guardarCargando:PropTypes.func.isRequired
}
 
export default Formulario;