
export const generateUID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

export const initState = {
    React: {
        id: generateUID(),
        title: 'React',
        questions: [
            {
                //you may put value for each button correct or incorrect
                id: generateUID(),
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                isCorrect: true
            },
            {
                id: generateUID(),
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
                isCorrect: false
            }
        ]
    },
    JavaScript: {
        id: generateUID(),
        title: 'JavaScript',
        questions: [
            {
                id: generateUID(),
                question: 'What is a asd?',
                answer: 'The wefwgdeclared.',
                isCorrect: true
            },
            {
                id: generateUID(),
                question: 'What23gosure?',
                answer: 'The combinati23gl environmen23glared.',
                isCorrect: false
            },
            {
                id: generateUID(),
                question: 'are you developer?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                isCorrect: true
            },
            {
                id: generateUID(),
                question: 'what is msi ?',
                answer: 'microStar, msi is a company which provides gaming laptops and PCs',
                isCorrect: false
            }
        ]
    }
} 