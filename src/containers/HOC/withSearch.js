import React, { Component } from 'react'
import { fetchWeather } from "../../redux/weatherApp/operators";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'


const withSearch = (WrappedComponent) => {
    class Search extends Component {
        constructor() {
            super()
            this.state = {
                query: ''
            }
            this.handleClick = this.handleClick.bind(this)
            this.handleSearch = this.handleSearch.bind(this)
        }

        handleSearch(event) {
            this.setState({ query: event.target.value })
        }

        handleClick() {
            const { query } = this.state
            const { fetchWeather, history } = this.props

            fetchWeather(query);
            history.push(`/forecast?city=${query}`);
        }

        render() {
            const { handleClick, handleSearch } = this
            return (
                <>
                    <WrappedComponent
                        handleClick={handleClick}
                        handleChange={handleSearch} />
                </>
            )
        }
    }

  
    return compose(withRouter, connect(null, { fetchWeather }))(Search)
}



export default withSearch