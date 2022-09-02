import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
} from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import HeaderMenu from '../header';
import { colors } from '../../style/colors';
import Flex from '../../style/Flex';
import Text from '../../style/Text';
import ClassicInput from '../../style/ClassicInput';
import Message from './Message';
import ArrowSrc from '../../images/arrow-back.svg';
import { useHistory } from 'react-router-dom';

const ChatWrapper = styled.div`
    width: 100%;
    min-height: inherit;
    background: ${colors.darkGrey};
`;

const ContainerFlex = styled(Flex)`
    min-height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const StyledRow = styled(Row)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const StyledRowContainer = styled(StyledRow)`
    max-width: 1100px;
    width: 100%;
    justify-content: center;
    background: ${colors.grey};
    padding: 2rem 16px;
`;

const Arrow = styled.img`
    position: relative;
    left: -9%;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        transform: scale(1.2);
    }
`;

const TextTitle = styled(Text)`
    margin-bottom: 0;
    padding-right: 1rem;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
`;

const MessagesListContainer = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 580px;
    width: 100%;
`;

const MessagesDate = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: #ffffffd9;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    z-index: 1;
`;

const MessagesFlex = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: flex-end;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 1100px;
    margin: auto;
    padding-top: 3rem;
`;

const AutoOverflow = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;

    overflow: auto;
    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
        background-color: #f9f9fd;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #cecece, #929292);
    }
`;

const NoMessages = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
`;

const SendInputContainer = styled.div`
    padding-right: 5rem;
`;

const SendIcon = styled.div`
    position: absolute;
    top: 3px;
    right: 0;
    width: 40px;
    height: 40px;
    background: url(/images/send-messsage.svg);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

const Chat = () => {
    const [newMessage, setNewMessage] = useState('');
    const [element, setElement] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        {
            message: 'Здравствуйте, Николай! Чем могу помочь?',
            its_me: false,
            time: '14:21',
        },
        {
            message:
                'Здравствуйте, не получается оплатить подписку, оплата не проходит',
            its_me: true,
            time: '14:22',
        },
        {
            message:
                'Давайте я вам помогу и проведу платеж вручную. Мне нужны:-номер вашей карты-дата окончания карты-3-ех значный CVV код',
            its_me: false,
            time: '14:24',
        },
        {
            message:
                'Ну вы же из поддержки, ладно 4444-5555-6666-7777 07/24 123',
            its_me: true,
            time: '14:26',
        },
    ]);

    const history = useHistory();

    // ссылка на элемент со списком сообщений
    const refList = useCallback((node) => {
        if (node !== null) {
            setElement(node);
        }
    }, []);

    const scrollToBottom = useCallback(() => {
        if (element) {
            element.scroll({
                top: element.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [element]);

    // прокрутка перед формированием дома
    useLayoutEffect(() => {
        setTimeout(scrollToBottom, 10);
    }, [scrollToBottom]);

    useEffect(() => {
        if (chatMessages) {
            scrollToBottom();
        }
    }, [chatMessages, scrollToBottom]);

    const onHandleSubmit = () => {
        if (newMessage) {
            const d = new Date();
            setChatMessages([
                ...chatMessages,
                {
                    message: newMessage,
                    its_me: true,
                    time: d.getHours() + ':' + d.getMinutes(),
                },
            ]);
            setNewMessage('');
        }
    };

    // отправляем сообщение(с помощью клавиатуры)
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onHandleSubmit();
        }
    };

    const onHandleChange = (e) => {
        setNewMessage(e.target.value);
    };

    return (
        <ChatWrapper>
            <ContainerFlex>
                <HeaderMenu headerText="Поддержка" />
                <StyledRowContainer>
                    <Arrow src={ArrowSrc} onClick={() => history.goBack()} />
                    <Col xs={19}>
                        <TextTitle>Поддержка</TextTitle>
                    </Col>
                </StyledRowContainer>
                <MessagesListContainer>
                    <MessagesDate>Сегодня</MessagesDate>
                    {chatMessages.length ? (
                        <MessagesFlex>
                            <AutoOverflow ref={refList}>
                                {chatMessages.map((item, index) => (
                                    <Message
                                        key={index}
                                        its_me={item.its_me}
                                        message={item.message}
                                        time_message={item.time}
                                    />
                                ))}
                            </AutoOverflow>
                        </MessagesFlex>
                    ) : (
                        <NoMessages>
                            <Text>Нет сообщений</Text>
                        </NoMessages>
                    )}
                </MessagesListContainer>
                <StyledRowContainer>
                    <Col xs={24}>
                        <SendInputContainer>
                            <ClassicInput
                                placeholder="Сообщение"
                                value={newMessage}
                                onChange={onHandleChange}
                                onKeyPress={handleKeyPress}
                            ></ClassicInput>
                        </SendInputContainer>

                        <SendIcon onClick={onHandleSubmit}></SendIcon>
                    </Col>
                </StyledRowContainer>
            </ContainerFlex>
        </ChatWrapper>
    );
};

export default Chat;
