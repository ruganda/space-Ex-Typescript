import React from 'react';
import badge from '.././assets/images/badge-1.png';
import { dummy } from '../dummy';
import { connect } from "react-redux";
import { launchesAction } from '../redux/actions/launchesAction'

interface Props {
  launchesAction: any,
  launches: [Object],
  processing: boolean
}
interface State {

}
export class Launches extends React.Component<Props, State> {

  componentDidMount() {
    const { launchesAction } = this.props;
    launchesAction();

  }

  render() {
    //   const { launches, processing}= this.props

    console.log(this.props.launches, 'launches')
    const getLaunches = dummy.map((launch: any) => (
      <div>
        <div className="card" style={{ width: "300px" }} key={launch.flight_number}>
          <img className="card-img-top" src={launch.links.mission_patch} alt="Card image"></img>
          <div className="card-img-overlay">
            <h4 className="card-title" style={{ background: "white" }}>{launch.mission_name}</h4>
            <p className="card-text" style={{ background: "white" }}>{launch.launch_year}</p>
            <a href="#" className="btn btn-primary">more...</a>
          </div>
          <div />
        </div>
      </div>
    )
    )

    const launchesCard = dummy.map((launch: any) => (
      <div className="card-group">
        <div className="card">
          <img style={{ width: "300px" }} src={launch.links.mission_patch} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{launch.mission_name}</h5>
            <p className="card-text">{launch.launch_year}</p>
            <a href="#" className="btn btn-primary">more...</a>
          </div>
        </div>
      </div>
    ))

    return (
      <div className="launches-container">
        {getLaunches}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  processing: state.processing,
  launches: state.launches
})

export default connect(mapStateToProps, { launchesAction })(Launches);

