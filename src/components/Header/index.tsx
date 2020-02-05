import React, { useContext } from 'react'; //use context, para pegar contexto da applicacao
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'; // aplica um percentual de preto em cima de uma determinada cor

import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    //pegando cor do themes
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            Hello World

        <Switch 
            onChange={toggleTheme}
            checked={title == 'dark'}
            checkedIcon={false} //tirando o icone que vem por padrao
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={shade(0.25, colors.primary)}
            onColor={colors.secundary}

        />
        </Container>
    );
};

export default Header;