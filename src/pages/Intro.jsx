import { Link } from 'react-router-dom';

import '../styles/Intro.css'

function Intro() {
  return (
    <div className="keineBox">
    <div className='Box'>
  <h1>Einführung: Das momentane Problem auf den Straße und wie wir es lösen wollen</h1>
  <h2>Problembeschreibung:</h2>
  <ul>In vielen deutschen Städten, darunter Hamburg, sind die Ampelsysteme veraltet und nicht an die aktuelle Verkehrslage angepasst. Dies führt zu unnötigen Staus, langen Wartezeiten und frustrierten Fahrern, die oft riskant reagieren. Die fehlende Vernetzung der Ampeln und die mangelnde Berücksichtigung von Echtzeit-Verkehrsdaten verschärfen das Problem, besonders zu Stoßzeiten, was die Effizienz des Verkehrsflusses und die Sicherheit beeinträchtigt.</ul>
  <h2>Lösungsansatz</h2>
  <ul>
    <p>Der Lösungsansatz sieht die Installation von gut sichtbaren Timern an Ampeln vor, die den Fahrern die verbleibende Zeit bis zur nächsten Ampelschaltung anzeigen. Diese Timer arbeiten in klar definierten Intervallen, sodass die Fahrer wissen, wie lange die aktuelle Phase andauert. Zusätzlich wird ein akustisches Signal direkt ins Fahrzeug übertragen, um die Fahrer rechtzeitig zu warnen, wenn die Ampel von Rot auf Rot-Gelb umschaltet. Diese Maßnahmen sollen den Verkehrsfluss beschleunigen und die Sicherheit erhöhen, indem die Fahrer flüssiger anfahren und unnötige Verzögerungen vermieden werden. Das akustische Signal hilft, Überraschungen durch plötzliche Phasenwechsel zu vermeiden, sodass die Fahrer vorausschauend reagieren können. Insgesamt soll das System zu einem schnelleren und sichereren Ablauf an Ampelkreuzungen beitragen.</p>

  </ul>
  <h2>Analysedaten</h2>
  <ul>
    <li><strong>Lichtschranke:</strong> Es werden die Anzahl an vorbeifahrenden Auto gezählt, sodass wir das Verkehrsaufkommen im überblick haben und Staus oder ähnliches abschätzen können.</li>
  </ul>
  <p>Dies ist nur ein kurzer Überblick über die Zukunft des Straßenverkehrs. Es gibt viele andere Faktoren zu berücksichtigen, wie die Auswirkungen auf die Umwelt und die Wirtschaft.</p>
      <Link to="/home" className="custom-link">
        Gehe zur Datenbank
      </Link>
    </div>
    </div>
  );
}

export default Intro;
