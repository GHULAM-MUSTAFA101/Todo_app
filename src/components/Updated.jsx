import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Updated = () => {
    const [id, setId] = useState(0);
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem('id'));
        SetName(localStorage.getItem('name'));
        SetEmail(localStorage.getItem('email'));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('id', id)
        axios
            .put(`https://64f032398a8b66ecf7794176.mockapi.io/todo-crud/${id}`, {
                name: name,
                email: email,
            }).then(() => {
                navigate('/read')
            });
    }

    const back = useNavigate();
    const Backbutn = (() => {
        back('/read')
    })

    return (
        <div>

            <h3 className='mt-5'>Update</h3>
            <div className="container w-50 mt-5">
                <div className="card p-5">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email"
                            value={name}
                            onChange={(e) => SetName(e.target.value)}
                            placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Email">
                        <Form.Control type="email"
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            placeholder="email" />
                    </FloatingLabel>
                    <div className='mt-3 text-start'>
                        <div className="btn px-5 btn-primary" onClick={(handleSubmit)} >Update</div>
                    </div>
                </div>
            </div>
            <button className='bg-black text-white text-lg px-4 p-2 text-start mt-4' onClick={Backbutn}>Back</button>
        </div>
    )
}

export default Updated
