import React from 'react';
import './Volunteering.css';

function Volunteering() {
    const volunteeringData = [
        {
            id: 1,
            organization: "Lebanese Red Cross - Youth Sector",
            role: "Leadership Roles & Active Membership",
            date: "2018 – Present",
            details: [
                {
                    title: "Leadership",
                    description: "Served as Treasurer, Head of Logistics, and Head of Environment Committee."
                },
                {
                    title: "Crisis Management",
                    description: "Active disaster responder; provided logistical support during the Beirut Explosion relief efforts."
                }
            ]
        }
    ];

    return (
        <section id="volunteering" className="volunteering">
            <div className="volunteering-content">
                <h2 className="section-title">Volunteering & Leadership</h2>
                <p className="experience-intro">Commitment to community service and leadership roles that have shaped my perspective:</p>

                <div className="volunteering-grid">
                    {volunteeringData.map((item) => (
                        <div key={item.id} className="volunteering-card">
                            <div className="volunteering-header">
                                <h3 className="volunteering-org">{item.organization}</h3>
                                <div className="volunteering-role">{item.role}</div>
                                <div className="volunteering-date">{item.date}</div>
                            </div>

                            <ul className="volunteering-details">
                                {item.details.map((detail, index) => (
                                    <li key={index}>
                                        <strong>{detail.title}:</strong> {detail.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Volunteering;
