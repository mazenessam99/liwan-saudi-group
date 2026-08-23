import { useEffect, useState } from "react"

export default function useFetch<T> (fetchFunction:() => Promise<T>) {
    const [data,setData]=useState<T|null>(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    useEffect(()=>{
        async function fetchData(){
            try{
                const result=await fetchFunction();
                setData(result);
            } 
            catch (error) {
                console.error(error);
                setError("حدث خطأ أثناء تحميل البيانات");
            } finally {
                setLoading(false);
            }
        } 
        fetchData()

    },[])
    return {data,loading,error}

}
