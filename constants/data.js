export const steps = [
    {
        name: 'Complete Questionnaire',
        image: '/assets/form.png',
        description: 'Complete the questionnaire to best describe how you feel'
    },
    {
        name: 'Trust the Process',
        image: '/assets/process.png',
        description: 'Let the algorithm run on your results'
    },
    {
        name: 'Soothe Yourself',
        image: '/assets/media.png',
        description: 'Enjoy your preferred media tailored to fix your mood'
    }
]
export const preferredMedia = [
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
    {
        id: 'videos',
        name: 'Videos'
    }

]

export const baseMoods = [
    {
        base: 'Feeling Positive',
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
            empowered: "Down in need of motivation"
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

export const podcastOptions = {
    stressed: [
        "The Stress Less Show",
        "The Overwhelmed Brain"
    ],
    frustrated: [
        "UnF*ck Your Brain",
        "The Life Coach School Podcast"
    ],
    angry: [
        "Angry Americans",
        "The Angry Therapist Podcast"
    ],
    nostalgic: [
        "The Nostalgia Trap",
        "Rewind with Alex Kapelman"
    ],
    lonely: [
        "The Loneliness Lab",
        "The Friendshipping Podcast"
    ],
    sad: [
        "The Griefcast",
        "Terrible, Thanks for Asking"
    ],
    relaxed: [
        "Sleepy",
        "Meditative Story"
    ],
    happy: [
        "The Happiness Lab",
        "The Tony Robbins Podcast",
        "The Moth"
    ],
    empowered: [
        "The School of Greatness",
        "She Explores",
        "How I Built This",
        "TED Talks Daily"
    ],
    optimistic: [
        "The Positive Psychology Podcast",
        "The Tim Ferriss Show"
    ],
    anxious: [
        "The Anxiety Coaches Podcast",
        "The Calmer You Podcast"
    ]
}

export const artisteOptions = {
    stressed: [
        "Ludovico Einaudi", "Max Richter", "Olafur Arnalds", "Yiruma", "Nils Frahm"
    ],
    frustrated: [
        "Alanis Morissette", "Nine Inch Nails", "Limp Bizkit", "Papa Roach", "Korn"
    ],
    angry: [
        "Linkin Park", "Rage", "Against The Machine", "Slipknot", "Eminem", "System of a Down"
    ],
    nostalgic: [
        "The Beatles", "Michael Jackson", "Queen", "ABBA", "Elvis Presley"
    ],
    lonely: [
        "Adele", "Ed Sheeran", "Lana Del Rey", "Bill Withers", "Leonard Cohen"
    ],
    sad: [
        "Adele", "Sam Smith", "Lewis Capaldi", "Billie Eilish", "James Arthur"
    ],
    relaxed: [
        "Jack Johnson", "Norah Jones", "John Mayer", "Ben Howard", "José González"
    ],
    happy: [
        "Pharrell Williams", "Bruno Mars", "Meghan Trainor", "Jason Mraz", "Maroon 5"
    ],
    empowered: [
        "Beyoncé", "Alicia Keys", "Destiny's Child", "Demi Lovato", "Christina Aguilera"
    ],
    optimistic: [
        "Coldplay", "OneRepublic", "Imagine Dragons", "Taylor Swift", "U2"
    ],
    anxious: [
        "Bon Iver", "Radiohead", "Sigur Rós", "Enya", "Explosions in the Sky"
    ]

}