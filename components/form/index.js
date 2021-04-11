import React, { useState } from "react";
import TextInput from "../StyledComponents/TextInput";
import { Button, CircularProgress } from "@material-ui/core";
import Checkbox from "../StyledComponents/Checkbox";
import usePost from "../../hooks/usePost";
import Swal from "sweetalert2";

//constant
import { API_ROOT } from "../../constants/key";

function Form() {
  const [feedTime, setFeedTime] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const [food, setFood] = useState("");
  const [foodType, setFoodType] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [duckCount, setDuckCount] = useState("");
  const [foodAmount, setFoodAmount] = useState("");
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

  const [mutation, { data, error, loading }] = usePost(`${API_ROOT}/data`);

  const handleSubmit = (e) => {
    e.preventDefault();

    //api post request
    mutation({
      variables: {
        feedTime,
        food,
        foodType,
        location,
        country,
        duckCount,
        foodAmount,
        email,
      },
      onCompleted: (data) => {
        //resetting the input field if api call successful
        setFood("");
        setFoodType("");
        setFoodAmount("");
        setLocation("");
        setDuckCount("");
        setEmail("");
        setCountry("");

        Swal.fire("Success!", data.message, "success");
      },
      onError: (err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      },
    });
  };

  return (
    <div className="form-root" id="form">
      <div className="form-container">
        <div className="form-left">
          <h2 className="form-header-text">
            Did You Feed Some Ducks Recently?
          </h2>
          <p style={{ fontSize: "1.4rem", marginLeft: "15px" }}>
            Please fill in the form to help me <br />
            research the human impact on ducks
          </p>
        </div>
        <div className="form-right">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="What time did you feed the ducks?"
              type="datetime-local"
              state={feedTime}
              setState={setFeedTime}
            />
            <TextInput
              label="What food did you feed? *"
              state={food}
              setState={setFood}
              required={true}
            />
            <div className="form-two-column-row">
              <TextInput
                label="Where did you feed the ducks? *"
                state={location}
                setState={setLocation}
                required={true}
              />
              <div className="form-two-column-padding" />
              <TextInput
                label="Country *"
                state={country}
                setState={setCountry}
                required={true}
              />
            </div>
            <TextInput
              label="How many ducks did you feed? *"
              state={duckCount}
              setState={setDuckCount}
              type="number"
              required={true}
            />
            <TextInput
              label="What kind of food did you feed the ducks?"
              state={foodType}
              setState={setFoodType}
            />
            <TextInput
              label="How much food did you feed the ducks (in grams)?"
              state={foodAmount}
              setState={setFoodAmount}
              type="number"
            />
            <Checkbox
              label="Feed ducks everyday? Set up auto form submit."
              state={checked}
              setState={setChecked}
            />
            {checked && (
              <TextInput
                label="Your Email (for setting up purpose only)"
                state={email}
                setState={setEmail}
                type="email"
                required={true}
              />
            )}
            <div className="form-button">
              {!loading ? (
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              ) : (
                <CircularProgress />
              )}
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .form-root {
            background-color: #9fb8ad;
            padding: 5% 5% 0;
          }
          .form-container {
            background-color: #f3f4ed;
            padding: 50px;
            position: relative;
            z-index: 1001;
            display: flex;
            font-family: Helvetica;
            border: 1px solid grey;
            border-radius: 10px;
          }
          .form-left {
            flex: 1;
            padding: 3% 5%;
            justify-content: center;
          }
          .form-header-text {
            font-size: 4.5rem;
            margin-top: 0;
            margin-bottom: 15px;
            color: #555;
          }
          .form-right {
            flex: 1;
            padding: 3% 10%;
          }
          .form-two-column-row {
            display: flex;
            align-items: flex-end;
          }
          .form-two-column-padding {
            flex: 0.1;
          }
          .form-button {
            margin-top: 15px;
          }

          @media (max-width: 1000px) {
            .form-container {
              display: block;
            }
          }

          @media (max-width: 800px) {
            .form-left {
              padding: 1% 1%;
            }
            .form-right {
              padding: 1% 1%;
            }
            .form-container {
              padding: 20px;
            }
            .form-header-text {
              font-size: 3rem;
            }
            .form-two-column-row {
              display: block;
            }
            .form-two-column-padding {
              flex: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Form;
