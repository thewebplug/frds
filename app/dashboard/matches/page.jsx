"use client";

import Image from "next/image";
import { useState } from "react";

export default function Cases() {
  const [assignee, setAssignee] = useState(null);

 

  return (
    <div className="cases">
      <div className="cases__header">
        <div className="cases__header__title">
          <h2>Matches</h2>
          <h3></h3>
        </div>
      </div>

      <div className="cases__matches">
        <div>
          Nigeria Police Force{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99908 8.05974L1.52941 13.5294L0.46875 12.4688L5.93842 6.99908L0.46875 1.52941L1.52941 0.468754L6.99908 5.93842L12.4688 0.46875L13.5294 1.52941L8.05974 6.99908L13.5294 12.4688L12.4688 13.5294L6.99908 8.05974Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
        <div>
        Immigration{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99908 8.05974L1.52941 13.5294L0.46875 12.4688L5.93842 6.99908L0.46875 1.52941L1.52941 0.468754L6.99908 5.93842L12.4688 0.46875L13.5294 1.52941L8.05974 6.99908L13.5294 12.4688L12.4688 13.5294L6.99908 8.05974Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
        <div>
        Opebi{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99908 8.05974L1.52941 13.5294L0.46875 12.4688L5.93842 6.99908L0.46875 1.52941L1.52941 0.468754L6.99908 5.93842L12.4688 0.46875L13.5294 1.52941L8.05974 6.99908L13.5294 12.4688L12.4688 13.5294L6.99908 8.05974Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
      </div>

      <div className="cases__table">
        <div className="cases__table__header">
          <div>
           
            Match
          </div>
          <div>
          First Name
          </div>
          <div>
          Middle Name
          </div>
          <div>
          Last Name
          </div>
          <div>
          Source Database
          </div>
          <div>
          Sex
          </div>
          <div>
          State
          </div>
         
        </div>

        <div
          className="cases__table__body"
          onClick={() => {
            if (assignee) {
              window.location.href = "/justice/dashboard/case-details";
            }
          }}
        >
          <div className="cases__table__body__match">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

99.9%
          </div>
          <div className="cases__table__body__user">
          <Image
width={40}
height={40}
            alt=""
            src="/assets/Image (2).png"
            style={{ borderRadius: "50%" }}
          />
            <div>Frank</div>
          </div>
          <div className="cases__table__body__result">

            <div>Frank</div>
          </div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          
        
        </div>
        <div
          className="cases__table__body"
          onClick={() => {
            if (assignee) {
              window.location.href = "/justice/dashboard/case-details";
            }
          }}
        >
          <div className="cases__table__body__match">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

99.9%
          </div>
          <div className="cases__table__body__user">
          <Image
width={40}
height={40}
            alt=""
            src="/assets/Image (2).png"
            style={{ borderRadius: "50%" }}
          />
            <div>Frank</div>
          </div>
          <div className="cases__table__body__result">

            <div>Frank</div>
          </div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          
        
        </div>
        <div
          className="cases__table__body"
          onClick={() => {
            if (assignee) {
              window.location.href = "/justice/dashboard/case-details";
            }
          }}
        >
          <div className="cases__table__body__match">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

99.9%
          </div>
          <div className="cases__table__body__user">
          <Image
width={40}
height={40}
            alt=""
            src="/assets/Image (2).png"
            style={{ borderRadius: "50%" }}
          />
            <div>Frank</div>
          </div>
          <div className="cases__table__body__result">

            <div>Frank</div>
          </div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          
        
        </div>
        <div
          className="cases__table__body"
          onClick={() => {
            if (assignee) {
              window.location.href = "/justice/dashboard/case-details";
            }
          }}
        >
          <div className="cases__table__body__unmatch">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="#D6003B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


11%
          </div>
          <div className="cases__table__body__user">
          <Image
width={40}
height={40}
            alt=""
            src="/assets/Image (2).png"
            style={{ borderRadius: "50%" }}
          />
            <div>Frank</div>
          </div>
          <div className="cases__table__body__result">

            <div>Frank</div>
          </div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          <div>EFCC</div>
          
        
        </div>
        
        <div className="cases__table__footer">
          <div className="cases__table__footer__nav">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div>Previous</div>
          </div>

          {/* pagination */}

          <div className="cases__table__footer__nav">

<div>Next</div>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
        </div>
        
      </div>

    
    </div>
  );
}
