'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { InputMask } from '@react-input/mask';
import styled from '../../src/styles/Commons/Form.module.scss';
import axios from 'axios';


export default function Form() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const data = {
    service_id: 'service_m5lo0qg',
    template_id: 'template_ojule2q',
    user_id: 'EBLerVlJQhslGeQ-P',
    template_params: {
      'name': nome,
      'last_name': sobrenome,
      'tel': tel,
      'email': email,
      'msg': msg
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then(() => {
        alert('Seu e-mail foi enviado! Em breve retornaremos.');
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      })
      .then(() => {
        setNome('');
        setEmail('');
        setMsg('');
        setSobrenome('');
        setTel('');
      });
  };

  return (
    <section className={`${styled.section__form} d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center px-1`}>
      <form
        method='POST'
        className='d-flex flex-column gap-3 align-items-center' 
        onSubmit={(event) => {
          sendEmail(event);
        }} >
        <div className='d-flex gap-3'>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="name"> Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={nome}
              onChange={(field) => {
                setNome(field.target.value);
              }}
              required

            />

          </div>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={sobrenome}
              onChange={(field) => setSobrenome(field.target.value)}
              required
            />
          </div>
        </div>

        <div className='d-flex flex-column w-100 gap-1'>
          <label htmlFor="tel">Telefone / Whatsapp</label>
          <InputMask
            className='inputTel'
            id="tel"
            name="tel"
            mask='(__) _____-____'
            replacement={{ _: /\d/ }}
            placeholder='(99) 99999-9999'
            value={tel}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setTel(event.target.value)}
            required
          />
        </div>

        <div className='d-flex flex-column w-100 gap-1'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(field) => setEmail(field.target.value)}
            required
          />
        </div>

        <div className='d-flex flex-column w-100 gap-1'>
          <label htmlFor="msg">Mensagem</label>
          <textarea
            name="msg"
            id="msg"
            rows={4}
            value={msg}
            onChange={(field) => setMsg(field.target.value)}
            required
          />
        </div>



        <button
          type='submit'
          
        >ENVIAR</button>

      </form>

    </section>

  );
}