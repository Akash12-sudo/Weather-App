
import React, { useEffect, useState } from 'react';
import '../css/style.css';


const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("London");

    useEffect(() => {
        const fetchApi = async () => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={id}
            `
            const response = await fetch(url);

            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);

        }

        fetchApi();
    }, [search]);

    const Url = `https://www.google.com/search?q=${search}&safe=active&sxsrf=ALeKk003VzpR6DkCbDhkmZ18zadTT3kv4A%3A1619694596285&ei=BJSKYPXzENbA3LUPt9qi2AY&oq=london&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAELADEEMyDQguELADEMgDEEMQkwIyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyEAguEMcBEK8BELADEMgDEEMyCgguELADEMgDEENKBQg4EgExUABYAGD6gAFoAXACeACAAcsBiAHLAZIBAzItMZgBAKoBB2d3cy13aXrIAQ_AAQE&sclient=gws-wiz&ved=0ahUKEwj1hbnIqKPwAhVWILcAHTetCGsQ4dUDCA4&uact=5`

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(Event) => {
                            setSearch(Event.target.value);
                        }}
                    />
                </div>

                {!city ? (
                    <p className="error">No City Found</p>
                )
                    : (
                        <div>
                            <div className="info">
                                <h1 className="location"><i class="fas fa-street-view"></i><a className="link" href={Url} target='/blank' style={{ textDecoration: "none", pointer: "cursor" }}>{search}</a></h1>
                                <h2 className="temp">{city.temp}°Cel </h2>
                                <h3 className="temp_minmax"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>

                        </div>
                    )}


            </div>

        </>
    )
}

export default Tempapp;
