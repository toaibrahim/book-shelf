import React from 'react';
import { Link } from 'react-router';

const Book = ({data}) => {
    console.log(data);

    const {bookId,bookName,author,image,rating,category,tags,yearOfPublishing} = data;
    
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm border-2 border-[rgba(19,19,19,0.15)]">
                <figure className='w-[326px] h-[230px] bg-[#F3F3F3] rounded-2xl mx-auto mt-5'>
                  <img className='w-[135px] h-[166px]'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <div className="card-actions justify-start">
                        {
                            tags.map(tag => <div className="badge badge-outline bg-[#22be0a0c] text-[#23BE0A]">{tag}</div>)
                        }
                        {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                    </div>
                  <h2 className="card-title my-4">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                  </h2>
                  <p className='pb-5 border-b-2 border-dotted border-[#13131326]'>By : {author}</p>
                  <div className='py-2.5 flex justify-between items-center'>
                    <p>{category}</p>
                    <span>{rating}</span>
                  </div>
                </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;