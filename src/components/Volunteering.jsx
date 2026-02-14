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
            summary: "Extensive background in leadership and community involvement through active participation in various committees and crisis response initiatives.",
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
        <section id="volunteering" className="volunteering">
            <div className="volunteering-content">
                <h2 className="section-title">Volunteering & Leadership</h2>
                <p className="experience-intro">A long-standing commitment to humanitarian service and community impact:</p>

                <div className="volunteering-grid">
                    {volunteeringData.map((item) => (
                        <div key={item.id} className="volunteering-card">
                            <div className="volunteering-header">
                                <h3 className="volunteering-org">{item.organization}</h3>
                                <div className="volunteering-sector">{item.sector}</div>
                                <div className="volunteering-role">{item.role}</div>
                                <div className="volunteering-date">{item.date}</div>
                            </div>

                            <p className="volunteering-summary">{item.summary}</p>

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
