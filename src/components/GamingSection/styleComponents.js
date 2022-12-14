import styled from 'styled-components/macro'

export const TestidContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const HomeCard = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  width: 100%;
`
export const HomeListItem = styled.li``
export const HomeContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 100%;
`
export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
export const TrendingPopup = styled.div`
  height: 20vh;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  padding: 20px;
  padding-left: 80px;
  justify-content: flex-start;
`
export const FlameIcon = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 35px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0b37;
  font-size: 35px;
  margin-right: 15px;
`
export const CustomText = styled.h1`
  color: ${props => props.bgColor};
  font-family: 'Roboto';
`
export const VideoTrendsContainer = styled.ul`
  list-style-type: none;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const FailureImage = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  height: 250px;
  background-color: ${props => props.bgColor};
`
export const SomethingWrongText = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.bgColor};
`
export const WrongParaText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.bgColor};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border-style: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  width: 80px;
  height: 40px;
  margin-bottom: 10px;
`
