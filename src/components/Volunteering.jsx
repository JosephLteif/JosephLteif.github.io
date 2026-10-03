import React from 'react';
import './Volunteering.css';

function Volunteering() {
    const volunteeringData = [
        {
            id: 1,
            organization: "Lebanese Red Cross",
            role: "Active Member & Leadership Roles",
            date: "Mar 2018 – Present (8 years)",
            sector: "Humanitarian & Human Rights",
            details: [
                {
                    title: "Leadership & Committees",
                    description: "Head of Environment Committee (2 yrs), Treasurer of Head Committee (1 yr), Head of Logistics (1 yr), Youth & Health Committee (2 yrs), IT Committee member."
                },
                {
                    title: "Crisis Response",
                    description: "Actively contributed to humanitarian relief efforts, notably responding to the Beirut explosion disaster."
                },
                {
                    title: "Specialized Training",
                    description: "Certified in First Aid, Psychological First Aid (PFA), Psycho-social Support, NGO Communication, and Environmental Sustainability."
                },
                {
                    title: "Current Role",
                    description: "Active member and former Supervisor of the Environment Program Committee."
                }
            ]
        }
    ];

    return (
        <section id="volunteering" className="volunteering section-shell">
            <div className="volunteering-content">
                <div className="section-heading">
                    <div>
                        <p className="section-kicker">Beyond work</p>
                        <h2 className="section-title">Lebanese Red Cross</h2>
                    </div>
                    <p className="section-intro">Humanitarian service, committee work, and crisis response since March 2018.</p>
                </div>

                <div className="volunteering-grid">
                    {volunteeringData.map((item) => (
                        <div key={item.id} className="volunteering-card">
                            <div className="volunteering-header">
                                <div className="volunteering-sector">{item.sector}</div>
                                <div className="volunteering-role">{item.role}</div>
                                <div className="volunteering-date">{item.date}</div>
                            </div>

                            <ul className="volunteering-details">
                                {item.details.map((detail, index) => (
                                    <li key={index}>
                                        <strong>{detail.title}</strong>
                                        <div className="detail-desc">{detail.description}</div>
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
