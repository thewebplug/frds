"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const mobileMenu = useSelector((state) => state.mobileMenu);
  console.log("pathname", pathname.split("/")?.length);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [analyticsDropdownActive, setAnalyticsDropdownActive] = useState(false);
  const [documentationDropdownActive, setDocumentationDropdownActive] = useState(false);


  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    localStorage.removeItem("token");
    window.location.href = "/login";
    window.scrollTo(0, 0);
  };
  

  console.log('ginger', pathname?.split('/')?.length);

  return (
    <div className="adminDashboard-sidebar">
      <div
         className={pathname?.includes("create-match") ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active" : "adminDashboard-sidebar__item"}
         onClick={() => window.location.href = "/dashboard/create-match"}
      >
        <div>
      

<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2983 10.9514C14.1083 10.9514 13.9183 10.8814 13.7683 10.7314C13.4783 10.4414 13.4783 9.96141 13.7683 9.67141L21.9683 1.47141C22.2583 1.18141 22.7383 1.18141 23.0283 1.47141C23.3183 1.76141 23.3183 2.24141 23.0283 2.53141L14.8283 10.7314C14.6883 10.8714 14.4983 10.9514 14.2983 10.9514Z" fill="#7E92A2"/>
<path d="M18.33 11.7519H13.5C13.09 11.7519 12.75 11.4119 12.75 11.0019V6.17188C12.75 5.76188 13.09 5.42188 13.5 5.42188C13.91 5.42188 14.25 5.76188 14.25 6.17188V10.2519H18.33C18.74 10.2519 19.08 10.5919 19.08 11.0019C19.08 11.4119 18.74 11.7519 18.33 11.7519Z" fill="#7E92A2"/>
<path d="M15.5 22.75H9.5C4.07 22.75 1.75 20.43 1.75 15V9C1.75 3.57 4.07 1.25 9.5 1.25H11.5C11.91 1.25 12.25 1.59 12.25 2C12.25 2.41 11.91 2.75 11.5 2.75H9.5C4.89 2.75 3.25 4.39 3.25 9V15C3.25 19.61 4.89 21.25 9.5 21.25H15.5C20.11 21.25 21.75 19.61 21.75 15V13C21.75 12.59 22.09 12.25 22.5 12.25C22.91 12.25 23.25 12.59 23.25 13V15C23.25 20.43 20.93 22.75 15.5 22.75Z" fill="#7E92A2"/>
</svg>


        </div>
        <div className="adminDashboard-sidebar__item__title">Upload data</div>
      </div>
      <div
        className={pathname?.includes("find-match") ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active" : "adminDashboard-sidebar__item"}
        onClick={() => window.location.href = "/dashboard/find-match"}
      >
        <div>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6667 15.3333H13V10M18.3333 9.66667V7.66667M9 19C11 21 15 21 17 19M7.66667 9.66667V7.66667M9.53333 25C6.54667 25 5.05333 25 3.912 24.4187C2.90851 23.9073 2.09265 23.0915 1.58133 22.088C1 20.9467 1 19.4533 1 16.4667M25 16.4667C25 19.4533 25 20.9467 24.4187 22.088C23.9073 23.0915 23.0915 23.9073 22.088 24.4187C20.9467 25 19.4533 25 16.4667 25M16.4667 1C19.4533 1 20.9467 1 22.088 1.58133C23.0915 2.09265 23.9073 2.90851 24.4187 3.912C25 5.05333 25 6.54667 25 9.53333M9.53333 1C6.54667 1 5.05333 1 3.912 1.58133C2.90851 2.09265 2.09265 2.90851 1.58133 3.912C1 5.05333 1 6.54667 1 9.53333" stroke="#7E92A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div className="adminDashboard-sidebar__item__title">Find match</div>
      </div>
      <div className="adminDashboard-sidebar__item-container">
        <div
          className={
            pathname?.includes("report-and-analytics")
              ? "adminDashboard-sidebar__item-container__item adminDashboard-sidebar__item-container__item-active"
              : "adminDashboard-sidebar__item-container__item"
          }
          onClick={() => setAnalyticsDropdownActive(!analyticsDropdownActive)}
        >
          <div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16.5L3 19.44V11H6M11 14.66L9.43 13.32L8 14.64V7H11M16 13L13 16V3H16M18.81 12.81L17 11H22V16L20.21 14.21L13 21.36L9.53 18.34L5.75 22H3L9.47 15.66L13 18.64"
                  fill="#94A3B8"
                />
              </svg>
            </div>
            <div className="adminDashboard-sidebar__item__title">
              Report & Analytics
            </div>
          </div>
          {analyticsDropdownActive ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34876 3.42336L10.3438 7.4184C10.5365 7.61107 10.5365 7.92345 10.3438 8.11611L9.87782 8.58206C9.68547 8.77441 9.37373 8.77478 9.18093 8.58288L5.9999 5.41675L2.81888 8.58288C2.62608 8.77478 2.31434 8.77441 2.12199 8.58206L1.65604 8.11611C1.46336 7.92343 1.46336 7.61105 1.65604 7.4184L5.65103 3.42336C5.84371 3.23071 6.15609 3.23071 6.34876 3.42336Z"
                fill="#009B07"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>

        <div
          className={
            analyticsDropdownActive
              ? "adminDashboard-sidebar__item-container__sub-items"
              : "adminDashboard-sidebar__item-container__sub-items-inactive"
          }
        >
          <div
            className={
              pathname?.includes("report-and-analytics") &&
              pathname.split("/")?.length < 4 &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href = "/dashboard/report-and-analytics")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Reports Dashboard</div>
          </div>
          <div
            className={
              pathname?.includes("report-and-analytics/admin") && "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href = "/dashboard/report-and-analytics/admin")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Executive Chairman Office</div>
          </div>
          <div
            className={
              pathname?.includes("investigation") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href =
                "/dashboard/report-and-analytics/investigation")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Investigation</div>
          </div>
          <div
            className={
              pathname?.includes("legal-and-prosecution") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href =
                "/dashboard/report-and-analytics/legal-and-prosecution")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Legal & Prosecution</div>
          </div>
          <div
            className={
              pathname?.includes("proceed-of-crime") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href =
                "/dashboard/report-and-analytics/proceed-of-crime")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Proceed of Crime</div>
          </div>
          <div
            className={
              pathname?.includes("finance-and-accounts") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href =
                "/dashboard/report-and-analytics/finance-and-accounts")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Finance & Accounts</div>
          </div>
        </div>
      </div>
      <div className="adminDashboard-sidebar__item-container">
        <div
          className={
            pathname?.includes("documentation")
              ? "adminDashboard-sidebar__item-container__item adminDashboard-sidebar__item-container__item-active"
              : "adminDashboard-sidebar__item-container__item"
          }
          onClick={() => setDocumentationDropdownActive(!documentationDropdownActive)}
        >
          <div>
            <div>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16H20V12H0V16ZM2 13H4V15H2V13ZM0 0V4H20V0H0ZM4 3H2V1H4V3ZM0 10H20V6H0V10ZM2 7H4V9H2V7Z" fill="#8B9DB7"/>
</svg>
            </div>
            <div className="adminDashboard-sidebar__item__title">
            Documentation
            </div>
          </div>
          {documentationDropdownActive ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34876 3.42336L10.3438 7.4184C10.5365 7.61107 10.5365 7.92345 10.3438 8.11611L9.87782 8.58206C9.68547 8.77441 9.37373 8.77478 9.18093 8.58288L5.9999 5.41675L2.81888 8.58288C2.62608 8.77478 2.31434 8.77441 2.12199 8.58206L1.65604 8.11611C1.46336 7.92343 1.46336 7.61105 1.65604 7.4184L5.65103 3.42336C5.84371 3.23071 6.15609 3.23071 6.34876 3.42336Z"
                fill="#009B07"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>

        <div
          className={
            documentationDropdownActive
              ? "adminDashboard-sidebar__item-container__sub-items"
              : "adminDashboard-sidebar__item-container__sub-items-inactive"
          }
        >
          <div
            className={
              pathname?.includes("documentation") &&
              pathname.split("/")?.length < 5 &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href = "/dashboard/documentation")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Document repository</div>
          </div>
          <div
            className={
              pathname?.includes("/documentation/upload") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href =
                "/dashboard/documentation/upload")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Bulk upload</div>
          </div>
        </div>
      </div>
   
      <div
        className="adminDashboard-sidebar__item"
        // onClick={() => window.location.href = "/dashboard/create-case"}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9994 19.2601H10.9294C10.4794 19.2601 10.1094 18.8901 10.1094 18.4401C10.1094 17.9901 10.4794 17.6201 10.9294 17.6201H19.9994C20.4494 17.6201 20.8194 17.9901 20.8194 18.4401C20.8194 18.9001 20.4494 19.2601 19.9994 19.2601Z"
              fill="#94A3B8"
            />
            <path
              d="M19.9994 12.9701H10.9294C10.4794 12.9701 10.1094 12.6001 10.1094 12.1501C10.1094 11.7001 10.4794 11.3301 10.9294 11.3301H19.9994C20.4494 11.3301 20.8194 11.7001 20.8194 12.1501C20.8194 12.6001 20.4494 12.9701 19.9994 12.9701Z"
              fill="#94A3B8"
            />
            <path
              d="M19.9994 6.66979H10.9294C10.4794 6.66979 10.1094 6.29978 10.1094 5.84978C10.1094 5.39978 10.4794 5.02979 10.9294 5.02979H19.9994C20.4494 5.02979 20.8194 5.39978 20.8194 5.84978C20.8194 6.29978 20.4494 6.66979 19.9994 6.66979Z"
              fill="#94A3B8"
            />
            <path
              d="M4.90969 8.02992C4.68969 8.02992 4.47969 7.93992 4.32969 7.78992L3.41969 6.87992C3.09969 6.55992 3.09969 6.03992 3.41969 5.71992C3.73969 5.39992 4.25969 5.39992 4.57969 5.71992L4.90969 6.04992L7.04969 3.90992C7.36969 3.58992 7.88969 3.58992 8.20969 3.90992C8.52969 4.22992 8.52969 4.74992 8.20969 5.06992L5.48969 7.78992C5.32969 7.93992 5.12969 8.02992 4.90969 8.02992Z"
              fill="#94A3B8"
            />
            <path
              d="M4.90969 14.3302C4.69969 14.3302 4.48969 14.2502 4.32969 14.0902L3.41969 13.1802C3.09969 12.8602 3.09969 12.3402 3.41969 12.0202C3.73969 11.7002 4.25969 11.7002 4.57969 12.0202L4.90969 12.3502L7.04969 10.2102C7.36969 9.89021 7.88969 9.89021 8.20969 10.2102C8.52969 10.5302 8.52969 11.0502 8.20969 11.3702L5.48969 14.0902C5.32969 14.2502 5.11969 14.3302 4.90969 14.3302Z"
              fill="#94A3B8"
            />
            <path
              d="M4.90969 20.3302C4.69969 20.3302 4.48969 20.2502 4.32969 20.0902L3.41969 19.1802C3.09969 18.8602 3.09969 18.3402 3.41969 18.0202C3.73969 17.7002 4.25969 17.7002 4.57969 18.0202L4.90969 18.3502L7.04969 16.2102C7.36969 15.8902 7.88969 15.8902 8.20969 16.2102C8.52969 16.5302 8.52969 17.0502 8.20969 17.3702L5.48969 20.0902C5.32969 20.2502 5.11969 20.3302 4.90969 20.3302Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Task</div>
      </div>

      <div
        className={
          pathname?.includes("email")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/dashboard/email")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Email</div>
      </div>

      <div
        className={
          pathname?.includes("chat")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/dashboard/chat")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75ZM17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Message</div>
      </div>

      <div
        className={
          pathname?.includes("finance")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/dashboard/finance")}
      >
        <div>
          <svg
            fill="#94A3B8"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs></defs>
              <title>finance</title>
              <rect x="2" y="28" width="28" height="2"></rect>
              <path
                d="M27,11a1,1,0,0,0,1-1V7a1,1,0,0,0-.66-.94l-11-4a1,1,0,0,0-.68,0l-11,4A1,1,0,0,0,4,7v3a1,1,0,0,0,1,1H6V24H4v2H28V24H26V11ZM6,7.7,16,4.06,26,7.7V9H6ZM18,24H14V11h4ZM8,11h4V24H8ZM24,24H20V11h4Z"
                transform="translate(0 0)"
              ></path>
              <rect
                id="_Transparent_Rectangle_"
                data-name="<Transparent Rectangle>"
                class="cls-1"
                style={{ fill: "none" }}
                width="32"
                height="32"
              ></rect>
            </g>
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Finance</div>
      </div>

      <div
        className={
          pathname?.includes("calendar")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/dashboard/calendar")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                stroke="#7E92A2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Calendar</div>
      </div>
      <div
        className={
          pathname?.includes("admin")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/admin")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2995 7.58018H15.7195C15.3295 7.58018 15.0195 7.27018 15.0195 6.88018C15.0195 6.49018 15.3295 6.18018 15.7195 6.18018H21.2995C21.6895 6.18018 21.9995 6.49018 21.9995 6.88018C21.9995 7.27018 21.6895 7.58018 21.2995 7.58018Z"
              fill="#94A3B8"
            />
            <path
              d="M6.42 7.58018H2.7C2.31 7.58018 2 7.27018 2 6.88018C2 6.49018 2.31 6.18018 2.7 6.18018H6.42C6.81 6.18018 7.12 6.49018 7.12 6.88018C7.12 7.27018 6.8 7.58018 6.42 7.58018Z"
              fill="#94A3B8"
            />
            <path
              d="M10.1414 10.8302C12.3229 10.8302 14.0914 9.0617 14.0914 6.88018C14.0914 4.69865 12.3229 2.93018 10.1414 2.93018C7.95988 2.93018 6.19141 4.69865 6.19141 6.88018C6.19141 9.0617 7.95988 10.8302 10.1414 10.8302Z"
              fill="#94A3B8"
            />
            <path
              d="M21.2989 17.8102H17.5789C17.1889 17.8102 16.8789 17.5002 16.8789 17.1102C16.8789 16.7202 17.1889 16.4102 17.5789 16.4102H21.2989C21.6889 16.4102 21.9989 16.7202 21.9989 17.1102C21.9989 17.5002 21.6889 17.8102 21.2989 17.8102Z"
              fill="#94A3B8"
            />
            <path
              d="M8.28 17.8102H2.7C2.31 17.8102 2 17.5002 2 17.1102C2 16.7202 2.31 16.4102 2.7 16.4102H8.28C8.67 16.4102 8.98 16.7202 8.98 17.1102C8.98 17.5002 8.66 17.8102 8.28 17.8102Z"
              fill="#94A3B8"
            />
            <path
              d="M13.8602 21.0699C16.0417 21.0699 17.8102 19.3014 17.8102 17.1199C17.8102 14.9384 16.0417 13.1699 13.8602 13.1699C11.6786 13.1699 9.91016 14.9384 9.91016 17.1199C9.91016 19.3014 11.6786 21.0699 13.8602 21.0699Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">
          Super Admin Section
        </div>
      </div>
      <div className="adminDashboard-sidebar__item">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9"
                stroke="#7E9EA2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Log out</div>
      </div>
    </div>
  );
}
