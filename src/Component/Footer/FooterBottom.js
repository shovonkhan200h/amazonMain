import React from 'react';
import { footerList } from '../../Constants/Constants';

const FooterBottom = () => {
    return (
        <div className='w-full bg-footerBottom p-8'>
            <div className='max-w-5xl mx-auto'>
                <div className='w-full grid grid-cols-3 lg:grid-cols-6 gap-2 text-gray-400'>
                    {
                        footerList.map((item) => {
                            return <div className='group cursor-pointer' key={item._id}>
                                <h3 className='footerTitle'>{item.title}</h3>
                                <p className='footerBottomText'>{item.des}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;