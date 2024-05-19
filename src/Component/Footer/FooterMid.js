import React from 'react';
import FootermidList from './FootermidList';
import { middleList } from '../../Constants/Constants';
import { bdFlag,logo } from '../../assests';

const FooterMid = () => {
    return (
        <div className='w-full bg-amazon_light text-white'>
            <div className='w-full border-b-[1px] border-grey-500 p-10'>
                <div className='max-w-5xl mx-auto text-grey-300'>
                    <div className='w-full mx-auto gap-2 text-sm grid grid-cols-1 mdl:grid-cols-4 md:grid-cols-4 xxl:grid-cols-4 sm:grid-cols-2'>
                        {
                            middleList.map((item) => {
                                return <FootermidList title={item.title} listItem={item.listItem} key={item._id} />
                            })
                        }
                    </div>
                </div>
            </div>


            {/* top end here  */}
            {/* bottom start here  */}
            <div className='w-full flex gap-6 items-center justify-center py-6'>
                <div>
                    <img src={logo} alt=''  className='w-20 pt-3'/>
                </div>
                <div className='flex gap-2'>
                   <p className='flex gap-1 items-center justify-center border border-green-500
                   hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
                </div>
                <div className='flex gap-1 items-center justify-center border border-green-500
                   hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                    <img src={bdFlag} alt='' className='w-10'/>    
                </div>
            </div>
            {/* bottom end here  */}
                            
        </div>
    );
};

export default FooterMid;