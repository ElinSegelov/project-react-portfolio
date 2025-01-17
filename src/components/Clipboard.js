import React, { useState, useCallback, useEffect, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components/macro';

const ClipBoard = () => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(); // React ref for timer reference

  useEffect(() => {
    // Return cleanup function to clear timer when unmounting
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const onCopy = useCallback(() => {
    timerRef.current = setTimeout( // save timer reference
      () => setCopied(false), // function callback to update state
      1800
    );
    setCopied(true);
  }, []);

  return (
    <div>
      {copied ? <CopiedMessage aria-live="assertive">Copied!</CopiedMessage> : null}
      <CopyToClipboard onCopy={onCopy} text="elin.segelov@gmail.com">
        <ContactButton type="button"><span className="sr-only">Click to copy e-mail</span>elin.segelov@gmail.com</ContactButton>
      </CopyToClipboard>
    </div>
  );
}

export default ClipBoard;

const ContactButton = styled.button`
  color: #FFF;
  display: block;
  font-family: 'Montserrat', serif;
  margin: 0 auto;
  font-size: 17px;
  cursor: pointer;
  background-color: transparent;
`

const CopiedMessage = styled.p`
  position: absolute;
  background-color: var(--secondary);
  width: 4.5rem;
  box-shadow: 2px 2px 2px var(--heading);
  
  right: -5rem;
  bottom: -0.2rem;
  border-radius: 0.3rem;
  color: var(--heading) !important;
`