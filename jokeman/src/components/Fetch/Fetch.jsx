import { useEffect, useState } from 'react';
import s from './Fetch.module.scss';

export function Fetch() {

    const [apiData, setApiData] = useState();

    const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`

    useEffect(() => {
        async function getRandomData() {
            let res = await fetch(url);
            let data = await res.json();
            setApiData(data);
            // console.log(apiData)
        }
        getRandomData();
    }, []);

    // console.log(apiData);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <section className={s.dataStyle}>
                {apiData ? <div>
                    <p>{apiData.text}</p>
                </div> : <p>Loading... please wait</p>}

                <div>
                    <button onClick={refreshPage}>
                        New One
                    </button>
                </div>
            </section>


        </>
    )
}
