import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ArtistInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
img{
    width: 100vw;
    height: 100vh;
}`

class Artist extends Component {
    state = {
        artist: {},
        songs: [],
    }

    componentDidMount() {
        const artistId = this.props.match.params.id;
        this.fetchArtistAndSongData(artistId)
    }

    fetchArtistAndSongData = async (artistId) => {
        try {
            const artistResponse = await axios.get(`/api/artists/${artistId}`)
            const songsResponse = await axios.get(`/api/artists/${artistId}/songs`)
            await this.setState({
                artist: artistResponse.data,
                songs: songsResponse.data
            })
        }
        catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    render() {
        const songData = this.state.songs.map(song => (
            <div key={song.id}>
                <h4>{song.title}</h4>
                <audio controls src={song.preview_url}></audio>
            </div>
        ))
        return (
            <div>
                <ArtistInfo >
                    <img src={this.state.artist.photo_url} alt="" />
                    <h1>{this.state.artist.name}</h1>
                </ArtistInfo>
                {songData}
            </div>
        )
    }
}

export default Artist
