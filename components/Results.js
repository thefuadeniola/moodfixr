'use client'
import { podcastOptions, artisteOptions, albumOptions, playlistOptions } from "@/constants/data"
import React from 'react'
import { useFormContext } from '@/context/formContext'
import { setMood } from '@/lib/utils/searchObject'
import Loading from "./looadingstate/Loading"
import Suggestions from "./looadingstate/Suggestions"

const Results = () => {
    const { base, media, question, numValue, results, setResults } = useFormContext()
    const mood = setMood(question, base)

    if (mood) {
        decideApi(media, mood)
    }

    function decideApi(media, mood) {
        if (media == 'book') {
            fetchBook(`${mood} books`)
        } else if (media == 'music') {
            decideMusicType(numValue)
        } else if (media == 'podcast') {
            decidePodcast(mood)
        } else if (media == 'videos') {
            fetchYoutubeVideo(`${mood} mood playlist`)
        }
    }

    function decideMusicType(sliderValue) {
        if (sliderValue <= 4) {
            decideMusicByArtiste(mood)
        } else if (sliderValue > 4 && sliderValue <= 7) {
            decideMusicByAlbum(mood)
        } else {
            decideMusicByPlaylist(mood)
        }
    }

    function decidePodcast(mood) {
        let specificPodcast = []
        Object.entries(podcastOptions).map((podcastOption) => {
            if (podcastOption[0] == mood) {
                specificPodcast = podcastOption[1]
            }
        })
        const random = Math.floor(Math.random() * (specificPodcast.length))
        let searchPodcast = specificPodcast[random]
        if (searchPodcast) {
            findPodcast(searchPodcast)
        }
    }

    function findPodcast(string) {
        // API CALL
    }


    function fetchYoutubeVideo(string) {
        // API CALL
    }

    function fetchBook(string) {
        // API CALL
    }

    function decideMusicByArtiste(mood) {
        let specificArtistes = []
        Object.entries(artisteOptions).map((artisteOption) => {
            if (artisteOption[0] == mood) {
                specificArtistes = artisteOption[1]
            }
        })
        const random = Math.floor(Math.random() * (specificArtistes.length))
        let searchArtiste = specificArtistes[random]
        if (searchArtiste) {
            findMusicByArtiste(searchArtiste)
        }
    }
    function decideMusicByAlbum(mood) {
        let specificAlbums = []
        Object.entries(albumOptions).map((albumOption) => {
            if (albumOption[0] == mood) {
                specificAlbums = albumOption[1]
            }
        })
        const random = Math.floor(Math.random() * (specificArtistes.length))
        let searchAlbum = specificArtistes[random]
        if (searchAlbum) {
            fetchAlbum(searchAlbum)
        }
    }
    function decideMusicByPlaylist(mood) {
        let specificPlaylists = []
        Object.entries(playlistOptions).map((playlistOption) => {
            if (playlistOption[0] == mood) {
                specificPlaylists = playlistOption[1]
            }
        })
        const random = Math.floor(Math.random() * (specificPlaylists.length))
        let searchPlaylist = specificPlaylists[random]
        if (searchPlaylist) {
            fetchPlaylist(searchPlaylist)
        }
    }


    function findMusicByArtiste(string) {
        // API CALL
    }

    function fetchAlbum(mood) {
        // API CALL
    }
    function fetchPlaylist(mood) {
        // API CALL
    }


    return (
        results ? <Suggestions /> : <Loading />
    )
}

export default Results