import { useState, useEffect } from 'react'

interface IPaddingOffSet {
    height: number
}

const PaddingOffSet:React.FC<IPaddingOffSet> = ({ height }) => {
    let [bannerStyle, bannerStyleUpdate] = useState();

    const headingPaddingCheckForBanner:any = () => {
        let offsetPaddingTest
        if(typeof window !== 'undefined'){
            offsetPaddingTest = document.getElementsByClassName('headerBanner')[0]
        }
        if(offsetPaddingTest){
            return {height: height ? height + (offsetPaddingTest.clientHeight) + 'px' : 0} 
        } else { 
            return {height: height ? height + 'px' : 0}; 
        }
    }

    useEffect(() => {
        bannerStyleUpdate(headingPaddingCheckForBanner());
    }, [])

    return (
        <div style={bannerStyle} className="headerPaddingOffset"></div>
    )
}

export default PaddingOffSet