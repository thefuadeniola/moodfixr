const preferredMedia = [
    {
        id: 'books',
        name: 'Books'
    },
    {
        id: 'music',
        name: 'Music'
    },
    {
        id: 'podcast',
        name: 'Podcast'
    },

]

const baseMoods = [
    {
        base: 'Positive',
        id: 'positive',
        questions: {
            happy: "My current situation or the outcome of a recent situation",
            optimistic: "Looking forward to the positive outcome of a situation",
            relaxed: "Confident in your current reality"
        }
    },
    {
        base: 'Feeling Down',
        id: 'down',
        questions: {
            sad: "My current situation or the outcome of a recent situation",
            nostalgic: "Is it something you miss or are reminiscent of",
            lonely: "Do you feel alone mostly and like you have do deal with things yourself",
            empowered: "Down and in need of motivation"
        }
    },
    {
        base: 'Feeling Agitated',
        id: 'agitation',
        questions: {
            frustrated: "Due to the outcome of something which might be repetitive",
            angry: "Due to an action or the action of someone else towards you",
            stressed: "Due to a routine that is now taking a toll on your mind and body"
        }
    },
    {
        base: 'Might this be anxiety?',
        id: 'anxiety',
        questions: {
            anxious: "Do you think your current feeling is best explained as being a result of your anxiety",
        }
    },
]
const mappedMoods = [
    {
        id: 'stressed',
        mood: 'Stressed',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'anxious',
        mood: 'Anxious',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'frustrated',
        mood: 'Frustrated',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'angry',
        mood: 'Angry',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'nostalgic',
        mood: 'Nostalgic',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'lonely',
        mood: 'Lonely',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        mood: 'Sad',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'relaxed',
        mood: 'Relaxed',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'happy',
        mood: 'Happy',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'empowered',
        mood: 'Empowered',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },
    {
        id: 'optimistic',
        mood: 'Optimistic',
        api_calls: [
            {
                spotify: '',
                quote: '',
                book: '',
                podcast: ''
            }
        ]
    },

    //, "frustrated", "angry", "nostalgic", "lonely", "sad","relaxed", "happy", "empowered", "optimistic"
]