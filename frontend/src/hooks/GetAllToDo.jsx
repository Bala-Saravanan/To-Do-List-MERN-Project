import axios from "axios";
import { useEffect, useState } from "react";

const GetAllToDo = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.data.success) {
          console.log(response.data);
          setData(response.data.todos);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data };
};
export default GetAllToDo;
