import {LeaderboardRowContainer, Name} from './styledComponents'

const LeaderboardRow = props => {
  const {userDetails} = props

  const {
    branchName,
    branchCode,
    branchShortName,
    locality,
    city,
    state,
    contactPerson,
  } = userDetails

  return (
    <LeaderboardRowContainer>
      <Name>{branchName}</Name>
      <Name>{branchCode}</Name>
      <Name>{branchShortName}</Name>
      <Name>{locality}</Name>
      <Name>{city}</Name>
      <Name>{state}</Name>
      <Name>{contactPerson}</Name>
    </LeaderboardRowContainer>
  )
}

export default LeaderboardRow
