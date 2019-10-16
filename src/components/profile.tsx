import React from 'react'
import avatar from '../assets/images/img_avatar1.png'

interface Props {

}

export default function profile() {
  return (
    <div>
      <div className="card" style={{width:"400px"}}>
        <img className="card-img-top" src={avatar} alt="Card image"></img>
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
</div>
      </div>
      )
    }
