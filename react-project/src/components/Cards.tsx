import React from "react";
import "./Cards.css";
import { useGetCharactersQuery } from "../utils/fetchData";
import { ApiCard } from "./ApiCard";
import { useSelector } from "react-redux";
import { IRootState } from "../interfaces/store";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";

export const Cards = () => {
  const search = useSelector((state: IRootState) => state.search.search);

  const {
    data = {
      docs: [],
    },
    isFetching,
    error,
  } = useGetCharactersQuery(search);

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      return <ErrorMessage message={errMsg} />;
    } else {
      return <ErrorMessage message={error.message!} />;
    }
  }

  if (isFetching) return <Loader />;

  return (
    <div className="cards-container flex">
      {data.docs.map((card) => (
        <ApiCard
          name={card.name}
          spouse={card.spouse}
          race={card.race}
          gender={card.gender}
          wikiUrl={card.wikiUrl}
          birth={card.birth}
          key={card.name}
        ></ApiCard>
      ))}
    </div>
  );
};

// const [persons, setPersons] = useState<IApiCard[]>([
//   {
//     _id: "",
//     height: "",
//     race: "",
//     gender: "",
//     birth: "",
//     spouse: "",
//     death: "",
//     realm: "",
//     hair: "",
//     name: "",
//     wikiUrl: "",
//   },
// ]);

// useEffect(() => {
//   fetchData(search)
//     .then((res) => {
//       setPersons([...res.docs]);
//       setIsLoading(false);
//     })
//     .catch((err) => {
//       setIsLoading(false);
//       setErrorMessage(err.message);
//     });
// }, [search, setErrorMessage, setIsLoading]);
