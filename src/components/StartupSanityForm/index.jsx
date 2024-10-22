// src/components/StartupEvaluationForm.js
import React, { useState } from 'react';

const questions = [
    {
        id: 'foundersExperience',
        label: 'Do the founders have relevant industry experience or a successful startup history?',
        options: [
            { value: 2, text: 'Yes' },
            { value: 1, text: 'Somewhat', redFlag: true, redFlagDescription: '🚩 Limited experience may indicate a lack of knowledge in the industry.' },
            { value: 0, text: 'No', redFlag: true, redFlagDescription: '🚩 No relevant experience raises significant concerns about the team\'s capability.' }
        ]
    },
    {
        id: 'marketSize',
        label: 'Is the market opportunity large and growing?',
        options: [
            { value: 2, text: 'Yes' },
            { value: 1, text: 'Uncertain', redFlag: true, redFlagDescription: '🚩 Uncertainty about market size may indicate a weak business foundation.' },
            { value: 0, text: 'No', redFlag: true, redFlagDescription: '🚩 A small or shrinking market poses a risk for growth and sustainability.' }
        ]
    },
    {
        id: 'productFit',
        label: 'Is there clear, unique product-market fit with customer validation?',
        options: [
            { value: 2, text: 'Yes' },
            { value: 1, text: 'Somewhat'},
            { value: 0, text: 'No', redFlag: true, redFlagDescription: '🚩 No product-market fit suggests the product may not meet customer needs.' }
        ]
    },
    {
        id: 'revenueModel',
        label: 'Does the startup have a clear business and revenue model?',
        options: [
            { value: 2, text: 'Yes' },
            { value: 1, text: 'Somewhat', redFlag: true, redFlagDescription: '🚩 Unclear revenue model may lead to financial instability.' },
            { value: 0, text: 'No', redFlag: true, redFlagDescription: '🚩 Lack of a business model raises significant doubts about profitability.' }
        ]
    },
    {
        id: 'techVision',
        label: 'Is the technology vision clear and scalable?',
        options: [
            { value: 2, text: 'Yes' },
            { value: 1, text: 'Somewhat' },
            { value: 0, text: 'No' }
        ]
    },
    {
        id: 'runway',
        label: 'Does the startup have at least 12-18 months of financial runway?',
        options: [
            { value: 2, text: 'Yes' },
            { value: 1, text: 'Not sure', redFlag: true, redFlagDescription: '🚩 Not knowing the runway duration raises concerns about financial management.' },
            { value: 0, text: 'No', redFlag: true, redFlagDescription: '🚩 Insufficient runway poses a risk of failure before reaching profitability.' }
        ]
    },
    {
        id: 'founderTrust',
        label: "Do you trust the founders to act in the best interest of the company?",
        options: [
            { value: 2, text: "Yes" },
            { value: 1, text: "Somewhat" },
            { value: 0, text: "No", redFlag: true, redFlagDescription: "🚩 A lack of trust in the founders may indicate potential mismanagement or misalignment with the company's goals." },
        ],
    }
];

const StartupEvaluationForm = () => {
    const [responses, setResponses] = useState(Array(questions.length).fill(undefined));
    const [result, setResult] = useState('');
    const [redFlags, setRedFlags] = useState([]); // Track red flags

    const handleSelectChange = (index, value) => {

        const updatedResponses = [...responses];
        updatedResponses[index] = value; // Update the response for the specific question
        setResponses(updatedResponses);

        // Check for red flags
        const selectedOption = questions[index].options.find(option => option.value === value);
        if (selectedOption && selectedOption.redFlag) {
            // If it's a red flag, add it to the list of red flags
            setRedFlags(prev => {
                //const existingFlag = prev.find(flag => flag.id === questions[index].id);
                //if (!existingFlag) {
                    return [...prev, { id: questions[index].id, description: selectedOption.redFlagDescription }];
                //}
                return prev;
            });
        } else {
            // Remove the red flag if the selected option is not a red flag
            setRedFlags(prev => prev.filter(flag => flag.id !== questions[index].id));
        }

        setTimeout(calculateScore, 100);
    };

    const calculateScore = () => {
        console.log('responses', responses);
        // Calculate the total score
        const totalScore = responses.reduce((sum, value) =>{ return sum + (value ?? 0)}, 0);
        const maxScore = questions.reduce((sum, question) => sum + (Math.max(...question.options.map(option => option.value)) ?? 0), 0);
        // Calculate the percentage
        const percentage = (totalScore / maxScore) * 100;

        // Provide a recommendation based on the percentage
        let resultMessage = '';
        if (percentage >= 75) {
            resultMessage = 'This startup shows strong potential. It meets most of the key criteria for success!';
        } else if (percentage >= 50) {
            resultMessage = 'This startup has some potential but might need more validation or development in a few areas.';
        } else {
            resultMessage = 'This startup appears to lack some key factors for success. Only consider if you are desperate for a job.';
        }
        // Update the result state
        setResult(`Your Score: ${totalScore}/${maxScore}. ${resultMessage}`);
    };

    return (
        <div>

<div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Let's start with a quick <strong>sanity check</strong> of the startup to get a realistic idea of whether it is setup for success! This evaluation is designed to help you assess the potential of a startup by evaluating key criteria. 
        You will be asked a series of questions about the startup's founders, market opportunity, product fit, revenue model, technology vision, and financial runway.
    </p>
    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Each question is scored from <strong>0 to 2</strong>, where <strong>0</strong> indicates a major concern, <strong>1</strong> suggests some potential, and <strong>2</strong> reflects a strong positive response. 
        Your total score will be calculated as a percentage of the maximum possible score, providing insights into the startup's strengths and areas for improvement.
    </p>
    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Please select your answers carefully, and click the <strong>"Get Evaluation"</strong> button to receive your results!
    </p>
</div>


            <form id="startupForm">
                {questions.map((question, index) => (
                    <div key={question.id}>
                        <label htmlFor={question.id}>{question.label}</label>


                        <select
                            id={question.id}
                            name={question.id}
                            value={responses[index] !== undefined ? responses[index] : ''} // Set value based on state
                            onChange={(e) => handleSelectChange(index, parseInt(e.target.value) || 0)} // Use null for unselected
                        >
                            <option value="" disabled>Select an option</option> {/* Placeholder option */}
                            {question.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>


                        <br /><br />
                    </div>
                ))}
                {/* Submit button */}
                <button type="button" onClick={calculateScore}>Get Evaluation</button>
            </form>

            {/* Result section */}
            {result && (
                <div id="result" style={{ marginTop: '20px' }}>
                    <h3>{result}</h3>
                </div>
            )}

            {/* Red flag section */}
            {redFlags.length > 0 && (
                <div style={{ marginTop: '20px', color: 'red' }}>
                    <h4>Warnings:</h4>
                    <ul>
                        {redFlags.map(flag => (
                            <li key={flag.id}>{flag.description}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StartupEvaluationForm;
