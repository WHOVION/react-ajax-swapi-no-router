import React, { Component } from "react";
import Starship from "./Starship";
import axios from "axios";


export default class Starships extends Component {
    // need state to hold our api's response
    state = {
        starships: []
    }
    // make the api call in the componentDidMount (after component has loaded)
    async componentDidMount() {
        try {
            const url = `https://swapi.dev/api/starships`
            const response = await axios.get(url)
            this.setState({
                starships: response.data.results
            })
            console.log(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        // map api data that is held in state to an array of starship components
        const starshipComponents = this.state.starships.map((starship, idx) => {
            return (
                <Starship
                    starship={starship}
                    key={`Starship${idx}`}
                />
            )
        })
        return (
            <>
            <div>
                <h1>Starships:</h1>
                {/* loading message with a ternary */}
                {starshipComponents.length > 0 ? starshipComponents : 'still loading...'}
            </div>
            </>
        )
    }
}