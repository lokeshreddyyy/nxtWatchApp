import styled from 'styled-components/macro'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 270px;
  background-color: ${props => props.bgColor};
  margin-top: 0;
`
export const SideOptionsCard = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`
export const CustomListItem = styled.li`
  width: 270px;
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
`

export const TabText = styled.span`
  font-family: 'Roboto';
  margin-left: 40px;
  color: ${props => props.bgColor};
  font-weight: ${props => props.weight};
`
export const CustomLinks = styled.div`
  display: flex;
  text-decoration: none;
`
export const ContactHeader = styled.p`
  font-family: 'Roboto';
  color: ${props => props.bgColor};
  padding-left: 30px;
  font-size: 15px;
`
export const IconsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  padding-left: 30px;
  margin-bottom: 10px;
`
export const IconsListItems = styled.li``

export const CustomIcons = styled.img`
  width: 30px;
  margin-right: 15px;
`
export const ContactDescription = styled.p`
  color: ${props => props.bgColor};
  padding: 30px;
  margin-top: 0;
  padding-top: 0;
  font-weight: bold;
  font-family: 'Roboto';
`
