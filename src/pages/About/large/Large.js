import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../About.css'
import { fetchAsset } from '../../../actions/actionCreators'

const styles = {
  article: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  wrapper: {
    paddingTop: '60px',
  },
  header: {
    fontSize: '54px',
    fontWeight: '100',
    paddingLeft: '30px',
  },
  articleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  article: {
    width: '40%',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  imgContainer: {
    width: '60%',
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

class _Large extends Component {
  componentDidMount() {
    if (!this.props.asset.payload) {
      this.props.onFetchAsset('1azTxIL4DQw5mwAk3t1bTJ')
    }
  }

  render() {
    let topImageUrl = ''
    if (this.props.asset.Pricing_closeup) {
      topImageUrl = `${this.props.asset.Pricing_closeup.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div style={styles.wrapper}>
        <h2 style={styles.header}>Om mig</h2>
        <div style={styles.articleWrapper}>
          <article style={styles.article}>
            <p className="font-about">
              Så länge jag kan minnas har jag haft ett behov av och en längtan att få uttrycka mig i konst. Att få fånga
              platser, individer och stunder, klä känslor i färg och skapa något bestående att dela med andra.
            </p>
            <p className="font-about">
              Idag ägnar jag mycket tid åt att teckna i Stavalund: en släktgård djupt belägen i den norrländska skogen.
              När jag är omgiven av naturen och tystnaden här, hittar jag som mest ro och inspiration.
            </p>
            <p className="font-about">
              I alla mina tavlor finns en strimma av styrka, lugn och frihet – och en liten del av den vackra naturen.
              Med det som grund tecknar jag de själar som är och har varit så betydelsefulla för dig och andra att de
              förtjänar att för alltid få leva kvar i färg.
            </p>
            <p className="font-about-end">
              <i>/Therese Åhlund</i>
            </p>
          </article>
          <div style={styles.imgContainer}>
            <div
              style={{ backgroundImage: `url(${topImageUrl})`, backgroundSize: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

const Large = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Large)

export default Large
