import React from 'react';
const FootermidList = ({title,listItem}) => {
    
    
   
    return (
        <div>
            <div className='w-full'>
                <h3 className='font-bold'>{title}</h3>
                <ul className='font-bodyFont'>
                   {
                        listItem.map((item)=>item.listData.map((data,i)=>(
                            <li key={i} className='footerLink'>{data}</li>
                        )))
                   }
                </ul>
            </div>
        </div>
    );
};

export default FootermidList;