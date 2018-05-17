import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const HeadLine = styled.div`
font-family: 'Roboto Condensed', sans-serif;
text-align: center;`

const StyledArtist = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
align-items: center;
flex-wrap: wrap;`

class ArtistList extends Component {
    state = {
        error: '',
        artists: []
    }


    componentDidMount() {
        this.fetchArtists();
    }

    fetchArtists = async () => {
        try {
            const res = await axios.get('/api/artists');
            await this.setState({ artists: res.data });
            return res.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }

    }

    render() {
        const artistData = this.state.artists.map(artist => (
            <div key={artist.id}>
                <Link to={`/artist/${artist.id}`} >{artist.name}</Link>
            </div>
        ))

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }

        return (
            <div>
                <HeadLine >
                    <h1>All Artists</h1>
                </HeadLine >
                <StyledArtist >
                    {artistData}
                </StyledArtist>
            </div>
        );
    }
}

export default ArtistList