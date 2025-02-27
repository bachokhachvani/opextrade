import React from "react";
import { useIntl } from "../hooks-utils/useIntl";
import styled, { css } from "styled-components";
import HeaderLayout from "../components/layout/HeaderLayout";
import Image from "next/image";
import Link from "next/link";

const Main = styled.main`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Authentication = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: #0b074b;
  line-height: 90px;
  border-bottom: 5px solid #d11000;
  @media (max-width: 1044px) {
    display: none;
  }
`;

const AuthWithLink = styled.a`
  margin-top: 40px;
  padding: 0 10px;
  background: #f3f3f3;
  border-radius: 16px;
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  max-width: 580px;
  font-weight: bold;
  font-size: 28px;
  color: #0b074b;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;
const BrokerTitle = styled.h4`
  margin-left: 10px;
`;
const BrokerIcon = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  font-size: 39px;
  text-align: center;
  line-height: 70px;
`;

function Home() {
  const { f } = useIntl();
  console.log(f);
  return (
    <>
      <HeaderLayout />
      <Main>
        {/* <Authentication>{f('auth')}</Authentication> */}
        <Link passHref href="/finam">
          <AuthWithLink>
            <Image width="70" height="70" src="/images/finam.png" alt="Finam" />
            <BrokerTitle>Finam</BrokerTitle>
          </AuthWithLink>
        </Link>
        <Link passHref href="/tinkoff">
          <AuthWithLink>
            <Image
              width="190"
              height="43"
              src="/images/tinkoff-new.svg"
              alt="Tinkoff"
            />
          </AuthWithLink>
        </Link>
        {/* <Link passHref href="/Ib"> */}
        <AuthWithLink disabled>
          <Image width="70" height="70" src="/images/ib.png" alt="Ib" />
          <BrokerTitle>IB</BrokerTitle>
        </AuthWithLink>
        {/* </Link> */}

        <Link passHref href="/demo">
          <AuthWithLink>
            <BrokerIcon>📈</BrokerIcon>
            <BrokerTitle>Demo</BrokerTitle>
          </AuthWithLink>
        </Link>
      </Main>
    </>
  );
}

export default Home;
