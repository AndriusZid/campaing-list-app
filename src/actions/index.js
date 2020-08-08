import fetch from 'cross-fetch'
import campaignsData from '../data/campaigns'

// action types
export const ADD_CAMPAIGN = 'ADD_CAMPAIGN'
export const REQUEST_CAMPAIGNS = 'REQUEST_CAMPAIGNS'
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS'
export const SET_LOADING = 'SET_LOADING'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

// action creators
export function addCampaign(campaign) {
    return { type: ADD_CAMPAIGN, campaign }
}

export function requestCampaigns(campaigns) {
    return { type: REQUEST_CAMPAIGNS, campaigns }
}

export function receiveCampaigns(json) {
    return {
        type: RECEIVE_CAMPAIGNS,
        campaigns: json,
        receivedAt: Date.now()
    }
}

export function fetchCampaigns(campaigns, users) {
    // TODO: now only user are actualy fetched, MVP is to load campaigns from file
    return function (dispatch) {
        dispatch(requestCampaigns(campaigns))
        dispatch(requestUsers(users))

        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    dispatch(receiveUsers(json))

                    const userMap = json.reduce((result, item) => {
                        result[item.id] = item;
                        return result
                    }, {})

                    const mappedCampaigns = campaignsData.map(c => ({
                        name: c.name,
                        id: c.id,
                        startDate: c.startDate,
                        endDate: c.endDate,
                        budget: (c.Budget).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }),
                        status: Date.now() < Date.parse(c.endDate) ? 'Active' : 'Inactive',
                        user: userMap[c.userId] ? userMap[c.userId].name : 'Unknown user'
                    }))

                    dispatch(receiveCampaigns(mappedCampaigns))
                }, 2000);
            })
    }
}

export function requestUsers(users) {
    return { type: REQUEST_USERS, users }
}

export function receiveUsers(json) {
    return {
        type: RECEIVE_USERS,
        users: json,
        receivedAt: Date.now()
    }
}
