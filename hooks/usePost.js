/* usePost is a custom hook to simplify the post calls made to api
# it accepts a link and returns a function to make the fetch call
# the function accepts data to be send with request body and 2 callback
# functions that the user can pass in 
# 
# the onCompleted callback will fire if it is provided and post req is successful
# 
# the onError callback will fire if it id provided and post req failed. 
# 
# the function also returns 3 states containing data, loading, and error */

import { useState } from "react";

function usePost(link) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  async function postData({ variables, onCompleted, onError }) {
    if (variables && link) {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        let response = await fetch(link, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(variables),
        });

        if (response.ok) {
          let data = await response.json();
          setData(data);
          setLoading(null);
          if (onCompleted) {
            onCompleted(data);
          }
        } else {
          let data = await response.json();
          setError(data);
          setLoading(null);
          if (onError) {
            onError(data);
          }
        }
      } catch (err) {
        setError(true);
        setLoading(null);
        if (onError) {
          onError(data);
        }
      }
    }
  }
  return [postData, { data, error, loading }];
}

export default usePost;
