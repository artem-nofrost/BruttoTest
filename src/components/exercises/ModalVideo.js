import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const ModalWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 9999;
    background-color: #000000c4;
`;

const ModalVideoWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    padding-top: 56.25%;
`;

const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
    top: 50%;                        
    transform: translate(0, -50%) } 
    max-height: 619px;
`;

const ModalVideo = ({ isOpen, setIsOpen }) => {
    return (
        isOpen && (
            <ModalWrapper onClick={(e) => setIsOpen(false)}>
                <ModalVideoWrapper>
                    <StyledReactPlayer
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </ModalVideoWrapper>
            </ModalWrapper>
        )
    );
};

export default ModalVideo;
