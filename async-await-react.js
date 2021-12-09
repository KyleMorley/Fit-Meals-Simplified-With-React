//Async code to load data 'DOMContentLoaded' style using useEffect from React
//Ensure you have set up a useState constant and function to set useEffects returned data
//e.g const [tasks, getTasks] = useState([])
useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('Insert API or SERVER Address');
        const data = await res.json();

        console.log(data)
    }

    fetchData()
}, [])

//Altered version of above function but sets data as state rather than concole logging the returned data
useEffect(() => {
    const getReData = async() => {
        const dataFromServer = await fetchData();
        //Call the useState function and add to state e.g.
        getTasks(dataFromServer)
    }

    getReData()
}, [])

const fetchData = async () => {
    const res = await fetch('Insert API or SERVER Address');
    const data = await res.json();

    return data;
}