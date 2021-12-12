import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss';

export const MatchDetailCard = ({teamName, match}) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchDetailCard">
        <div>
            <span className="vs">vs</span>
            <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
            <h2 className="match-date">on {match.date}</h2>
            <h3 className="match-venue">at {match.venue}</h3>
            <h3> {match.tossWinner} won the toss and elected to {match.tossDecision} first</h3>
        </div>
        <div className="result-award-other-detail">
             <h2>{match.matchWinner} won by {match.resultMargin} {match.result}</h2>
             <h2>Player of the Match : {match.playerOfMatch} </h2>
             <h3> Umpires </h3>
             <h4> {match.umpire1} And {match.umpire2} </h4>
        </div>
    </div>
  );
}

export default MatchDetailCard;
