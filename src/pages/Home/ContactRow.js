import React from 'react';

const ContactRow = ({contact,index}) => {
    const {name,age,sex,image,address,phone,profession,email} = contact;
    return (
            <tr>
                <th>
                    <h4>{index + 1}</h4>
                </th>
                {/* Name Avatar and country */}
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <span className="badge badge-ghost badge-sm">{profession}</span>
                            <div className="text-sm opacity-50">{address.country}</div>
                        </div>
                    </div>
                </td>
                {/* Phone */}
                <td>{phone}</td>
                {/* Email */}
                <td>{email}</td>
                {/* Actions */}
                <td>
                    <button className="btn btn-xs mx-1">Edit</button>
                    <button className="btn btn-xs mx-1">Delete</button>
                </td>
            </tr>
    );
};

export default ContactRow;
