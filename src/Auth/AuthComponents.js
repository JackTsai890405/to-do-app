import styledComponents from "styled-components";

const Container = styledComponents.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

const Input = styledComponents.input`
    border-radius: 5px;
    margin-bottom: 16px;
`;

const Button = styledComponents.button`
    border-radius: 5px;
`;

const SpaceButton = styledComponents(Button)`
    margin-right: 16px;
`;

export { Container, Input, Button, SpaceButton };