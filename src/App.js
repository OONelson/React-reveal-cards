import { useState } from 'react';

const questions = [
	{
		id: 3457,
		question: 'what language is React based on?',
		answer: 'JavaScript'
	},
	{
		id: 7536,
		question: 'what are the building blocks of React apps?',
		answer: 'components'
	},
	{
		id: 8832,
		question:
			"what's the name of the syntax we use to describe a UI in React? ",
		answer: 'JSX'
	},
	{
		id: 1297,
		question: 'how do we pass data from a parent to child component?',
		answer: 'Props'
	},
	{
		id: 9103,
		question: 'how to give component memory?',
		answer: 'useState hook'
	},
	{
		id: 2002,
		question:
			'what do we call an input element that is completely synchronised with state',
		answer: 'controlled element'
	}
];
const App = () => {
	return (
		<div className='app'>
			<FlashCards />
		</div>
	);
};

const FlashCards = () => {
	const [selectedId, setSelectedId] = useState(null);
	const handleClick = id => {
		setSelectedId(id !== selectedId ? id : null);
	};
	return (
		<div className='container'>
			{questions.map(question => (
				<div
					key={question.id}
					onClick={() => handleClick(question.id)}
					className={question.id === selectedId ? 'seleted' : ''}
				>
					<p>
						{question.id === selectedId ? question.answer : question.question}
					</p>
				</div>
			))}
		</div>
	);
};
export default App;
