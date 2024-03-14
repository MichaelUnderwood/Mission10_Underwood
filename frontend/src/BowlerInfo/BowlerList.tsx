import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  const [bowlerInfo, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('https://localhost:7077/api/BowlerInfo/marlins-sharks');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">List of Bowler Data</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerInfo.map((b) => (
            <tr key={b.bowlerId}>
            <td>{b.bowlerFirstName}, {b.bowlerLastName}, {b.bowlerMiddleInit}</td>
              <td>{b.team?.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default BowlerList;