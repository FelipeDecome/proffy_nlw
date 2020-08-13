import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface QueryParams {
  name: string;
  value: string;
}

export default function useQueryParams() {
  const [queryParams, setQueryParams] = useState<QueryParams[]>([]);
  const location = useLocation();

  useEffect(() => {
    let { search } = location;
    let searchParams = search.replace("?", "").split("&");

    let newQueryParams: QueryParams[] = [];

    searchParams.forEach((searchParam) => {
      let searchParamParsed = searchParam.split("=");
      let [name, value] = searchParamParsed;

      newQueryParams.push({ name, value });
    });

    setQueryParams(newQueryParams);
  }, [location]);

  return queryParams;
}
