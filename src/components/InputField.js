import styled from 'styled-components/macro'

export default function InputField({ label, ...inputProps }) {
  return (
    <Label>
      {label}
      <Input {...inputProps} />
    </Label>
  )
}

const Input = styled.input`
  display: grid;
  gap: 20px;
  padding: 10px 20px;
  border: 0.5px solid darkgray;
  color: 'black';
  border-radius: 20px;
`

const Label = styled.label`
  display: grid;
  gap: 10px;
  font-family: sans-serif;
`
