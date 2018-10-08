import React, {Fragment} from "react";
import Link from "next/link";
import styled from "styled-components";
import { Row } from "antd";

const SponsorsBox = styled.div`
  text-align: center;
  width: 100%;
  margin: 1rem 0;
  a{
    display:inline-block;
    margin: 10px 16px;
    vertical-align: middle;
    -moz-transition:linear 300ms 0s;
    -o-transition:linear 300ms 0s;
    -webkit-transition:linear 300ms;
    -webkit-transition-delay:0s;
    transition:linear 300ms 0s;
    img{
      filter: grayscale(100%);
      max-width: 120px;
      opacity : 0.5;
      -moz-transition:linear 300ms 0s;
      -o-transition:linear 300ms 0s;
      -webkit-transition:linear 300ms;
      -webkit-transition-delay:0s;
      transition:linear 300ms 0s;
    }
    &:hover{
      img{
        opacity : 1;
        filter: grayscale(0%);
      }
    }
  }
`;

function renderFarm(items) {
    return items.map((item, index) => {
        return (
          <Link href={item.url}  key={index}>
            <a target="_blank">
             <img src={item.image} alt={item.name} />
            </a>
          </Link>
        )
    });
}

const Sponsors = ({items}) => {
    return (
      <SponsorsBox>
              {renderFarm(items)}
      </SponsorsBox>
    )

}
export default Sponsors;