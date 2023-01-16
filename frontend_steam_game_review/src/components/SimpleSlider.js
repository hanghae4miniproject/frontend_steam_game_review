import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bear from "../img/농담곰018.jpg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
    };
    const items = [
      { id: 1, url: bear },
      { id: 2, url: bear },
      { id: 3, url: bear },
      { id: 4, url: bear },
      { id: 5, url: bear },
      { id: 6, url: bear },
      { id: 7, url: bear },
      { id: 8, url: bear },
      { id: 9, url: bear },
      { id: 10, url: bear },
    ];
    return (
      <Container>
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
