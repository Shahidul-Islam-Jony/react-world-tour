import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {  // const CountryDetail=({country,handleVisitedCountry,handleSetFlag})
    // const { country, handleVisitedCountry, handleSetFlag } = props;
    // console.log(country);
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleSetFlag={handleSetFlag}
            ></CountryData> */}

            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;