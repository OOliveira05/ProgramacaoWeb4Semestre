import './App.css'
import ButtonFatec from './components/ButtonFatec'
import CustomInput from './components/CustomInput'

function App() {

  return(
    <>
    <p>
      Entre em contato
      <hr></hr>
      <CustomInput type = "text" value = "" placeholder = "Nome"></CustomInput>
      <br></br>
      <CustomInput type = "text" value = "" placeholder = "E-mail"></CustomInput>
      <br></br>
      <CustomInput type = "text" value = "" placeholder = "Telefone"></CustomInput>
      <hr></hr>
    <ButtonFatec type="button" label="Enviar Mensagem"/>
    </p>


    </>
  )
}

export default App
