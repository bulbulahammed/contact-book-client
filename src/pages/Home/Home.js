import React from 'react';
import contacts from '../../data.json';
import ContactRow from './ContactRow';

const Home = () => {
    return (
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <h2>
                                    SL
                                </h2>
                            </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* Table Row */}
                        {
                            contacts.map((contact,index)=><ContactRow
                            key={index}
                            contact={contact}
                            index={index}
                            ></ContactRow>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default Home;
