import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  padding: 40px;
`
export const NxtWatchLogo = styled.img`
  align-self: center;
  width: 100px;
  margin: 10px;
  margin-bottom: 60px;
`
export const CustomLabelElement = styled.label`
  color: ${props => props.tcolor};
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: 'Roboto';
  font-size: 14px;
`
export const UserInput = styled.input`
  padding: 5px;
  margin-bottom: 20px;
`
export const CustomCheckBox = styled.input`
  align-self: flex-start;
`
export const CheckBoxLabel = styled.label`
  color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-size: 14px;
`
export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  border-style: none;
  color: #ffffff;
  height: 30px;
  font-weight: bold;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
