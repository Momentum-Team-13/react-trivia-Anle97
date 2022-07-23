import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { questionFetch } from "../../utils/opentdbAPI";

export default function Quiz() {
  const location = useLocation();
  const idLocation = location.pathname

  useEffect(() => {
    questionFetch(idLocation.slice(6))
    .then((response) => 
    console.log(response))
  },[])

  // const x = () => {
  //   console.log(location)
  // }
  // x()
  return <div className="quiz"></div>;
}
