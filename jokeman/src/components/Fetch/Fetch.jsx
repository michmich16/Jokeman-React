import { useEffect, useState } from 'react';
import s from './Fetch.module.scss';

export function Fetch() {
    const [apiData, setApiData] = useState();
     const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`
    // const url = `https://official-joke-api.appspot.com/jokes/random`

    //jeg afkommenteret joke api fordi jeg blev ved med at får too many requests fejl😢😢😢

    async function getRandomData() {
        let res = await fetch(url);
        let data = await res.json();
        setApiData(data);
        console.log(apiData)
    }

    useEffect(() => {
        getRandomData();
    }, []);

    return (
        <>
            <section className={s.dataStyle}>
                {apiData ? <div>
                    {/* <p>🧐{apiData.setup}</p>
                    <p>😂{apiData.punchline}</p> */}
                    <p>{apiData.text}</p>
                </div> : <p>Loading... please wait</p>}

                <div>
                    <button onClick={getRandomData}>
                        New One
                    </button>
                </div>
            </section>


        </>
    )
}
