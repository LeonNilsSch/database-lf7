// Intro.jsx
import { Link } from 'react-router-dom';

import '../styles/Intro.css'

function Intro() {
  return (
    <div className="keineBox">
    <div className='Box'>
  <h1>Einführung in den zukünftigen Straßenverkehr</h1>
  <p>Dies ist eine kurze Einführung in die Zukunft des Straßenverkehrs. Wir werden einige der wichtigsten Trends und Technologien diskutieren, die die Art und Weise, wie wir reisen, verändern.</p>
  <h2>Schlüsseltrends</h2>
  <ul>
    <li><strong>Intelligente Städte:</strong> Städte nutzen Technologie, um das Verkehrsmanagement zu verbessern und Staus zu reduzieren.</li>
  </ul>
  <h2>Technologien</h2>
  <ul>
    <li><strong>Moderne Verkehrsleitsysteme:</strong> Diese Systeme verwenden Sensoren und Datenanalysen zur Optimierung des Verkehrsflusses.</li>
    <li><strong>Infrastrukturverbesserungen:</strong> Der Bau neuer Straßen, Brücken und Tunnel kann dazu beitragen, Staus zu verringern.</li>
  </ul>
  <p>Dies ist nur ein kurzer Überblick über die Zukunft des Straßenverkehrs. Es gibt viele andere Faktoren zu berücksichtigen, wie die Auswirkungen auf die Umwelt und die Wirtschaft.</p>
      <Link to="/home" className="custom-link">
        Gehe zur Homie-Seite
      </Link>
    </div>
    </div>
  );
}

export default Intro;
