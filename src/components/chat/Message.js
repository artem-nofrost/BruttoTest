import React from 'react';
import styled from 'styled-components';
import { colors } from '../../style/colors';

const MessageContainer = styled.div`
    display: flex;
    padding: 1rem 0;
    &:nth-last-child(2) {
        margin-bottom: 0.5rem !important;
    }
`;

const MessageContainerMainMessage = styled(MessageContainer)`
    justify-content: flex-end;
    .current-msg {
        color: ${colors.white};
        background: #0066ff;
    }
`;

const MessageContainerNoMainMessage = styled(MessageContainer)`
    justify-content: flex-start;
    .current-msg {
        color: ${colors.darkGrey};
        background: ${colors.white};
    }
`;

const MessageWrapper = styled.div`
    position: relative;
    max-width: 50%;
`;

const MessageName = styled.div`
    margin-bottom: 1rem;
    color: #ffffffd9;
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
`;

const MessageAvatar = styled.div`
    width: 48px;
    height: 48px;
    align-self: end;
    background: url(/images/message_avatar.svg);
    margin-right: 1rem;
`;

const CurrentMessage = styled.div`
    width: auto;
    padding: 1rem;
    border-radius: 8px;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    word-break: break-word;
`;

const Message = ({ its_me, message, time_message }) => {
    return its_me ? (
        <MessageContainerMainMessage>
            <MessageWrapper>
                <CurrentMessage className="current-msg">
                    <span>{message}</span>
                    <div className="current-msg-time">
                        <span>{time_message}</span>
                    </div>
                </CurrentMessage>
            </MessageWrapper>
        </MessageContainerMainMessage>
    ) : (
        <MessageContainerNoMainMessage>
            <MessageAvatar></MessageAvatar>
            <MessageWrapper>
                <MessageName>Петрович</MessageName>
                <CurrentMessage className="current-msg">
                    <span>{message}</span>
                    <div className="current-msg-time">
                        <span>{time_message}</span>
                    </div>
                </CurrentMessage>
            </MessageWrapper>
        </MessageContainerNoMainMessage>
    );
};

export default Message;
