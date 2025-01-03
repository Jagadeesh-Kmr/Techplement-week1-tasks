import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import LeaderboardTable from '../LeaderboardTable'

import {LeaderboardContainer, LogoutButton} from './styledComponents'

const data = [
  {
    id: 51386,
    branchName: 'CHENNAI',
    branchCode: 'B001',
    branchShortName: 'CHN',
    locality: 'Alandur(Reopened W.E.F.6.6.05) S.O',
    city: 'CHENNAI',
    state: 'TAMIL NADU',
    contactPerson: '',
  },
]

const Leaderboard = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderLeaderboard = () => {
    console.log(data)

    return (
      <>
        <ul>
          <LeaderboardTable leaderboardData={data} />
        </ul>
      </>
    )
  }

  return (
    <LeaderboardContainer>
      {renderLeaderboard()}
      <LogoutButton type="button" onClick={onClickLogout}>
        Logout
      </LogoutButton>
    </LeaderboardContainer>
  )
}

export default withRouter(Leaderboard)
