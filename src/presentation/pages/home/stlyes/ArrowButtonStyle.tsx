import { CSSProperties } from 'react';

const arrowButtonStyle = (position: 'left' | 'right'): CSSProperties => ({
    position: 'absolute',
    top: '50%',
    [position]: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    fontSize: '24px',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1,
});

export default arrowButtonStyle;
