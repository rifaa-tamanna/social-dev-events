const AllEventsPage = async() => {

    const res = await fetch('http://localhost:5000/events')
    const data = await res.json()

    console.log('data', data)

    return (
        <div>
            This is All Events Page
        </div>
    );
};

export default AllEventsPage; 