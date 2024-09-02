import { useEffect, useState } from 'react';
import s from './Fetch.module.scss';

export function Fetch() {

    const [jokeData, setJokeData] = useState();

    const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`

    useEffect(() => {
        async function getRandomJoke() {
            let res = await fetch(url);
            let data = await res.json();
            setJokeData(data);
            // console.log(jokeData)
        }
        getRandomJoke();
    }, []);

    // console.log(jokeData);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <section className={s.dataStyle}>
                {jokeData ? <div>
                    <p>{jokeData.text}</p>
                </div> : <p>Loading...</p>}

                <div>
                    <button onClick={refreshPage}>
                        New One
                    </button>
                </div>
            </section>


        </>
    )
}
