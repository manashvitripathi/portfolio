import React from 'react';
import { FaSearch, FaChartLine, FaPaintBrush, FaRocket } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './WorkProcess.css';

const WorkProcess = () => {
    const [titleRef, titleVisible] = useScrollAnimation(0.2);
    const [gridRef, gridVisible] = useScrollAnimation(0.3);

    const processes = [
        {
            id: 1,
            icon: <FaSearch />,
            title: "Research",
            description: "Deep market analysis and client requirement gathering to understand business needs and opportunities."
        },
        {
            id: 2,
            icon: <FaChartLine />,
            title: "Analyse",
            description: "Strategic evaluation of data patterns and business metrics to identify growth opportunities."
        },
        {
            id: 3,
            icon: <FaPaintBrush />,
            title: "Design",
            description: "Creating comprehensive business strategies and tailored solutions for optimal client engagement."
        },
        {
            id: 4,
            icon: <FaRocket />,
            title: "Launch",
            description: "Implementation and execution of strategic initiatives with continuous monitoring and optimization."
        }
    ];

    return (
        <section id="work-process" className="work-process">
            <div className="container">
                <h2 ref={titleRef} className={`fade-in ${titleVisible ? 'animate' : ''}`}>
                    Work Process
                </h2>

                <div ref={gridRef} className={`process-grid fade-in ${gridVisible ? 'animate' : ''}`}>
                    {processes.map((process, index) => (
                        <div
                            key={process.id}
                            className={`process-card scale-in stagger-${index + 1}`}
                        >
                            <div className="process-icon">
                                {process.icon}
                            </div>
                            <div className="process-number">{process.id}</div>
                            <h3>{process.title}</h3>
                            <p>{process.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;