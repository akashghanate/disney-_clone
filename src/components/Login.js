import styled from 'styled-components';

const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="Hi"/>
                    <SignUp>Get All There</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for
                        an additional fee with Disney+ subscription. As of 26/04/21, the price of Disney+ and
                        The Disney Bundle will increase by Rs.100.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt='' />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex; 
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    width: 100%;
    z-index: -1;
    position: absolute;
    background-size: cover;
    background-image: url("images/login-background.jpg");
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent; 
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
    display: inline-block;
    vertical-align: bottom;
`;

export default Login;