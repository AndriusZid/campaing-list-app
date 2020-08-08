import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Campaign from './Campaign.jsx'
import './CampaignList.scss'

class CampaignList extends Component {
    render() {
        let button;

        if (this.props.isLoaded) {
            button = 'Loading...';
        } else {
            button = <button onClick={this.props.fetchData}>Load data</button>;
        }

        return (
            <div>
                <table className="campaign-table">
                    <thead className="campaign-table__head">
                        <tr>
                            {Object.keys(this.props.campaigns[0] || []).map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.campaigns || []).map(campaign => (
                            <Campaign
                                key={campaign.id} {...campaign}
                            />
                        ))}
                    </tbody>
                </table>
                {button}
            </div>
        )
    }
}

CampaignList.propTypes = {
    campaigns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            budget: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
        })
    ).isRequired,
    isLoaded: PropTypes.bool.isRequired,
    fetchData: PropTypes.func.isRequired
}

export default CampaignList