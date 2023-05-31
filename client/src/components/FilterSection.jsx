import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { staggerFadeInOut } from '../animations';
import { IoFastFood } from '../assets/icons';
import { categories } from '../utils/data';
import { SliderCard } from '../components';

const FilterSection = () => {

    const products = useSelector((state) => state.products);
    const [category, setCategory] = useState("fruits");

    return (
        <motion.div className='w-full flex items-start justify-start flex-col '>
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-2xl font-bold text-headingColor ">
                        Our Hot Dishes
                    </p>
                    <div className='w-40 h-1 rounded-md bg-orange-500'></div>
                </div>
            </div>
            <div className='w-full pt-6 flex items-center justify-center gap-5 py-6'>
                {categories && categories.map((data, i) => (

                    <FilterCard
                        data={data}
                        category={category}
                        setCategory={setCategory}
                        index={i}
                    />
                ))}
                {/* {categories && categories?.map((data, i) => (

                    <motion.div
                        key={index} {...staggerFadeInOut(index)}
                        onClick={() => setCategory(data.category)}
                        className={`group w-28 min-w-[128px] cursor-pointer rounded-md py-6
                        ${category === data.category ? "bg-red-500" : "bg-primary"}
                        hover:bg-red-500 shadow-md flex flex-col items-center justify-center gap-4` }>
                        <div
                            className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center group-hover:bg-primary
                            ${category === data.category ? "bg-primary" : "bg-red-500"}
                        `}>
                            <IoFastFood
                                className={` ${category === data.category ? "text-red-500" : "text-primary"}
                            group-hover:text-red-500
                        `} />

                        </div>
                        <p className={`text-xl font-semibold ${category === data.category ? "text-primary" : "text-textColor"}
                            group-hover:text-primary
                        `}>{data.title}</p>

                    </motion.div>
                ))} */}
            </div>
            <div className='w-full flex items-center justify-evenly flex-wrap gap-4 mt-12'>

                {products?.length > 0 ? (
                    <>
                        {
                            products?.filter((data) => data.product_category === category)
                                .map((data, i) => <SliderCard key={i} data={data} index={i} />)

                        }
                    </>
                ) : (
                    <>
                        <h1 className='text-[72px] text-headingColor font-bold'> No products</h1>
                    </>
                )}
            </div>
        </motion.div>
    )
}

export const FilterCard = ({ data, index, category, setCategory }) => {
    return (
        <motion.div
            key={index} {...staggerFadeInOut(index)}
            onClick={() => setCategory(data.category)}
            className={`group w-28 min-w-[128px] cursor-pointer rounded-md py-6
            ${category === data.category ? "bg-red-500" : "bg-primary"}
            hover:bg-red-500 shadow-md flex flex-col items-center justify-center gap-4` }>
            <div
                className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center group-hover:bg-primary
                ${category === data.category ? "bg-primary" : "bg-red-500"}
            `}>
                <IoFastFood
                    className={` ${category === data.category ? "text-red-500" : "text-primary"}
                group-hover:text-red-500
            `} />

            </div>
            <p className={`text-xl font-semibold ${category === data.category ? "text-primary" : "text-textColor"}
                group-hover:text-primary
            `}>{data.title}</p>

        </motion.div>
    )
}

export default FilterSection
