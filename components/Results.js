'use client'
import { podcastOptions, artisteOptions, albumOptions, playlistOptions } from "@/constants/data"
import React, { useEffect, useState } from 'react'
import { useFormContext } from '@/context/formContext'
import { setMood } from '@/lib/utils/searchObject'
import Link from 'next/link'
import Image from "next/image"
import Loading from "./looadingstate/Loading"
import Suggestions from "./looadingstate/Suggestions"

const Results = () => {
    const { base, media, question, numValue, results, setResults } = useFormContext()
    const [mood, makeMood] = useState()
    const [spotify_token, setAccessToken] = useState('')

    async function fetchToken() {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            body: `grant_type=refresh_token&refresh_token=${process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
        })
        const result = await response.json()
        setAccessToken(result.access_token)
    }

    useEffect(() => {
        fetchToken()
    }, [])

    useEffect(() => {
        makeMood(setMood(question, base))
    }, [question])


    useEffect(() => {
        if (mood) {
            decideApi(media, mood)
        }
    }, [mood])

    function decideApi(media, mood) {
        if (media == 'Books') {
            fetchBook(`${mood}books`)
        } else if (media == 'Music') {
            decideMusicType(numValue)
        } else if (media == 'Podcast') {
            decidePodcast(mood)
        } else if (media == 'Videos') {
            fetchYoutubeVideo(`${mood}%20mood%20playlist`)
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
        let searchAlbum1 = specificAlbums[0]
        let searchAlbum2 = specificAlbums[1]
        if (searchAlbum1 && searchAlbum2) {
            fetchAlbum(searchAlbum1, searchAlbum2)
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

    async function findPodcast(string) {
        // API CALL
        const response = await fetch(`https://api.spotify.com/v1/search?q=${string}&type=episode&access_token=${spotify_token}`)
        // , { headers: { Authorization: `Bearer ${spotify_token.access_token}` } }
        const result = await response.json()
        setResults(result)
    }


    async function fetchYoutubeVideo(string) {
        // API CALL
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${string}&type=playlist&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
        const result = await response.json()
        setResults(result)
    }

    async function fetchBook(string) {
        // API CALL
        console.log('fetching book')
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${string}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`)
        const result = await response.json()
        setResults(result)
    }

    async function findMusicByArtiste(string) {
        // API CALL
        const response = await fetch(`https://api.spotify.com/v1/search?q=${string}&type=playlist`, { headers: { Authorization: `Bearer ${spotify_token.access_token}` } })
        const result = await response.json()
        setResults(result)
    }

    async function fetchAlbum(first, second) {
        // API CALL
        const response = await fetch(`https://api.spotify.com/v1/albums?ids=${first}%${second}`, { headers: { Authorization: `Bearer ${spotify_token.access_token}` } })
        const result = await response.json()
        setResults(result)

    }
    async function fetchPlaylist(string) {
        // API CALL
        const response = await fetch(`https://api.spotify.com/v1/search?q=${string}&type=playlist`, { headers: { Authorization: `Bearer ${spotify_token.access_token}` } })
        const result = await response.json()
        setResults(result)
    }

    if (results) { console.log(results) }
    return (
        <Link href='' className='flex justify-center mt-10'>
            <button onClick={decideApi} className='flex flex-row bg-primary-blue-200 justify-center items-center button space-x-2 px-6 py-2 shadow-sm'>
                <h1 className='font-bold'>Fetch some fixes</h1>
                <Image src='/assets/wrench.png' alt='wrench' className='object-contain' height={32} width={32} />
            </button>
        </Link>


    )
}

export default Results