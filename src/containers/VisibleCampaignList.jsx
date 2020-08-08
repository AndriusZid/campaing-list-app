import { connect } from 'react-redux'
import { fetchCampaigns } from '../actions'
import CampaignList from '../components/CampaignList.jsx'

const getVisibleCampaigns = (campaigns) => {
  return campaigns.campaigns.filter(c => Date.parse(c.endDate) > Date.parse(c.startDate))
}

const mapStateToProps = state => ({
  campaigns: getVisibleCampaigns(state.campaigns),
  isLoaded: state.users.isFetching
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchCampaigns())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignList)
