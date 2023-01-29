/** @format */

import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import NavBackButton from "../../components/NavBackButton";
import { IconStarFill, IconStarOutline } from "../../iconsJSX";

const UserDetails = () => {
  return (
    <Layout>
      <NavBackButton previousPage="Users" />
      <StyleUserDetails>
        <div className="headerActions">
          <h2 className="title">UserDetails</h2>
          <button type="button" className="danger">
            Blacklist User
          </button>
          <button type="button" className="ocean">
            Activate User
          </button>
        </div>
        <div className="userInfoPlate">
          <div className="upperPlate">
            <div className="profile">
              <img src={process.env.PUBLIC_URL + "/images/avatar.png"} className="profileIcon" alt="" />

              <span className="details">
                <label htmlFor="">Grace Effiom</label>
                <p>LSQFf587g90</p>
              </span>
            </div>
            <div className="tier">
              <span>
                <p>User's Tier</p>
                <div className="rating">
                  {" "}
                  <IconStarFill />
                  <IconStarOutline />
                  <IconStarOutline />{" "}
                </div>
              </span>
            </div>
            <div className="accountInfo">
              <span>
                <label>₦200,000.00</label>
                <p>9912345678/Providus Bank</p>
              </span>
            </div>
          </div>
          <div className="lowerPlate">
            <ul>
              <li className="active">General Details</li>
              <li>Documents</li>
              <li>Bank Details</li>
              <li>Loans</li>
              <li>Savings</li>
              <li>App and System</li>
            </ul>
          </div>
        </div>

        <div className="otherUserInfoPlate">
          <div className="innerPlate">
            <h5 className="heading">Personal Information</h5>
            <div className="infos">
              <div className="group">
                <label htmlFor="">FULL NAME</label>
                <p>Grace Effiom</p>
              </div>
              <div className="group">
                <label htmlFor="">Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="group">
                <label htmlFor="">Email Address</label>
                <p>grace@gmail.com</p>
              </div>
              <div className="group">
                <label htmlFor="">Bvn</label>
                <p>07060780922</p>
              </div>
              <div className="group">
                <label htmlFor="">Gender</label>
                <p>Female</p>
              </div>
              <div className="group">
                <label htmlFor="">Marital status</label>
                <p>Single</p>
              </div>
              <div className="group">
                <label htmlFor="">Children</label>
                <p>None</p>
              </div>
              <div className="group">
                <label htmlFor="">Type of residence</label>
                <p>Parent’s Apartment</p>
              </div>
            </div>
          </div>
          <div className="innerPlate">
            <h5 className="heading">Education and Employment</h5>
            <div className="infos">
              <div className="group">
                <label htmlFor="">level of education</label>
                <p>B.Sc</p>
              </div>
              <div className="group">
                <label htmlFor="">employment status</label>
                <p>Employed</p>
              </div>
              <div className="group">
                <label htmlFor="">sector of employment</label>
                <p>FinTech</p>
              </div>
              <div className="group">
                <label htmlFor="">Duration of employment</label>
                <p>2 years</p>
              </div>
              <div className="group">
                <label htmlFor="">office email</label>
                <p>grace@lendsqr.com</p>
              </div>
              <div className="group">
                <label htmlFor="">Monthly income</label>
                <p>₦200,000.00- ₦400,000.00</p>
              </div>
              <div className="group">
                <label htmlFor="">loan repayment</label>
                <p>40,000</p>
              </div>
            </div>
          </div>

          <div className="innerPlate">
            <h5 className="heading">Socials</h5>
            <div className="infos">
              <div className="group">
                <label htmlFor="">Twitter</label>
                <p>@grace_effiom</p>
              </div>
              <div className="group">
                <label htmlFor="">Facebook</label>
                <p>Grace Effiom</p>
              </div>
              <div className="group">
                <label htmlFor="">Instagram</label>
                <p>@grace_effiom</p>
              </div>
            </div>
          </div>
          <div className="innerPlate">
            <h5 className="heading">Guarantor</h5>
            <div className="infos">
              <div className="group">
                <label htmlFor="">full Name</label>
                <p>Debby Ogana</p>
              </div>
              <div className="group">
                <label htmlFor="">Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="group">
                <label htmlFor="">07060780922</label>
                <p>07060780922</p>
              </div>
              <div className="group">
                <label htmlFor="">Relationship</label>
                <p>Sister</p>
              </div>
            </div>
            <br />
            <div className="infos">
              <div className="group">
                <label htmlFor="">full Name</label>
                <p>Debby Ogana</p>
              </div>
              <div className="group">
                <label htmlFor="">Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="group">
                <label htmlFor="">07060780922</label>
                <p>07060780922</p>
              </div>
              <div className="group">
                <label htmlFor="">Relationship</label>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
      </StyleUserDetails>
    </Layout>
  );
};

const StyleUserDetails = styled.section`
  .headerActions {
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    gap: 20px;
    align-items: center;
    margin-bottom: 40px;
    h2 {
      margin: 0;
    }
    button {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      background-color: transparent;
      outline: none;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      height: min-content;
      &.danger {
        color: #e4033b;
        border: 1px solid #e4033b;
        border-radius: 8px;
      }
      &.ocean {
        color: #39cdcc;
        border: 1px solid #39cdcc;
        border-radius: 8px;
      }
    }
  }

  .userInfoPlate {
    background: #ffffff;
    border: 1px solid rgba(33, 63, 125, 0.06);
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 4px;

    label {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      color: #213f7d;
    }
    p {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #545f7d;
    }

    .upperPlate {
      display: flex;
      align-items: center;

      & > div {
        padding: 30px;
        position: relative;

        & > span {
          display: grid;
          row-gap: 10px;
        }

        &:after {
          position: absolute;
          content: "";
          background-color: transparent;
          left: 0;
          width: 100%;
          height: 80px;
          border-right: 1px solid #545f7d2e;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .profile {
        display: flex;
        align-items: center;
        gap: 20px;
        img {
          width: 100px;
          aspect-ratio: 1/1;
        }
      }
    }

    .lowerPlate {
      ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        li {
          list-style: none;
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          width: 100%;
          color: rgba(0, 0, 0, 0.8);
          padding: 10px;
          cursor: pointer;

          &.active {
            color: #39cdcc;
            position: relative;
            &:after {
              content: "";
              position: absolute;
              bottom: 0;
              width: 80%;
              left: 50%;
              transform: translateX(-50%);
              height: 2px;
              background-color: #39cdcc;
            }
          }
        }
      }
    }
  }
  .otherUserInfoPlate {
    margin-top: 30px;
    background: #ffffff;
    border: 1px solid rgba(33, 63, 125, 0.06);
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    display: grid;
    gap: 30px;
    padding: 30px;
    h5.heading {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #213f7d;
    }
    label {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      color: #545f7d;

      //   white-space: nowrap;
    }
    p {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #545f7d;
    }
    .innerPlate {
      display: grid;
      gap: 30px;
    }
    .infos {
      display: grid;
      gap: 30px;
      //   grid-template-columns: repeat(5, 200px);
      grid-template-columns: repeat(5, minmax(100px, 1fr));
      padding-bottom: 28px;
      border-bottom: 1px solid #213f7d1e;
    }
    .group {
      display: grid;
      gap: 9px;
    }
  }
`;

export default UserDetails;
