import { useEffect, useReducer } from "react";
import { Address } from "../types";
import useFetch from "./useFetch";
import { AddressSuggestion } from './../types';

type SuggestionsData = {suggestions: AddressSuggestion[]}

const useGetAddressSuggestions = (query: string):[AddressSuggestion[]|undefined, Error|undefined] => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "7d34713a1002d8c93f1f7a4e6ec01998e93f271c";
    const count = 100;

    const reqOpts = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json ",
            "Authorization": "Token " + token
        }
    }

    const [_, forceUpdate] = useReducer(count => count + 1, 0)

    useEffect(() => {
        forceUpdate()
    }, [query])

    const {data, error} = useFetch<SuggestionsData>(
        url + "?query=" + encodeURIComponent(query) + "&count=" + encodeURIComponent(count), 
        reqOpts
    )

    return [data?.suggestions, error];
}

export default useGetAddressSuggestions;