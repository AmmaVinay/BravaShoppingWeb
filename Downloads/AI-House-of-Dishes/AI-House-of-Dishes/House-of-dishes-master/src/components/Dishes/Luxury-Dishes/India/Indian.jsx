import React from 'react';
 import Card3 from '../../../Card3'
import { IndianBreakFast } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast';
import { IndianLunch } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianLunch';
import { IndianDinner } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianDinner';
function Indian() {
return (
<div className='bg-[#fff] min-h-screen'>
    <div className=' '>
        <h1 className='py-12 text-2xl sm:text-4xl md:text-6xl text-center font-bold text-black'>Indian Dishes</h1>
        <div>
            <Card3 title="Breakfast"  famousDish={IndianBreakFast}/>
        </div>
        <div>
            <Card3 title="Lunch"  famousDish={IndianLunch}/>
        </div>
        <div>
            <Card3 title="Dinner"  famousDish={IndianDinner}/>
        </div>
    </div>
</div>
);
}

export default Indian;
