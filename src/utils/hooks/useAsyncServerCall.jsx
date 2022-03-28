import { useEffect } from "react";
import axios from 'axios'

export function useAsyncServerCall(api_path, dispatch, actionType){
    useEffect(()=>{
        (async() => {
            try{
                const response = await axios.get(api_path)
                dispatch({type: actionType, payload: response.data.products})
            }
            catch (error){
                console.log(error)
            }
        })()
    },[])
}