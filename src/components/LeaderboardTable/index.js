import LeaderboardRow from '../LeaderboardRow'

import {LeaderboardTableContainer, LeaderboardHeader} from './styledComponents'

const LeaderboardTable = props => {
  const {leaderboardData} = props

  const renderLeaderboardHeader = () => (
    <LeaderboardHeader>
      <p>Branch Name</p>
      <p>Branch Code</p>
      <p>Branch Short Name</p>
      <p>Locality</p>
      <p>City</p>
      <p>State</p>
      <p>Contact Person</p>
    </LeaderboardHeader>
  )

  return (
    <LeaderboardTableContainer>
      {renderLeaderboardHeader()}
      {leaderboardData.map(eachUser => (
        <LeaderboardRow key={eachUser.id} userDetails={eachUser} />
      ))}
    </LeaderboardTableContainer>
  )
}

export default LeaderboardTable

/*
 {leaderboardData.map(eachUser => (
        <LeaderboardRow key={eachUser.id} userDetails={eachUser} />
      ))}
*/
