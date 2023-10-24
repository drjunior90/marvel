import { useEffect, useState } from "react";
import api from "../../services/api";
export default function SearchLogic() {
  const [personegens, setPersonagens] = useState([]);
  const [copyRight, setCopyRight] = useState("")
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/characters")
      .then((res) => {
        setCopyRight(res.data.copyright);
        setPersonagens(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchLowerCase = search.toLowerCase();

  const filterPers = personegens.filter((pers) =>
    pers.name.toLowerCase().includes(searchLowerCase)
  );
  return {
    search,
    setSearch,
    filterPers,
    copyRight,
  };
}
