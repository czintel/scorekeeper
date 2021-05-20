import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../components/Button'
import InputField from '../components/InputField'
import React from 'react'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage(onSubmit) {
  return (
    <Grid>
      <Form>
        <InputField
          label="Name des Spiels"
          placeholder={'z.B. Spiel des Lebens'}
        />
        <InputField
          label="Spielernamen"
          placeholder={'z.B. Bert, Ernie, usw.'}
        />
        <Button>Neues Spiel</Button>
      </Form>
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`
const Form = styled.form`
  display: grid;
  gap: 20px;
`
