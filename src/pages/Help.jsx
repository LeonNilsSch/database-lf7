import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Help.css';

function HelpPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Was ist die Ampelsystem Datenbank?",
            answer: "Die Ampelsystem Datenbank ist ein Tool zur Speicherung und Analyse von Ampeldaten in verschiedenen Städten."
        },
        {
            question: "Wie kann ich Daten in die Datenbank einfügen?",
            answer: "Daten können über das Admin-Panel oder durch eine API-Schnittstelle in die Datenbank eingefügt werden."
        },
        {
            question: "Welche Daten speichert die Datenbank?",
            answer: "Die Datenbank speichert Informationen wie die Menge an Verkehrsteilnehmern, durchschnittliche Wartezeiten und Zeitstempel der Datenaufzeichnung."
        },
        {
            question: "Ist die Datenbank öffentlich zugänglich?",
            answer: "Nein, die Datenbank ist nur für autorisierte Benutzer zugänglich."
        }
    ];

    return (
        
        <div className='Box'>
            <h1>Hilfe & FAQ</h1>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                        </div>
                        <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            {faq.answer}
                        </div>
                        
                    </div>
                ))}
            </div>
     <div className= "LinkContainerHelp">
        <p>Für die Datenbank verweisen wir auf die Home Page: </p>
        <Link to="/home" className="custom-link-home">
          Hier gehts zur Datenbank
        </Link>
    
        <p>Falls du dich für das Projekt interressierst besuch doch die Intro Page: </p>
        <Link to="/" className="custom-link-home">
          Hier gehts zur Introduction
        </Link>
    </div>
        </div>
        
    );
}

export default HelpPage;
