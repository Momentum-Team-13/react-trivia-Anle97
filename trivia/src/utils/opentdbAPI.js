import Axios from 'axios'

export const categoryFetch = () => {
    return Axios
    .get("https://opentdb.com/api_category.php")
    .then((response) =>
      (response.data.trivia_categories)
    )
    .catch((err) => console.log(err))
  };


export const questionFetch = (id) => {
    return Axios
    .get(`https://opentdb.com/api.php?amount=10&category=${id}`)
    .then((response) =>
    (response.data.results)
    )
    // .then((response) =>
    // console.log(response))
    .catch((err) => console.log(err))
  };

