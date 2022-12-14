import styled from 'styled-components/macro'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.bgColor};
`
export const WebsiteLogoContainer = styled.div``

export const NxtWatchLogo = styled.img`
  width: 100px;
  margin-left: 50px;
  margin-top: 10px;
`
export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-evenly;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border-style: none;
`
export const UserAccountImage = styled.img`
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border-color: ${props => props.color};
  color: ${props => props.color};
  border-radius: 4px;
  border-width: 1px;
`
