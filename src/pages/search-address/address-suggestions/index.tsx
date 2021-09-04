import List from "../../../components/list";
import { AddressSuggestion } from './../../../types';
import "./style.scss";

interface AddressSuggestionsProps {
    suggestions: AddressSuggestion[]
}

const AddressSuggestions = (props: AddressSuggestionsProps) => {
    const { suggestions } = props;
    return (
        <div className="address-suggestions">
            <h3>Адреса</h3>
            <List
                <AddressSuggestion>
                data={suggestions}
                renderItem={
                    ({data}) => (
                        <li className="address-suggestions__item">
                            {data.city}, {data.street}, {data.house}
                        </li>
                    )
                }
            />
        </div>
    )
}

export default AddressSuggestions;