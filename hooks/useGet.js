/******************************************************************
# useGet is a custom hook to simplify api calls using fetch function
# It returns 3 states data, error, and loading
# On successful api call the json data is set in the data state 
# While api call is being made, the loading state becomes true
# If error is encountered, the error state holds the error object

#It also accepts a callback function which is run when
# fetch call is successful
**********************************************************************/

import { useState, useEffect } from "react";

function useGet(link, callBack) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        let response = await fetch(link);
        if (response.ok) {
          let data = await response.json();
          setData(data);
          setLoading(null);
          if (callBack) {
            callBack(data);
          }
        } else {
          let data = await response.json();
          setError(data);
          setLoading(null);
        }
      } catch (err) {
        setError(err);
        setLoading(null);
      }
    };
    if (link) {
      getData();
    }
  }, [link]);

  return { data, error, loading };
}

export default useGet;
