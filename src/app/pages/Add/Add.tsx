import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export default function Add(): JSX.Element {
  const [name, setName] = useState('');
  const [descriprion, setDescriprion] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('https://json-server.neuefische.de/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, descriprion }),
    });
    setName('');
    setDescriprion('');
    navigate('../', { replace: true });
  }

  //   useEffect(() => {
  //     async function deletePost() {
  //       await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //         method: 'DELETE',
  //       });
  //       setStatus('Delete successful');
  //     }

  //     deletePost();
  //   }, []);

  return (
    <Form onSubmit={handleSubmit}>
      Name
      <Input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      Description
      <Textarea
        rows={5}
        value={descriprion}
        onChange={(event) => setDescriprion(event.target.value)}
      />
      <InputSubmit type="submit" />
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  justify-items: center;
  border: solid 3px;
  border-color: steelblue;
  background-color: yellow;
  margin: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 50%;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  margin-top: 5px;
  width: 50%;
  padding: 4px;
  border-radius: 5px;
`;

const InputSubmit = styled.input`
  margin-top: 20px;
  width: 30%;
  padding: 4px;
  margin-bottom: 10px;
  background-color: #14e914;
  border: none;
  border-radius: 5px;
`;
function setStatus(arg0: string): any {
  throw new Error('Function not implemented.');
}
