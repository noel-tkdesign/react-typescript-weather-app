
type ResultsProps = {
    results: {
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}

const Results = (props: ResultsProps) => {
    return (
        <div>
            {props.results.country && <div className="results-country">{props.results.country}</div>}
            {props.results.cityName && <div className="results-city">{props.results.cityName}</div>}
            {props.results.temperature && <div className="results-temp">{props.results.temperature}<span>℃</span></div>}
            {props.results.conditionText && <div className="results-condition"><img src={props.results.icon} /><span>{props.results.conditionText}</span></div>}
        </div>
    );
}


export default Results