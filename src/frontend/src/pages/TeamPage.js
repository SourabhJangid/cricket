import './TeamPage.scss';
import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import { WinLoss } from '../components/WinLoss'
import { useParams } from 'react-router-dom'


export const TeamPage = () => {
     const [team, setTeam] = useState({matches:[]});
     const { teamName } = useParams();
     useEffect(
        () => {
            const fetchMatches = async () =>{
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchMatches();
        }, [teamName]
     );
  if(!team || !team.teamName){
      return <h1>404 Resource not found</h1>
  }
  return (
    <div className="TeamPage">
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
            {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match}/>)}
        <div className="more-link">
            <a href="#">More ></a>
        </div>
    </div>
  );
}

export default TeamPage;
