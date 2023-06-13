const Counter = () => {
    const [count, setCount] = React.useState(0)    

    const handleClick = (e) => {
        setCount(count => count+1)
    }

    return (
        <div>
            <div>Counter : {count}</div>
            <button onClick={handleClick}>Increse by 1</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Counter />);