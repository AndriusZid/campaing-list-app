import { connect } from 'react-redux'
import { fetchCampaigns, sortCampaigns } from '../actions'
import CampaignList from '../components/CampaignList.jsx'

const getVisibleCampaigns = (campaigns) => {
  return campaigns.campaigns.filter(c => Date.parse(c.endDate) > Date.parse(c.startDate))
}

const mapStateToProps = state => ({
  campaigns: getVisibleCampaigns(state.campaigns),
  isLoaded: state.users.isFetching,
  sortDirection: state.campaigns.sortDirection,
  sortColumName: state.campaigns.sortColumn,
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchCampaigns()),
  sortColumn: (column, direction) => dispatch(sortCampaigns(column, direction))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignList)
