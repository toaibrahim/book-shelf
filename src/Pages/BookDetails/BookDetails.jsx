
import { Link, useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams()
    const idBook = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === idBook);
    
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = singleBook
    
    
    
    return (
        <div className="hero mb-52 mt-10">
            <div className="hero-content flex-col items-start gap-10 lg:flex-row">
                <div className='w-1/3 bg-base-200 justify-items-center p-10 rounded-2xl'>
                    <img
                          src={image}
                          className="rounded-lg shadow-2xl"
                        />
                </div>
                <div className='w-2/3'>
                  <h1 className="text-4xl font-bold text-[#131313]">{bookName}</h1>
                  <p className='my-5'>By : {author}</p>
                  <div className='border-b-2 border-[#13131326]'></div>
                  <p className='py-4 border-b-2 border-[#13131326] text-[18px] font-medium'>{category}</p>
                  <p className="py-6">
                    <span className='text-base font-bold'>Review: </span>
                    {review}
                  </p>
                  <div className="card-actions justify-start pb-6 border-b-2 border-[#13131326] mb-6">
                        <span className='text-base font-bold'>Tag : </span>
                        {
                            tags.map(tag => <div className="badge badge-outline bg-[#22be0a0c] text-[#23BE0A]">{tag}</div>)
                        }
                        {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                    </div>
                    
                    <div className="overflow-x-auto mb-6">
                        <table className="table">
                            <tbody>
                              {/* row 1 */}
                              <tr>
                                
                                <td className='text-[#131313b3]'>Number Of Pages: </td>
                                <td>{totalPages}</td>
                                
                              </tr>
                              {/* row 2 */}
                              <tr className="hover:bg-base-300">
                                
                                <td className='text-[#131313b3]'>Publisher: </td>
                                <td>{publisher}</td>
                                
                              </tr>
                              {/* row 3 */}
                              <tr>
                                
                                <td className='text-[#131313b3]'>Year of Publishing:</td>
                                <td>{yearOfPublishing}</td>
                                
                              </tr>

                              <tr>
                                
                                <td className='text-[#131313b3]'>Rating:</td>
                                <td>{rating}</td>
                                
                              </tr>
                            </tbody>
                        </table>
                    </div>

                  <div className='flex gap-4'>
                    <button className="btn ">Mark as Read</button>
                    <button className="btn bg-[#50B1C9] text-white">Add to Wishlist</button>
                    <Link to={`/bookDetails/${bookId+1}`}>
                        <button className="btn bg-[#50B1C9] text-white">Next</button>
                    </Link>
                  </div>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails;