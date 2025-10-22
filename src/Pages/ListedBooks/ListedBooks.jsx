import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import ReadBooks from './ReadBooks';

const ListedBooks = () => {
    const[readList,setReadList] = useState([]);
    const [sort,setSort] = useState('');
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book=>convertStoredBooks.includes(book.bookId));
        setReadList(myReadList);
        
    },[]);
    const handleSort = (type) => {
        setSort(type);
        if(type === 'pages'){
            const sortedByPage = [...readList.sort((a,b) => a.totalPages - b.totalPages)];
            setReadList(sortedByPage)
        }else if(type === 'rating'){
            const sortedByRating = [...readList.sort((a,b) => a.rating -b.rating)];
            setReadList(sortedByRating)
        }
    }
    return (
        <div className='min-h-screen'>
            <div className='py-10 text-center bg-[#1313130d] rounded-2xl mb-5'>
                <h2 className='text-[28px] font-bold'>Books</h2>
            </div>
            <div className="flex justify-center items-center mb-10">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By : {sort?sort:''}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a onClick={()=>handleSort('pages')}>Pages</a></li>
                  <li><a onClick={()=>handleSort('rating')}>Rating</a></li>
                </ul>
              </div>
            </div>
            <Tabs>
                <TabList>
                  <Tab>Read Books</Tab>
                  <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                  {
                    readList.map((eachBook,index) => <ReadBooks key={index} eachBook={eachBook}></ReadBooks>)
                  }
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;