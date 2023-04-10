import { Item } from './Item';
import React, { useEffect, useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default CustomSlider = ({ RLpadding, max }) => {
  const [value, setValue] = useState(0);
  const [percent, setPercent] = useState(0);
  const [offest, setOffest] = useState(0);
  useEffect(() => {
    setPercent(parseInt(value * 1000 / max));
  }, [value])
  renderScale = () => {
    const items = [];
    for (let i = 0; i <= max; i++) {
      items.push(
        <Item
          key={i}
          value={i}
          max={max}
        />
      );
    }
    return items;
  }
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View style={[styles.column, { marginHorizontal: RLpadding }]}>
          {renderScale()}
        </View>
        <LinearGradient
          colors={['rgba(235, 255, 237, 0.24)', 'rgba(123, 237, 104, 0.6)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[styles.gradient, { width: (percent + "%") }]}>
        </LinearGradient>
        <Slider
          value={value}
          step={0.01}
          onValueChange={v => setValue(v)}
          thumbTintColor='white'
          maximumTrackTintColor='rgba(0,0,0,0.2)'
          minimumTrackTintColor='#089E3B'
          thumbStyle={{ width: (RLpadding * 2), height: (RLpadding * 2), borderRadius: RLpadding }}
        />
      </View>
      <View style={styles.pieWarp}>
        <View style={styles.pie}>
          <Text style={styles.pieText}>{percent}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 3
  },
  pieWarp: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  pieText: {
    lineHeight: 55,
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
  },
  pie: {
    alignItems: 'center',
    borderRadius: 50,
    width: 55,
    height: 55,
    backgroundColor: '#FD9A00'
  },
  gradient: {
    height: 40,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: -26,
  },
  active: {
    textAlign: 'center',
    fontSize: 20,
    color: '#5e5e5e',
  },
  inactive: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#bdc3c7',
  },
  line: {
    textAlign: 'center',
  }
});

