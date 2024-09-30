import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
    <>  
        <h1>Ampelsystem Datenbank</h1>
        <table>
        <tr>
          <th>Nr</th>
          <th>Menge</th>
          <th>&#216; Zeit</th>
          <th>Datum</th>
        </tr>
        <tr>
          <td>1</td>
          <td>10 Billionen</td>
          <td>10 Stunden</td>
          <td>10.2.1993</td>
        </tr>
        <tr>
          <td>2</td>
          <td>0.10</td>
          <td>1 Milisekunden</td>
          <td>10.10.1010</td>
        </tr>
        <tr>
          <td>3</td>
          <td>0.10</td>
          <td>1 Milisekunden</td>
          <td>10.10.1010</td>
        </tr>
        <tr>
          <td>4</td>
          <td>0.10</td>
          <td>1 Milisekunden</td>
          <td>10.10.1010</td>
        </tr>
        </table> 
<div className= "LinkContainer">
  <p>Bei Hilfe verweisen wir auf die Help Page: </p>
        <Link to="/help" className="custom-link-home">
          Braucht du Hilfe?
        </Link>
</div>
        
    </>
    );
}

export default Home;
