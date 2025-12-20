import React from 'react';
import { ButtonTopSmallDefault } from './ButtonTopSmallDefault';
import { ButtonDefaultDefaultDefault } from './ButtonDefaultDefaultDefault';
import { ButtonBottomDefaultDefault } from './ButtonBottomDefaultDefault';

export const Primary: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-family-heading)' }}>Primary Button Stack</h3>
      <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        <ButtonTopSmallDefault />
        <ButtonDefaultDefaultDefault />
        <ButtonBottomDefaultDefault />
      </div>
      
      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: 'var(--font-family-heading)' }}>Large Variation</h3>
      <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        <ButtonTopSmallDefault />
        <ButtonDefaultDefaultDefault />
        <ButtonBottomDefaultDefault />
      </div>
    </div>
  );
};
