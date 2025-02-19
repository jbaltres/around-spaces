import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background: ${props => props.theme.secondary};
  padding: 15px;
  color: ${props => props.theme.text};
  border-radius: 15px;
  box-shadow: 0 5px 10px ${props => props.theme.shadow};
`;

const CardImg = styled.img`
  height: 100px;
`;

const CardCategory = styled.span`
  margin-right: 4px;
  font-weight: bold;
`;

function Restaurant(props) {
  return (
    <Card odd={props.odd}>
      <CardImg src={props.restaurant.imgSrc} alt={props.restaurant.title} />
      {props.restaurant.title}
      <p>{props.restaurant.description}</p>
      <p>
        Distance: {props.restaurant.distance} minutes
        <br />
        Rating: {props.restaurant.rating} stars
        <br />
        Categories:{" "}
        {props.restaurant.categories.map(category => {
          return <CardCategory key={category}>{category}</CardCategory>;
        })}
      </p>
    </Card>
  );
}

export default Restaurant;
