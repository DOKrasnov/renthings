import React from "react";
import UserProfile from "../user_profile/userProfile";
import "./header.scss";
import RequestService from "../services/requestServices";

export default class Header extends React.Component {
    constructor(props) {
      this.super(props);
      this.state = {
        user: {},
      }
    }
  
    render() {
      const {user} = this.state;
      // const {userId} = this.props;
       return (
         <header className="header">
          
           <div className="subscribe_background">
              <div className="subscribe_bar"> 
                 <div className="subscribes">
                    <div className="subscr_title"> Подпишись!</div>
                    <div className="subscr_img"><img src="/renthings/img/twitter.svg" /> </div>
                    <div className="subscr_img"><img src="/renthings/img/youtube.svg" /> </div>
                    <div className="subscr_img"><img src="/renthings/img/facebook.svg" /> </div>
                 </div>
              </div>
           </div>
          
           <div className="navigation_background">
              <div className="navigation_bar"> 
                <div className="logo"><img src="/renthings/img/logo.svg" /></div>
                <div className="tabs"> 
                    <div className="all_requests">Link to ----- Все запросы</div>
                    <div className="my_requests">Мои запросы</div>
                    <div className="my_response">Мои отклики</div>
                </div>
                <div className="profile">
                    <div className="my_location_icon">
                       <img src="/renthings/img/geo_marker.svg" />
                       Йошкар-Ола
                    </div>
                    <div className="user_profile">
                       <UserProfile
                         avatar="/renthings/js/user_profile/avatar_img/smirnov.png"
                         username='Михаил Смирнов'
                       />
                    </div>
                </div>
              </div>
            </div>
         
        </header>
        );
    }
    
    componentDidMount () {
      requestService.getUser()
      .then(function(user) {
        this.setState({
          user: user || {},
          //users
        });
      });
      /*fetch('/renthings/php/login.php', {
            method: "POST",
            body: new FormData(form),
          }).then(response=>{
            return response.text();
          }).then(text => {
              document.querySelector(".for_fetch_data").innerHTML=text;
        });*/
    }
}

