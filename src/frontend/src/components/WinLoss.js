import { React } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export const WinLoss = ({totalWins, totalMatches}) => {
  return (
    <div className="WinLoss">
        <PieChart
        data={[
            {title: 'Losses', value: totalMatches - totalWins, color: '#a34d5d'},
            {title: 'Wins', value: totalWins, color: '#4da375'}
        ]}
        />
    </div>
  );
}

export default WinLoss;