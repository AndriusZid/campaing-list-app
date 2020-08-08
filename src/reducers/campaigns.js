import { ADD_CAMPAIGN, REQUEST_CAMPAIGNS, RECEIVE_CAMPAIGNS } from '../actions'

export default function campaigns(
    state = {
        isFetching: false,
        campaigns: []
    },
    action) {
    switch (action.type) {
        case ADD_CAMPAIGN:
            return [
                ...state.campaigns,
                {
                    id: state.campaigns.length,
                    name: action.name,
                    startDate: action.startDate,
                    endDate: action.endDate,
                    budget: action.budget,
                    userId: action.userId,
                }
            ]
        case REQUEST_CAMPAIGNS:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE_CAMPAIGNS:
            return Object.assign({}, state, {
                isFetching: false,
                campaigns: action.campaigns,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}
