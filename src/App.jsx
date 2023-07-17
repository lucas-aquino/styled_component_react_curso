import './App.css'
import { styled, keyframes }  from 'styled-components'

const P = styled.p`
  font-size: 24px;
  color: red;
`

const Button = styled.button`
  transition: box-shadow 0.3s ease;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.8);
  }
`

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
  cursor: pointer;
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Password = styled(Input).attrs({
  type: 'password'
})`

`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 1s linear infinite;
  font-size: 28px;
`



function App() {
  return (
    <div>
      <P>Hola</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button>
      <BlockButton>Enviar</BlockButton>
      <BlockButton primary>Enviar</BlockButton>
      <BlockButton primary as='a' href='#'>Enviar</BlockButton>
      <StyledLink href='#'>Link con estilo 😎</StyledLink>
      <Input color='blue'></Input>
      <Password></Password>
      <br />
      <Rotar>🥴</Rotar>
    </div>
  )
}

export default App
