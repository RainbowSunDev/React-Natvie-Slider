import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CustomToggle from './CustomToggle';
import CustomSlider from './CustomSlider';
export default () => {
  const [newPrice, setNewPrice] = useState("10");
  const [discount, setDiscount] = useState("10");
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.toggleWrap}>
          <Text style={styles.topText}>SALE</Text>
          <CustomToggle />
        </View>
        <Text style={styles.textWarp}>
          You can specify a discount for the product and get to the main page into the block of promotions
        </Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.itemText}>
              New price, USD
            </Text>
            <TextInput style={styles.input} value={newPrice} onChangeText={setNewPrice} />
          </View>
          <View style={styles.col}>
            <Text style={styles.itemText}>
              Discount, USD
            </Text>
            <TextInput style={styles.input} value={discount} onChangeText={setDiscount} />
          </View>
        </View>
        <View style={styles.markWrap}>
          <CustomSlider
            max={10}
            RLpadding={13}
            callback={this.singleSliderValueCallback}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>PUBLISHED - 25.04.2022</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '100%',
    backgroundColor: '#E3F1E0',
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    width: "100%",
    height: 50,
    alignItems: "center",
  },
  buttonText: {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: 16,
    lineHeight: 50,
    fontWeight: '700'
  },
  markWrap: {
    marginTop: 15,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: 'white',
    width: '100%',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    height: 46
  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
  },
  col: {
    flex: 1,
    marginRight: 5,
    // marginRight: 10,
    // padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
  },
  textWarp: {
    opacity: 0.5,
    fontSize: 12,
    flexWrap: 'nowrap'
  },
  middle: {
    justifyContent: "space-between",
    height: 174,
    width: '100%',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    backgroundColor: '#E3F1E0',
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // flexWrap:'wrap',
    // fontFamily: 'Montserrat'
  },
  top: {
    height: 105,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    width: '100%',
    backgroundColor: '#E3F1E0',
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  toggleWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  topText: {
    fontSize: 18,
    fontWeight: 700
  },

});