import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import Plotly from 'react-native-plotly';

const upTrace = {
  __id: 'up',
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 3, 4, 8],
  type: 'scatter',
};

const downTrace = {
  __id: 'down',
  x: [1, 2, 3, 4, 5],
  y: [8, 4, 3, 2, 1],
  type: 'scatter',
};

function randArr(num, mul) {
  const arr = [];
  const index = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random() * mul)
    index.push(i);
  }
  return arr;
}

const App = () => {
  const [trace, setTrace] = useState(upTrace);
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(true);

  function swapData() {
    if (trace.__id === 'up') {
      setTrace(downTrace);
    } else {
      setTrace(upTrace);
    }
  }

  const update = (_, { data, layout, config }, plotly) => {
    plotly.react(data, layout, config);
  };

  function reset() {
    setLoading(true);
    setResetKey(resetKey + 1);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <Button onPress={swapData} title="Swap Data" />
        </View>
        <View style={styles.loadingRow}>
          <Text>{loading ? 'Loading' : 'Finished Loading'}</Text>
        </View>
        <View style={styles.chartRow}>
          <Plotly
            // data={[trace]}
            // layout={{ title: 'Plotly.js running in React Native!' }}
            style={{ borderWidth: 1, borderColor: 'green', width: 'auto' }}
            data={[
              {
                x: [4],
                y: [8],
                z: [4],
                type: 'scatter3d',
                mode: 'markers',
                marker: { color: 'red' },
                scene: 'scene3',
              }
            ]}
            layout={{
              width: '100%',
              height: 900,
              title: 'Fancy Plot',
              scene3: {
                domain: {
                  x: [0.5, 0.99],
                  y: [0.5, 1]
                },
                camera: {
                  center: { x: 0, y: 0, z: 0 },
                  eye: { x: 2.5, y: 0.1, z: 0.1 },
                  up: { x: 0, y: 0, z: 1 }
                }
              },
            }}
            update={update}
            // onLoad={() => setLoading(false)}
            // debug
            key={resetKey}
            enableFullPlotly
          />
        </View>
        <View style={styles.buttonRow}>
          <Button onPress={reset} title="Force chart rerender" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
  },
  loadingRow: {
    flexDirection: 'row',
  },
  chartRow: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'red'
  },
  container: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;