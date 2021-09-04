import { useState } from "react";
import Button from "../../components/buttons";
import useGetAddressSuggestions from "../../hooks/useGetAddressSuggestions";
import { AddressSuggestion } from "../../types";
import AddressSuggestions from "./address-suggestions";
import './style.scss';



const SearchAddress = () => {

    const [addressPart, setAddressPart] = useState('');
    const [suggestions, error] = useGetAddressSuggestions(addressPart)
    console.log(suggestions)
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressPart(e.target.value)
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    const filterByCityStreetHouse = (suggestions: AddressSuggestion[]) => {
        return suggestions.filter(({data: {city, street}}) => {
            return city&&street
        })
    }

    const filteredSuggestions = suggestions&&filterByCityStreetHouse(suggestions);

    return (
        <div className="search-address-page">
            <h1>Поиск адресов</h1>
            <h3>Введите интересующий вас адрес</h3>
            <form className="search-address-form">
                <input
                    type="text"
                    value={addressPart}
                    onChange={handleChangeInput}
                    placeholder="Введите интересующий вас адрес"
                />
                <Button variant="primary" icon="search" onClick={handleSubmit}>
                    Поиск
                </Button>
            </form>
            <div className="search-address-page__suggestions-container">
                {error&&error.message}
                {filteredSuggestions?.length 
                    ? <AddressSuggestions suggestions={filteredSuggestions} /> 
                    : false   
                }
            </div>
        </div>
    )
}

export default SearchAddress;