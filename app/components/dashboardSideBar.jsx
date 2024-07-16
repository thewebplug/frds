"use client";

import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();

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
