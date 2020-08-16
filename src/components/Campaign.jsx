import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Campaign extends Component {
    render() {
        return (
            <tr>
                {Object.keys(this.props).map((key) => {
                    if (key === 'status') {
                        const status = this.props[key]
                        return <td key={key}>{status === 'Active' ? '🟢' : '🔴'} {status}</td>
                    }

                    if (key === 'budget') {
                        return <td key={key}>{this.props[key].toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}</td>
                    }

                    return <td key={key}>{this.props[key]}</td>
                })}
            </tr>
        )
    }
}

Campaign.propTypes = {
    name: PropTypes.string.isRequired
}

export default Campaign
