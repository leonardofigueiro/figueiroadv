'use client';
import { useState } from 'react';
import styled from './WhatsButton.module.scss';
import { useInterval } from '@/Hooks/shake';


export default function WhatsButton() {

  const [shake, setShake] = useState(false);

  useInterval({
    callback: () => {
      setShake(!shake);
    },
    delay: 3000
  });
  return (
    <div className={styled.shakingElement}>
      <div className={`${styled.whatsappButton} ${shake ? styled.shake : ''}`}>
        <a href="https://wa.me/+5565992750512?text=Olá,%20gostaria%20de%20tirar%20uma%20dúvida%20jurídica.">
          <img src="/icons/WhatsApp.svg" alt="Ícone do WhatsApp" /><br />
          <span>Fale conosco</span>
        </a>
      </div>
    </div>
  );
}