"use client";
import { usePathname } from "next/navigation";

export default function AdminTabs() {
  const pathname = usePathname();

  return (
    <>
      <div className="admin__inner__main__nav">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer"
          onClick={() => (window.location.href = "/dashboard")}
        >
          <path
            d="M10.0211 3.40985L7.14109 1.39485C6.35609 0.844847 5.15109 0.874847 4.39609 1.45985L1.89109 3.41485C1.39109 3.80485 0.996094 4.60485 0.996094 5.23485V8.68485C0.996094 9.95985 2.03109 10.9998 3.30609 10.9998H8.69609C9.97109 10.9998 11.0061 9.96485 11.0061 8.68985V5.29985C11.0061 4.62485 10.5711 3.79485 10.0211 3.40985ZM6.37609 8.99985C6.37609 9.20485 6.20609 9.37485 6.00109 9.37485C5.79609 9.37485 5.62609 9.20485 5.62609 8.99985V7.49985C5.62609 7.29485 5.79609 7.12485 6.00109 7.12485C6.20609 7.12485 6.37609 7.29485 6.37609 7.49985V8.99985Z"
            fill="#99A2BB"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/admin")}
        >
          Super Admin
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div>
          {pathname?.split("/")[3]
            ? pathname?.split("/")[3]
            : "User Management"}
        </div>
      </div>
      
      <div className="admin__inner__main__title">Super Admin</div>

      <div className="admin__inner__main__tabs">
        <div
          className={
            !pathname?.split("/")[3]
              ? "admin__inner__main__tabs__item admin__inner__main__tabs__active"
              : "admin__inner__main__tabs__item"
          }
          onClick={() => (window.location.href = "/admin")}
        >
          User Management
        </div>
        <div
          className={
            pathname?.includes("departments")
              ? "admin__inner__main__tabs__item admin__inner__main__tabs__active"
              : "admin__inner__main__tabs__item"
          }
          onClick={() => (window.location.href = "/admin/departments")}
        >
          Department Management
        </div>
        <div
          className={
            pathname?.includes("support")
              ? "admin__inner__main__tabs__item admin__inner__main__tabs__active"
              : "admin__inner__main__tabs__item"
          }
          onClick={() => (window.location.href = "/admin/support")}
        >
          Support & Feedback
        </div>
        <div
          className={
            pathname?.includes("notification")
              ? "admin__inner__main__tabs__item admin__inner__main__tabs__active"
              : "admin__inner__main__tabs__item"
          }
          onClick={() =>
            (window.location.href = "/admin/notifications")
          }
        >
          Notification{" "}
          {/* <div className="admin__inner__main__tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            pathname?.includes("access-control")
              ? "admin__inner__main__tabs__item admin__inner__main__tabs__active"
              : "admin__inner__main__tabs__item"
          }
          onClick={() =>
            (window.location.href = "/admin/access-control")
          }
        >
          Access Control
        </div>
        <div className="admin__inner__main__tabs__item">Email</div>
        <div
          className={
            pathname?.includes("logs")
              ? "admin__inner__main__tabs__item admin__inner__main__tabs__active"
              : "admin__inner__main__tabs__item"
          }
          onClick={() => (window.location.href = "/admin/logs")}
        >
          Log Activites
        </div>
      </div>
    </>
  );
}
