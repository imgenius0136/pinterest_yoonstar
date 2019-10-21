import React, { Component } from "react";
import { withRouter } from "react-router";
import profile from "../imgs/profile7.png";
import "../css/About.scss";

class About extends Component {
  render() {
    return (
      <div class="section">
        <div class="profile_div">
          <figure class="image is-128x128" id="profile_photo">
            <img src={profile} alt="My photo" />
          </figure>
          <div>
            <p class="profile_div_job">Developer</p>
            <p class="profile_div_name">Yoonsup SHIN</p>
            <p class="profile_div_email">imgenius0163@gmail.com</p>
            <p class="profile_div_phone">010-2669-0136</p>
          </div>

          <div>
            <p class="profile_div_stacktitle">Tec Stack</p>
            <table class="profile_div_stack">
              <tr>
                <td class="box">Java</td>
                <td class="box">중급</td>
              </tr>
              <tr>
                <td class="box">Spring</td>
                <td class="box">중급</td>
              </tr>
              <tr>
                <td class="box">Android</td>
                <td class="box">중급</td>
              </tr>
              <tr>
                <td class="box">Js</td>
                <td class="box">중급</td>
              </tr>
              <tr>
                <td class="box">C#</td>
                <td class="box">초중급</td>
              </tr>
              <tr>
                <td class="box">react</td>
                <td class="box">초중급</td>
              </tr>
              <tr>
                <td class="box">prisma-graphql</td>
                <td class="box">초중급</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(About);
