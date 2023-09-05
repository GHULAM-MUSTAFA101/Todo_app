import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const back = useNavigate();
    const getData = () => {
        axios.get('https://64f032398a8b66ecf7794176.mockapi.io/todo-crud')
            .then((response) => {
                const data = response.data;
                console.log('Data', data);
                setData(data);

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`https://64f032398a8b66ecf7794176.mockapi.io/todo-crud/${id}`);
            console.log(response.data);
            getData();
        } catch (error) {
            console.error(error);
        }
    };

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    }

    const Backbutn = (() => {
        back('/');
        // alert('Backbutn')
    })

    useEffect(() => {
        getData();
        // deleteItem()
    }, []);


    return (
        <>

            <div className="mt-5 container">
                <h2>Read</h2>
                <div className="card mt-4 py-5 px-3 w-50 mx-auto">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <Link to="/update">
                                        <td><button className='btn btn-primary' onClick={(() => setToLocalStorage(item.id, item.name, item.email))} >Edit</button></td>
                                    </Link>
                                    <td><button className='btn btn-danger' onClick={() => deleteItem(item.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <button className='bg-black text-white text-lg px-4 p-2 text-start mt-4' onClick={Backbutn}>Back</button>
        </>
    )
}

export default Read;





