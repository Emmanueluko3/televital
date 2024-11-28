import { Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap="20px"
      width="full"
    >
      <GridItem
        flexWrap="wrap"
        colSpan={5}
        height="400px"
        style={{
          background:
            "radial-gradient(circle, rgba(142,226,226,1) 0%, rgba(0,155,182,0.9682466736694678) 100%)",
        }}
        className="w-full rounded-2xl p-10"
      >
        <h3 className="text-4xl font-semibold">Health Overview</h3>
      </GridItem>
      <GridItem
        colSpan={3}
        style={{ backgroundColor: "lightblue" }}
        className="w-full rounded-2xl p-10"
      >
        Helloo
      </GridItem>
      <GridItem colSpan={2}>Helloo</GridItem>
      <GridItem colSpan={1}>Helloo</GridItem>
      <GridItem colSpan={1}>Helloo</GridItem>
    </Grid>
  );
}
