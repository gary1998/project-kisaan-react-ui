export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('projectkisaanstate');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err){
        return undefined;
    }
}

export const saveState = (state) => {
    try{
        const unserializedState = JSON.stringify(state);
        localStorage.setItem('projectkisaanstate', unserializedState);
    } catch(err){
        console.log(err);
    }
}