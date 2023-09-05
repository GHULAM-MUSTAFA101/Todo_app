import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const navigation = useNavigate();
  const header = { 'Access-Control-Allow-Origin': "*" }

  const Submit = () => {
    axios
      .post('https://64f032398a8b66ecf7794176.mockapi.io/todo-crud',
        {
          name: name,
          email: email,
          header,
        })
      .then((response) => {
        const data = response.data;
        console.log(data);
        navigation('/read')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Data fetching Error', errorMessage)
      })

  }

  return (
    <div>
      <h3 className='mt-5'>Create</h3>
      <h3 className='mt-5'>Create</h3>
      <h3 className='mt-5'>Create</h3>
      <div className="container w-50 mt-5">
        <div className="card p-5">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" onChange={(e) => SetName(e.target.value)} placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Email">
            <Form.Control type="email" onChange={(e) => SetEmail(e.target.value)} placeholder="email" />
          </FloatingLabel>
          <div className='mt-3 text-start'>
            <div className="btn px-5 btn-primary" onClick={Submit}>Submit</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Create;











// import React, { useState } from 'react'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

// const Create = () => {
//   const [name, SetName] = useState('');
//   const [email, SetEmail] = useState('');
//   const navigation = useNavigate();
//   const Submit = (e) => {
//     e.preventDefault();
//     axios.post('https://64f032398a8b66ecf7794176.mockapi.io/todo-crud', {
//       name: name,
//       email: email,
//     })
//     navigation("/read")
//   };
//   return (
//     <div>
//       <h3 className='mt-5'>Create</h3>
//       <div className="container w-50 mt-5">
//         <div className="card p-5">
//           <FloatingLabel
//             controlId="floatingInput"
//             label="Email address"
//             className="mb-3"
//           >
//             <Form.Control type="email" onChange={(e) => SetName(e.target.value)} placeholder="name@example.com" />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPassword" label="Email">
//             <Form.Control type="email" onChange={(e) => SetEmail(e.target.value)} placeholder="email" />
//           </FloatingLabel>
//           <div className='mt-3 text-start'>
//             <div className="btn px-5 btn-primary" onClick={Submit}>Submit</div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Create
