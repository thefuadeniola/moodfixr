import { podcastOptions, artisteOptions } from "@/constants/data"
import { baseMoods } from "@/constants/data"

export function setMood(question, base){
    let questionObject = {}
    let mood = ''
    for (let i = 0; i < baseMoods.length; i++) {
        if (baseMoods[i].base === base) {
            questionObject = baseMoods[i].questions
        }
    }
    Object.entries(questionObject).map((entry) => {
        if(entry[1] == question) {
            mood = entry[0]
        }
    })
    return mood
}

export function decideApi(media, question) {
    if (media == 'book') {
        fetchBook(`${question} books`)
    } else if (media == 'music') {
        decideMusicType()
    } else if (media == 'podcast') {
        fetchPodcast(question)
    } else if (media == 'videos') {
        fetchYoutubeVideo(`${question} mood playlist`)
    }
}

export function decideMusicType(sliderValue) {
    if (sliderValue <= 4) {
        fetchMusicByArtiste(question)
    } else if (sliderValue > 4 && sliderValue <= 7) {
        fetchMusicByAlbum(question)
    } else {
        fetchPlaylist(question)
    }
}

function fetchPodcast(mood) {
    let specificPodcast = []
    Object.entries(podcastOptions).map((podcastOption) => {
        if (podcastOption[0] == mood) {
            specificPodcast = podcastOption[1]
        }
    })
    const random = Math.floor(Math.random() * (specificPodcast.length))
    let searchPodcast = specificPodcast[random]
    return searchPodcast
}

function fetchYoutubeVideo(string) {

}

function fetchBook(string) {

}

function fetchMusicByArtiste(mood) {
    let specificArtistes = []
    Object.entries(artisteOptions).map((artisteOption) => {
        if (artisteOption[0] == mood) {
            specificArtistes = artisteOption[1]
        }
    })
    const random = Math.floor(Math.random() * (specificArtistes.length))
    let searchArtiste = specificArtistes[random]
    return searchArtiste
}

function fetchMusicByAlbum(mood) {

}
function fetchPlaylist(mood) {

}