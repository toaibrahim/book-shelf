import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({allData}) => {

    const bookPromise = fetch('./booksData.json').then(res=>res.json())
    console.log(bookPromise);
    
    return (
        <div>
            <h1 className='text-4xl text-center p-6 text-[#131313] mt-16 font-bold'>Books</h1>
            <Suspense fallback={<p>Loading......</p>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 justify-items-center'>
                    {
                        allData.map((data,index)=> <Book key={index} data={data}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;