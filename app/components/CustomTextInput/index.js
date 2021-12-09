import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import styles from "./styles";
import { BaseStyle, BaseColor } from "../../config";
import Icon from "../Icon";
export default class CustomTextInput extends Component {
	render() {
		let {
			style,
			styleText,
			icon,
			placeholder,
			keyboardType,
			placeholderTextColor,
			onChangeText,
			onBlur,
			value,
			secureTextEntry,
			clearField,
			inputStyle,
			multiline,
			numberOfLines,
			shadowInput,
			editable,
			rightIcon,
			textAlignVertical,
			textAlign,
			onSubmitEditing,
			defaultValue,
			hitSlop,
			onFocus,
		} = this.props;

		return (
			<View style={[BaseStyle.iconInputContainer, style]}>
				{icon ? icon : null}
				<TextInput
					style={[
						BaseStyle.textInputWithIcon,
						shadowInput && styles.shadowInput,
						inputStyle,
					]}
					onFocus={onFocus}
					placeholder={placeholder}
					keyboardType={keyboardType}
					placeholderTextColor={placeholderTextColor}
					onChangeText={onChangeText}
					onBlur={onBlur}
					textAlignVertical={textAlignVertical}
					textAlign={textAlign}
					value={value}
					onSubmitEditing={onSubmitEditing}
					defaultValue={defaultValue}
					// editable={editable ? editable : true}
					multiline={multiline}
					numberOfLines={numberOfLines ? numberOfLines : 1}
					secureTextEntry={secureTextEntry}
					hitSlop={hitSlop}
				/>
				{rightIcon ? rightIcon : null}
			</View>
		);
	}
}
// CustomTextInput.propTypes = {
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   icon: PropTypes.node,
// };

CustomTextInput.defaultProps = {
	style: {},
	icon: null,
};
