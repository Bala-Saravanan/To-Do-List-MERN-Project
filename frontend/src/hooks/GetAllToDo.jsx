import axios from "axios";
import { useEffect, useState } from "react";

const GetAllToDo = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
      if (response.data.success) {
        console.log(response.data);
        setData(response.data.todos);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, refetch: fetchData };
};
export default GetAllToDo;
