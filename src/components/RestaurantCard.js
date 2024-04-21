import { Box, Card, Flex } from "@radix-ui/themes";
import React from "react";

function RestaurantCard(props) {
  const { restData } = props;
  const {
    name,
    cloudinaryImageId,
    locality,
    costForTwo,
    cuisines,
    avgRating,
    id,
  } = restData?.info;
  const { slaString } = restData?.info?.sla;
  const handleMore = (cuisineData, n) => {
    let new_data =
      n < 5
        ? cuisineData?.join(",")
        : cuisineData?.slice(0, 3)?.join(",") + "...";

    return new_data;
  };
  return (
    <Box maxWidth="240px" className="mr-3 mb-2 hover:cursor-pointer" key={id}>
      <Card size="3" className="p-0">
        <Flex gap="3" direction="column">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            className="w-[300px] h-[150px]"
            alt=""
            srcset=""
          />
          <Box className="p-2">
            <h2 className="font-medium">{name}</h2>
            <p className="text-[15px] font-medium">
              {avgRating} • <span>{slaString}</span>
            </p>
            <p className="text-[15px] font-medium">{costForTwo}</p>
            <h3 className="text-gray-500 text-[15px]">
              {handleMore(cuisines, cuisines.length)}
            </h3>
            <h3 className="text-gray-500 text-[15px]">{locality}</h3>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

export default RestaurantCard;
