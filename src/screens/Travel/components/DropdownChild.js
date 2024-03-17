import React, { useState } from "react";
import { View, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
const DropdownChild = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    <View>
      <Dropdown
        style={[{ paddingRight: 15, borderRadius: 5, backgroundColor: "#eeeeee", width: props.DDWidth, marginTop: 30, height: 50 }, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={{ fontSize: 16, textAlign: 'center', color: 'grey' }}
        selectedTextStyle={{ fontSize: 16, textAlign: 'center' }}
        inputSearchStyle={{ height: 40, fontSize: 16 }}
        data={props.data}
        search={props.DDSearch}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? props.label : props.label}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}
export default DropdownChild;