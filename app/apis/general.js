import axios from "axios";

export const findMatch = async (
  source,
  gender,
  city,
  force,
  first_name,
  last_name
) => {

  console.log(
    "well",
    {
      source,
    gender,
    city,
    force,
    first_name,
    last_name
    });
  try {
    const res = await axios.post(
      `https://0kb5ehb6bg.execute-api.us-east-1.amazonaws.com/dev/multiple`,
      {
        source,
        gender,
        city,
        force,
        first_name,
        last_name
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const createMatch = async (
  city,
  first_name,
  gender,
  images,
  last_name,
  middle_name,
  email,
  phone_number,
  source
) => {

  console.log(
    {
      city,
  first_name,
  gender,
  images,
  last_name,
  middle_name,
  email,
  phone_number,
  source
    }
  );
  try {
    const res = await axios.post(
      `https://20qjp1xm30.execute-api.us-east-1.amazonaws.com/dev/v1/create-user`,
      {
        city,
  first_name,
  gender,
  images,
  last_name,
  middle_name,
  email,
  phone_number,
  source
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
