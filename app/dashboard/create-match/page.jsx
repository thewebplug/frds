"use client";
import { createMatch, findMatch } from "@/app/apis/general";
import { countries } from "@/app/utils/countries";
import { lgaList } from "@/app/utils/nigerianStatesData";
import { worldCities } from "@/app/utils/worldCountries";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const forces = ["Nigerian Police Force", "EFFC", "Custom", "Immigration", "BVN", "NIN", "Driver License"];

export default function CreateCase() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [lga, setLga] = useState("");
  const [matchState, setMatchState] = useState("");
  const [forceModal, setForceModal] = useState(false);
  const [force, setForce] = useState("");
  const [searchForce, setSearchForce] = useState("");
  const [filteredForces, setFilteredForces] = useState(forces);
  const [tempImage, setTempImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image1URI, setImage1URI] = useState("");
  const [loading, setLoading] = useState("");
  const [docLoading, setDocLoading] = useState("");
  const mediaRef = useRef(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");




  const handleCreateMatch = async () => {
    setLoading(true)
    const response = await createMatch(
      city,
  firstName,
  gender,
  image1URI,
  lastName,
  middleName,
  email,
  phone,
  force
    );

    if(response?.data?.statusCode === 200) {
      alert("Upload Successful")

    }else {
      alert("Something went wrong")
    }

    console.log('response', response);
    setLoading(false)

  };


  useEffect(() => {
    !forceModal && searchForce?.length > 0 ? setForceModal(true) : ""
    console.log('yooo!');
const temp = forces.filter((item) => item?.toLowerCase()?.trim()?.includes(searchForce?.toLowerCase()?.trim()))
setFilteredForces(temp)
  }, [searchForce])


  const fileUpload = (e, imageType) => {
    setDocLoading(true);

    let files = e.target.files;
    let docType = files[0]?.type.split("/")[1];
    setTempImage(e.target.files)

    const fileToUri = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    };

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileToUri(files[0], (err, result) => {
          if (result) {
            axios
              .post(
                `https://kaxl3c7ehj.execute-api.us-east-1.amazonaws.com/dev/v1/upload`,
                {
                  user: "teddy",
                  media_type: docType,
                  contents: result,
                }
              )
              .then((response) => {
                console.log("response file uploaded", response);
                if (response?.status === 200) {
              setImage1URI(response?.data?.body?.data);
          }

                setDocLoading(false);
              })
              .catch((err) => {
                console.log("ERRRR", err);
                setDocLoading(false);
              });
          }
        });
      }
    }
  };



  return (
    <div className="find-match">
      <div className="find-match__upload">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="find-match__upload__icon"
        >
          <rect
            width="80"
            height="80"
            rx="40"
            fill="url(#paint0_linear_7533_134000)"
          />
          <path
            d="M38.6667 42.3333H40V37M45.3333 36.6667V34.6667M36 46C38 48 42 48 44 46M34.6667 36.6667V34.6667M36.5333 52C33.5467 52 32.0533 52 30.912 51.4187C29.9085 50.9073 29.0927 50.0915 28.5813 49.088C28 47.9467 28 46.4533 28 43.4667M52 43.4667C52 46.4533 52 47.9467 51.4187 49.088C50.9073 50.0915 50.0915 50.9073 49.088 51.4187C47.9467 52 46.4533 52 43.4667 52M43.4667 28C46.4533 28 47.9467 28 49.088 28.5813C50.0915 29.0927 50.9073 29.9085 51.4187 30.912C52 32.0533 52 33.5467 52 36.5333M36.5333 28C33.5467 28 32.0533 28 30.912 28.5813C29.9085 29.0927 29.0927 29.9085 28.5813 30.912C28 32.0533 28 33.5467 28 36.5333"
            stroke="#009B07"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7533_134000"
              x1="40"
              y1="0"
              x2="40"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#57FF86" stop-opacity="0.25" />
              <stop offset="1" stop-color="#97FF57" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {image1 && <div className="find-match__upload__success">
          <svg
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.5"
              width="64"
              height="64"
              rx="10.6667"
              fill="#00B368"
              fill-opacity="0.1"
            />
            <path
              d="M32 47.5C33.9698 47.5 35.9204 47.112 37.7403 46.3582C39.5601 45.6044 41.2137 44.4995 42.6066 43.1066C43.9995 41.7137 45.1044 40.0601 45.8582 38.2403C46.612 36.4204 47 34.4698 47 32.5C47 30.5302 46.612 28.5796 45.8582 26.7597C45.1044 24.9399 43.9995 23.2863 42.6066 21.8934C41.2137 20.5005 39.5601 19.3956 37.7403 18.6418C35.9204 17.888 33.9698 17.5 32 17.5C28.0218 17.5 24.2064 19.0804 21.3934 21.8934C18.5804 24.7064 17 28.5218 17 32.5C17 36.4782 18.5804 40.2936 21.3934 43.1066C24.2064 45.9196 28.0218 47.5 32 47.5Z"
              stroke="#00B368"
              stroke-width="3.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27 32.5013L30.3333 35.8346L37 29.168"
              stroke="#00B368"
              stroke-width="3.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div>Upload Successful</div>

          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer"

            onClick={() => {
              setImage1("");
              setImage1URI("")
            }}
          >
            <g opacity="0.9">
              <path
                d="M18 6.5L6 18.5"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6.5L18 18.5"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>}
        {image1 && <div className="find-match__upload__img">
          <Image
            className=""
            alt=""
            src={image1 && URL.createObjectURL(image1)}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "12px" }}
          />
        </div>}

        <h1 className="find-match__upload__title">
          Facial Background Recognition
        </h1>
        {!image1 && <div className="find-match__upload__inner">
          <div className="find-match__upload__inner__camera">
            <svg
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30.5" r="30" fill="#E5FFE7" />
              <path
                d="M35.5002 24C34.8902 24 34.3302 23.65 34.0502 23.11L33.3302 21.66C32.8702 20.75 31.6702 20 30.6502 20H28.3602C27.3302 20 26.1302 20.75 25.6702 21.66L24.9502 23.11C24.6702 23.65 24.1102 24 23.5002 24C21.3302 24 19.6102 25.83 19.7502 27.99L20.2702 36.25C20.3902 38.31 21.5002 40 24.2602 40H34.7402C37.5002 40 38.6002 38.31 38.7302 36.25L39.2502 27.99C39.3902 25.83 37.6702 24 35.5002 24ZM28.0002 25.25H31.0002C31.4102 25.25 31.7502 25.59 31.7502 26C31.7502 26.41 31.4102 26.75 31.0002 26.75H28.0002C27.5902 26.75 27.2502 26.41 27.2502 26C27.2502 25.59 27.5902 25.25 28.0002 25.25ZM29.5002 36.12C27.6402 36.12 26.1202 34.61 26.1202 32.74C26.1202 30.87 27.6302 29.36 29.5002 29.36C31.3702 29.36 32.8802 30.87 32.8802 32.74C32.8802 34.61 31.3602 36.12 29.5002 36.12Z"
                fill="#009B07"
              />
            </svg>
            <div>Use Camera</div>
          </div>
          <div className="find-match__upload__inner__image">
            <label className="pointer">
            <svg
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30.5" r="30" fill="#E5FFE7" />
              <path
                d="M31.3002 28.9514C31.1102 28.9514 30.9202 28.8814 30.7702 28.7314C30.4802 28.4414 30.4802 27.9614 30.7702 27.6714L38.9702 19.4714C39.2602 19.1814 39.7402 19.1814 40.0302 19.4714C40.3202 19.7614 40.3202 20.2414 40.0302 20.5314L31.8302 28.7314C31.6902 28.8714 31.5002 28.9514 31.3002 28.9514Z"
                fill="#009B07"
              />
              <path
                d="M35.33 29.7519H30.5C30.09 29.7519 29.75 29.4119 29.75 29.0019V24.1719C29.75 23.7619 30.09 23.4219 30.5 23.4219C30.91 23.4219 31.25 23.7619 31.25 24.1719V28.2519H35.33C35.74 28.2519 36.08 28.5919 36.08 29.0019C36.08 29.4119 35.74 29.7519 35.33 29.7519Z"
                fill="#009B07"
              />
              <path
                d="M32.5 40.75H26.5C21.07 40.75 18.75 38.43 18.75 33V27C18.75 21.57 21.07 19.25 26.5 19.25H28.5C28.91 19.25 29.25 19.59 29.25 20C29.25 20.41 28.91 20.75 28.5 20.75H26.5C21.89 20.75 20.25 22.39 20.25 27V33C20.25 37.61 21.89 39.25 26.5 39.25H32.5C37.11 39.25 38.75 37.61 38.75 33V31C38.75 30.59 39.09 30.25 39.5 30.25C39.91 30.25 40.25 30.59 40.25 31V33C40.25 38.43 37.93 40.75 32.5 40.75Z"
                fill="#009B07"
              />
            </svg>

            <input
                type="file"
                name=""
                id=""
                hidden
                ref={mediaRef}
                accept="image/*"
                onChange={(e) => {
                  setImage1(e.target.files[0]);
                  fileUpload(e, 1);
                }}
              />

            </label>
            <label className="pointer">
            <div>Upload Image</div>

            <input
                type="file"
                name=""
                id=""
                hidden
                ref={mediaRef}
                accept="image/*"
                onChange={(e) => {
                  setImage1(e.target.files[0]);
                  fileUpload(e, 1);
                }}
              />
            </label>
          </div>
        </div>}
      </div>

      <form action="" className="find-match__form">
        <h2 className="find-match__form__title">Upload Match</h2>
        <div className="find-match__form__search">
          <div>
          <input type="text" placeholder="Select Database" value={searchForce}
          onChange={(e) => setSearchForce(e.target.value)}
          onClick={() => setForceModal(!forceModal)}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#101828"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </div>
          <div className="find-match__form__search__modal">
            {/* <div className="find-match__form__search__modal__selected">
              <div>
                Nigeria Police Force{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9991 13.0597L6.52941 18.5294L5.46875 17.4688L10.9384 11.9991L5.46875 6.52941L6.52941 5.46875L11.9991 10.9384L17.4688 5.46875L18.5294 6.52941L13.0597 11.9991L18.5294 17.4688L17.4688 18.5294L11.9991 13.0597Z"
                    fill="#0E0E2C"
                  />
                </svg>
              </div>
              <div>
                Immigration{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9991 13.0597L6.52941 18.5294L5.46875 17.4688L10.9384 11.9991L5.46875 6.52941L6.52941 5.46875L11.9991 10.9384L17.4688 5.46875L18.5294 6.52941L13.0597 11.9991L18.5294 17.4688L17.4688 18.5294L11.9991 13.0597Z"
                    fill="#0E0E2C"
                  />
                </svg>
              </div>
            </div> */}
            {forceModal && <div className="find-match__modal-single"
            onClick={() => setForceModal(false)}
            ></div>}
            {forceModal && <div className="find-match__form__search__modal__inner">
              {filteredForces?.map((item, index) => 
              <div key={index} className="pointer" onClick={() => {
                setForce(item)
                setForceModal(false)
                setSearchForce("")
              }}>{item}</div>
              )}
            </div>}

            {forceModal && <div className="find-match__form__search__modal__button">
              <button
              onClick={() => {
                setSearchForce("")
                setForceModal(false)
              }}
              >Cancel</button>
              <button
              onClick={() => setForceModal(false)}
              >Save</button>
            </div>}
          </div>
        </div>

        {force?.length > 0 && <div className="find-match__form__search__selected">
          <div>
            {force}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer"
              onClick={() => setForce("")}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9991 13.0597L6.52941 18.5294L5.46875 17.4688L10.9384 11.9991L5.46875 6.52941L6.52941 5.46875L11.9991 10.9384L17.4688 5.46875L18.5294 6.52941L13.0597 11.9991L18.5294 17.4688L17.4688 18.5294L11.9991 13.0597Z"
                fill="#0E0E2C"
              />
            </svg>
          </div>
          
        </div>}

        <div className="find-match__form__check-group">
          <div>
           {gender !== "male" && <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer"
              onClick={() => setGender("male")}
            >
              <g filter="url(#filter0_i_8937_16938)">
                <rect width="32" height="32" rx="8" fill="#ECF1F4" />
              </g>
              <defs>
                <filter
                  id="filter0_i_8937_16938"
                  x="0"
                  y="0"
                  width="32"
                  height="33"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_innerShadow_8937_16938"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.407843 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_8937_16938"
                  />
                </filter>
              </defs>
            </svg>}
           {gender === "male" && <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="pointer"
           onClick={() => setGender("")}
           >
<g filter="url(#filter0_i_8554_84493)">
<rect width="32" height="32" rx="8" fill="#00B505"/>
</g>
<g filter="url(#filter1_d_8554_84493)">
<path d="M8 16.5L11.5858 20.0858C12.3668 20.8668 13.6332 20.8668 14.4142 20.0858L24.5 10" stroke="white" stroke-width="1.5"/>
</g>
<defs>
<filter id="filter0_i_8554_84493" x="0" y="0" width="32" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_8554_84493"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.407843 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8554_84493"/>
</filter>
<filter id="filter1_d_8554_84493" x="2" y="3" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8554_84493"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8554_84493" result="shape"/>
</filter>
</defs>
</svg>}
            Male
          </div>
          <div>
            {gender !== "female" && <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer"
              onClick={() => setGender("female")}
            >
              <g filter="url(#filter0_i_8937_16938)">
                <rect width="32" height="32" rx="8" fill="#ECF1F4" />
              </g>
              <defs>
                <filter
                  id="filter0_i_8937_16938"
                  x="0"
                  y="0"
                  width="32"
                  height="33"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_innerShadow_8937_16938"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.407843 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_8937_16938"
                  />
                </filter>
              </defs>
            </svg>}
           {gender === "female" &&  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="pointer"
           onClick={() => setGender("")}
           >
<g filter="url(#filter0_i_8554_84493)">
<rect width="32" height="32" rx="8" fill="#00B505"/>
</g>
<g filter="url(#filter1_d_8554_84493)">
<path d="M8 16.5L11.5858 20.0858C12.3668 20.8668 13.6332 20.8668 14.4142 20.0858L24.5 10" stroke="white" stroke-width="1.5"/>
</g>
<defs>
<filter id="filter0_i_8554_84493" x="0" y="0" width="32" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_8554_84493"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.407843 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_8554_84493"/>
</filter>
<filter id="filter1_d_8554_84493" x="2" y="3" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8554_84493"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8554_84493" result="shape"/>
</filter>
</defs>
</svg>}
            Female
          </div>
        </div>

        <div className="find-match__form__input-group">
          <input
            type="text"
            placeholder="Input First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Input Middle Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="find-match__form__input-group">
          <input type="text" placeholder="Input Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />
          <input type="text" placeholder="Input Alias" />
        </div>

        <input
          type="email"
          className="find-match__form__input"
          placeholder="Input Email"
          value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          className="find-match__form__input"
          placeholder="Input Phone Number"
          value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          className="find-match__form__input"
          placeholder="Input NIN"
        />
        <select
          name=""
          id=""
          className="find-match__form__input"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Region</option>
          {Object?.keys(worldCities)?.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
       {country === "Nigeria" || country === "" ? <select name="" id="" className="find-match__form__input"
        value={matchState}
        onChange={(e) => setMatchState(e.target.value)}
        >
          <option value="">Select State</option>
          {Object?.keys(lgaList)?.map((item, index) => <option value={item} key={index}>{item}</option>)}
        </select> : ""}
        {country === "Nigeria" || country === "" ? <select name="" id="" className="find-match__form__input"
        value={lga}
        onChange={(e) => setLga(e.target.value)}
        >
          <option value="">Select L.G.A</option>
          {lgaList[matchState]?.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select> : ""}
         <select name="" id="" className="find-match__form__input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Select City</option>
          {worldCities[country]?.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>

        {/* <div className="find-match__form__label">Date range</div>

        <div className="find-match__form__input-group">
          <div>
            <label htmlFor="">From</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="">To</label>
            <input type="date" />
          </div>
        </div>

        <div className="find-match__form__range">
          <div>
            <label htmlFor="">Age range</label>
            <div>
              <input type="text" placeholder="0" />
              <input type="text" placeholder="100" />
            </div>
          </div>

          <input type="range" name="" id="" />
        </div>
        <div className="find-match__form__range">
          <div>
            <label htmlFor="">Match%</label>
            <div>
              <div>
                <label htmlFor="">MIN</label>
                <input type="text" placeholder="0%" />
              </div>
              <div>
                <label htmlFor="MAX">MAX</label>
                <input type="text" placeholder="100%" />
              </div>
            </div>
          </div>

          <input type="range" name="" id="" />
        </div> */}

        <button className="find-match__form__button"
        onClick={handleCreateMatch}
        disabled={loading || docLoading}
        >{loading || docLoading ? "Loading..." : "Upload Match"}</button>
      </form>

    
    </div>
  );
}
