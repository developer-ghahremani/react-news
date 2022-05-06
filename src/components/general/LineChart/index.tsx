import React from "react";
import { ResponsiveLine } from "@nivo/line";

type Props = {
  data: {
    id: string | number;
    color?: string;
    data: {
      x: number | string | Date;
      y: number | string | Date;
    }[];
  }[];
  axisBottom: string;
  axisLeft: string;
};

const Chart = (props: Props) => {
  return (
    <div className="h-[500px] w-full">
      <ResponsiveLine
        data={props.data}
        margin={{ top: 50, right: 0, bottom: 0, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        // axisBottom={{
        //   // orient: "bottom",
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: props.axisBottom,
        //   legendOffset: 36,
        //   legendPosition: "middle",

        // }}
        axisBottom={null}
        axisLeft={{
          // orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.axisLeft,

          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[]}
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: "left-to-right",
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: "circle",
        //     symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
      />
    </div>
  );
};

export default Chart;
