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
            relaxed: "Confident in your current reality, relaxed"
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
export const playlistOptions = {
    stressed: [
        'instrumental', 'rnb'
    ],
    frustrated: [
        'ambient', 'hiphop', 'focus'
    ],
    angry: [
        'metal'
    ],
    nostalgic: [
        'blues', 'country'
    ],
    lonely: [
        'country'
    ],
    sad: [
        'mood', 'country'
    ],
    relaxed: [
        'rnb', 'sleep'
    ],
    happy: [
        'summer', 'afro', 'party'
    ],
    empowered: [
        'metal', 'pop', 'classical'
    ],
    optimistic: [
        'afro', 'party', 'alternative'
    ],
    anxious: [
        'chill'
    ]

}
export const albumOptions = {
    stressed: [
        '1CEODgTmTwLyabvwd7HBty',
        '4LH4d3cOWNNsVw41Gqt2kv'
    ],
    frustrated: [
        '4LaRYkT4oy47wEuQgkLBul',
        '7ycBtnsMtyVbbwTfJwRjSP'
    ],
    angry: [
        '2Lq2qX3hYhiuPckC8Flj21',
        '6t7956yu5zYf5A829XRiHC'
    ],
    nostalgic: [
        '0BwWUstDMUbgq2NYONRqlu',
        '097eYvf9NKjFnv4xA9s2oV'
    ],
    lonely: [
        '7EJ0OT5ZqybXxcYRa6mccM',
        '5duyQokC4FMcWPYTV9Gpf9'
    ],
    sad: [
        '0ptlfJfwGTy0Yvrk14JK1I',
        '097eYvf9NKjFnv4xA9s2oV'
    ],
    relaxed: [
        '7Eoz7hJvaX1eFkbpQxC5PA',
        '748dZDqSZy6aPXKcI9H80u'
    ],
    happy: [
        '2ZytN2cY4Zjrr9ukb2rqTP',
        '4WrDwO2xf0pxNmrQpb7e5q'
    ],
    empowered: [
        '2cWBwpqMsDJC1ZUwz813lo',
        '28Pt7Q4ikXNPOEbtGnKlFA'
    ],
    optimistic: [
        '7dK54iZuOxXFarGhXwEXfF',
        '6QaVfG1pHYl1z15ZxkvVDW'
    ],
    anxious: [
        '6dVIqQ8qmQ5GBnJ9shOYGE',
        '748dZDqSZy6aPXKcI9H80u'
    ]
}