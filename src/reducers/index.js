import { combineReducers } from 'redux'
import campaigns from './campaigns'
import sorting from './sorting'
import users from './users'

const campaignApp = combineReducers({
    campaigns,
    sorting,
    users,
})

export default campaignApp