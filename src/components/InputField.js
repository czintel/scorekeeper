import styled from 'styled-components/macro'

export default function InputField({ label, ...inputProps }) {
  return (
    <label>
      {label}
      <Input {...inputProps} />
    </label>
  )
}

const Input = styled.input`
  padding: 10px 20px;
  border: 0.5px solid darkgray;
  background: 'white';
  color: 'black';
  border-radius: 20px;
`
