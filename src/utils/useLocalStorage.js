import React from "react";

function useLocalStorage(name, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(name)
    
                let parseItem;
                if (!localStorageItem) {
                    localStorage.setItem(name, JSON.stringify(initialValue))
                    parseItem = []
                } else {
                    parseItem = JSON.parse(localStorageItem)
                    setItem(parseItem)
                }
        
                setLoading(false)
            }catch(error){
                console.log(error)
                setLoading(false)
                setError(true)
            }
        }, 2000)
    }, [item])

    const saveItem = (newItem) => {
        localStorage.setItem(name, JSON.stringify(newItem))
        setItem(newItem)
    }

    return {
        item, 
        saveItem, 
        loading, 
        error}
}

export default useLocalStorage