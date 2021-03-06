import './TeamPage.scss';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import { WinLoss } from '../components/WinLoss'
import { useParams } from 'react-router-dom'


export const TeamPage = () => {
     const [team, setTeam] = useState([]);
     const { teamName } = useParams();
     useEffect(
        () => {
            const fetchMatches = async () =>{
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchMatches();
        }, [teamName]
     );
  if(!team.teamName || !team){
      return <h1>404 Resource not found</h1>
  }
  return (
    <div className="TeamPage">
       <div className="home-page-section">
             <Link to={`/`}>Return to Home Page</Link>
       </div>
        <div className="team-name-section">
            <h1 className="team-name">{team.teamName}</h1>
        </div>
        <div className="wins-losses-section">
            Wins / Losses
            <WinLoss totalWins={team.totalWins} totalMatches={team.totalMatches}/>
        </div>
        <div className="match-detail-section">
            <h2>Latest Match</h2>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
        </div>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match}/>)}
        <div className="more-link">
            <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More</Link>
        </div>
    </div>
  );
}

export default TeamPage;
