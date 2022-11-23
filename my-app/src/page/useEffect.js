import { useLayoutEffect, useEffect } from "react";


export default function LayoutEffect(){

    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    },[])


    useEffect(() => {
        console.log("useEffect")
    },[])
    return(
        <>
        
        </>
    )
}