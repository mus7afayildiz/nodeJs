import React, { useState} from 'react'
import './App.css';

function App() {
  
	const questions = [
		{
			questionText: 'la pomme',
			answerOptions: [
				{ answerText: 'badem', isCorrect: false },
				{ answerText: 'kayısı', isCorrect: false },
				{ answerText: 'elma', isCorrect: true },
				{ answerText: 'böğürtlen', isCorrect: false },
			],
		},
		{
			questionText: 'la figue',
			answerOptions: [
				{ answerText: 'yaban mersini', isCorrect: false },
				{ answerText: 'incir', isCorrect: true },
				{ answerText: 'üzüm', isCorrect: false },
				{ answerText: 'dut', isCorrect: false },
			],
		},
		{
			questionText: 'la pêche',
			answerOptions: [
				{ answerText: 'şeftali', isCorrect: true },
				{ answerText: 'papaya', isCorrect: false },
				{ answerText: 'portakal', isCorrect: false },
				{ answerText: 'kavun', isCorrect: false },
			],
		},
		{
			questionText: 'la fraise',
			answerOptions: [
				{ answerText: 'yıldız meyvesi', isCorrect: false },
				{ answerText: 'frenk üzümü', isCorrect: false },
				{ answerText: 'ahududu', isCorrect: false },
				{ answerText: 'çilek', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
    <div>
      <div><h2>FR-TR FRUIT GAME</h2></div>
		<div className='app'>
      
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </div>
	);
}

export default App;
