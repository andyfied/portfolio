import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../About.css'
import { fetchAsset } from '../../../actions/actionCreators'

const styles = {
  article: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  img: {
    width: '100%',
  },
}

const mapStateToProps = state => {
  return {
    asset: state.asset,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAsset: id => {
      dispatch(fetchAsset(id))
    },
  }
}

class _Small extends Component {
  componentDidMount() {
    if (!this.props.asset.payload) {
      this.props.onFetchAsset('1azTxIL4DQw5mwAk3t1bTJ')
    }
  }

  render() {
    let imageUrl = ''
    if (this.props.asset.Pricing_closeup) {
      imageUrl = `${this.props.asset.Pricing_closeup.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div className="pageContent">
        <img style={styles.img} alt="About" src={imageUrl} />
        <article style={styles.article}>
          <h2>Om mig</h2>
          <p className="font-about">
            Så länge jag kan minnas har jag haft ett behov av och en längtan att få uttrycka mig i konst. Att få fånga
            platser, individer och stunder, klä känslor i färg och skapa något bestående att dela med andra.
          </p>
          <p className="font-about">
            Idag ägnar jag mycket tid åt att teckna i Stavalund: en släktgård djupt belägen i den norrländska skogen.
            När jag är omgiven av naturen och tystnaden här, hittar jag som mest ro och inspiration.
          </p>
          <p className="font-about">
            I alla mina tavlor finns en strimma av styrka, lugn och frihet – och en liten del av den vackra naturen. Med
            det som grund tecknar jag de själar som är och har varit så betydelsefulla för dig och andra att de
            förtjänar att för alltid få leva kvar i färg.
          </p>
          <p className="font-about">
            <i>/Therese Åhlund</i>
          </p>
        </article>
      </div>
    )
  }
}

const Small = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Small)

export default Small
