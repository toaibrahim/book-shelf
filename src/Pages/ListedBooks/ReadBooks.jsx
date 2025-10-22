import React from 'react';

const ReadBooks = ({eachBook}) => {
    const {bookName,author,image,category,tags,yearOfPublishing,publisher,totalPages,rating} = eachBook
    return (
        <div className='my-10'>
            <div className="card card-side bg-base-100 shadow-sm">
                <div className='w-[230px] h-[230px] bg-base-200 justify-items-center p-10 my-5 rounded-2xl'>
                    <img
                          src={image}
                          className="rounded-lg shadow-2xl w-[130px] h-[175px]"
                        />
                </div>
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-[#131313]">{bookName}</h1>
                    <p className='flex-grow-0'>By : {author}</p>
                    
                    <div className="card-actions justify-start pb-2">
                        <span className='text-base font-bold'>Tag : </span>
                          {
                              tags.map(tag => <div className="badge badge-outline bg-[#22be0a0c] text-[#23BE0A]">{tag}</div>)
                          }
                        <span className='text-[#131313cc]'>Year of Publication : {yearOfPublishing}</span>
                    </div>
                    <div className="card-actions justify-start pb-2 border-b-2 border-[#13131326] mb-6">
                        <span className='text-[#13131380]'>Publisher : {publisher}</span>
                        <span className='text-[#13131380]'>Pages : {totalPages}</span>
                    </div>
                    <div className='flex gap-4'>
                        <button className="btn bg-[#328eff26] text-[#328EFF] rounded-xl"> Category : {category}</button>
                        <button className="btn rounded-xl bg-[#ffad3326] text-[#FFAC33]">Rating : {rating}</button>
                        <button className="btn rounded-xl bg-[#23BE0A] text-white">View Details</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooks;