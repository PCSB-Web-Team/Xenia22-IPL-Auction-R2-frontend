import {useEffect,useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error("Could not fetch the data.");
                }
                return res.json();
            })
            .then(
                (data) => {
                    setData(data);
                    setIsPending(false);
                    setFetchError(null);
                    console.log(data);
                }
            )
            .catch(err => {
                setIsPending(false);
                setFetchError(err.message);
            })
    }, [])

    return {data, isPending, fetchError};
}

export default useFetch;