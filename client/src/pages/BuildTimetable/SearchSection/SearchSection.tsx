import { useState } from "react";
import "./SearchSection.style.scss";

interface SearchSectionProps {
  
  onSearch: (startTime: string, endTime: string, day: {Mon: boolean, Tue: boolean, Wed: boolean, Thu: boolean, Fri: boolean}) => void;
}
function SearchSection({ onSearch }: SearchSectionProps) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [day, setDay] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false
  });

  return (
    <div className="SearchSection">
      <input type = "time" placeholder="Start Time" value={startTime} onInput={e => setStartTime((e.target as HTMLInputElement).value.toString())}></input>
      <input type = "time" placeholder="End Time" value={endTime} onInput={e => setEndTime((e.target as HTMLInputElement).value.toString())}></input>
      <label>
        <input type="checkbox" onInput={e => setDay((previousState => {return {...previousState, Mon: (e.target as HTMLInputElement).checked}}))}></input>
        Monday
      </label>
      <label>
        <input type = "checkbox" onInput={e => setDay((previousState => {return {...previousState, Tue: (e.target as HTMLInputElement).checked}}))}></input>
        Tuesday
      </label>
      <label>
        <input type = "checkbox" onInput={e => setDay((previousState => {return {...previousState, Wed: (e.target as HTMLInputElement).checked}}))}></input>
        Wednesday
      </label>
      <label>
        <input type = "checkbox" onInput={e => setDay((previousState => {return {...previousState, Thu: (e.target as HTMLInputElement).checked}}))}></input>
        Thursday
      </label>
      <label>
        <input type = "checkbox" onInput={e => setDay(previousState => {return {...previousState, Fri: (e.target as HTMLInputElement).checked}})}></input>
        Friday
      </label>
      <button onClick={() => onSearch(startTime, endTime, day)}>Search</button>
    </div>
  );
}

export default SearchSection;
