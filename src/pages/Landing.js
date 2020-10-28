import React from 'react'
import { Input } from '@material-ui/core'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import CityForm from '../components/CityForm'

const Landing = () => {
    const history = useHistory()

    const goCity = (city_name) => {
        history.push(`/article/${city_name}`)
    }

    return(
        <Container>
            <h1>LANDING PAGE</h1>
            <CityForm onCitySubmit={goCity} />
        </Container>
    )
}

const Container = styled.div`
    padding: 2em;

    h1 {
        color: red;
    }
`

export default Landing