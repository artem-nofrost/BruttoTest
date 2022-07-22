import React from 'react';
import Router from './Router';

import styled from 'styled-components';

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <AppWrapper>
            <Router />
        </AppWrapper>
    );
}

export default App;
