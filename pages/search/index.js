import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {useQuery} from "react-query"
import SearchBar from "../../src/components/core/SearchBar/SearchBar"
import styles from "./search.module.css"


export default function Search() {

    const [Search, setSearch] = useState([]);
    const router = useRouter();
    const queries = router.query;
    
    // Instead of using state for error loading and the object itself we will use react query hook
    const {isLoading, isError, error, data, properties} = useQuery(
        ["properties", queries],

        () => 
        queries?.arrival && axios.get(`/properties/search?arrival=${queries.arrival}&departure=${queries.departure}&maxTraveler=${queries.maxTravelers}&destination=${queries.destination}`
        
        ),
        {
            onSuccess: (data) => console.log(data),
            onError: (err) => {
              console.log({ err: err.response.data.detail });
              alert({ err: err.response.data.detail });
            },
        }
        );

    return (
        <div className={styles.container}>
        <div className={styles.searchContainer}>
        <SearchBar/>
        </div>
        </div>
    )
}
