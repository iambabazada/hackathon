import React from 'react'
import '../myAccount/MyAccount.css'
import Avatar from '../../assets/images/Ellipse 76.png'
import Badge from '../../assets/images/badge_green 1.png'

const MyAccount = () => {
  return (
    <div class="profile_container">
        <div className="profile_id">
            <div className="image">
                <img src={Avatar} alt="" />
            </div>
            <div className="profile_description">
                <h4>Aysel Məmmədova</h4>
                <p>İstifadəçi ID: #00001</p>
                <span>Ağaclar: 55</span>
            </div>
        </div>
        <div className="badge">
            <img src={Badge} alt="" />
            <img src={Badge} alt="" />
            <img src={Badge} alt="" />
        </div>
    </div>
  )
}

export default MyAccount
