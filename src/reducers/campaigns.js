import { ADD_CAMPAIGN, REQUEST_CAMPAIGNS, RECEIVE_CAMPAIGNS, SORT_CAMPAIGNS } from '../actions'

export default function campaigns(
    state = {
        isFetching: false,
        sortColumn: 'name',
        sortDirection: 'ASC',
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
        case SORT_CAMPAIGNS:
            let sortDirection = state.sortDirection === 'ASC' ? 1 : -1;

            // invert sort if clicked on same column twice
            if (state.sortColumn === action.column) {
                sortDirection = sortDirection * -1
            }

            const sortedCampaigns = Object.assign([], state.campaigns).sort((a, b) => {
                const sortColumn = action.column || 'name';

                if (a[sortColumn] === b[sortColumn]) {
                    return 0;
                }

                if (sortColumn.includes('Date')) {
                    return new Date(a[sortColumn]).getTime() < new Date(b[sortColumn]).getTime() ? (-1 * sortDirection) : (1 * sortDirection);
                }

                return a[sortColumn] < b[sortColumn] ? (-1 * sortDirection) : (1 * sortDirection);
            });

            return Object.assign({}, state, {
                campaigns: sortedCampaigns,
                sortColumn: action.column,
                sortDirection: sortDirection === 1 ? 'ASC' : 'DESC'
            });
        default:
            return state
    }
}
