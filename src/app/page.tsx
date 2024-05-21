'use client'
import Plot from "react-plotly.js";
export default function Home() {
  return (
    <main>
      <Plot
         data={[
          {
            x: [1, 2, 3,4,5,6,7],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3,4], y: [2, 6, 3,8]},
        ]}
        layout={ {width: 720, height: 540, title: 'A Fancy Plot'} }
      />
      <Plot
         data ={ [{
          values: [19, 26, 55],
          labels: ['React', 'Next', 'Node'],
          type: 'pie'
        }]}
        layout={{width:500,height:600}}
      />
      <Plot
         data ={ [{
          values: [19, 26, 55],
          labels: ['React', 'Next', 'Node'],
          hole:.5,
          type: 'pie'
          
        }]}
        layout={{width:500,height:600}}
      />
      <Plot
      data={[
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: 'scatter'
        },
        {
          x: [4, 3, 2, 1],
          y: [15, 10, 23, 37],
          type: 'scatter'
        },

      ]}
      layout={{width:800,height:400}}
      />
    </main>
  );
}
