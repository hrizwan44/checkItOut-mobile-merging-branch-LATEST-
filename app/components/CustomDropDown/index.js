import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { BaseColor } from "../../config";
import isEqual from "lodash/isEqual";
import EntypoIcon from "react-native-vector-icons/Entypo";
const CustomDropDown = ({
	itemList,
	style,
	searchable,
	handleSelected,
	placeholder,
	initialValue = null,
	zIndexInverse = undefined,
	zIndex = undefined,
	multiple = false,
	dropDownContainerStyle,
	dropDownMaxHeight = 300,
	selectedValue = null,
	disabled = false,
	onPress,
	labelStyle,
	listMode = "FLATLIST",
	listItem,
	keepDownArrow,
	arrowDownSize,
	arrowDownColor,
	arrowDownStyle,
	arrowUpSize,
	arrowUpColor,
	arrowUpStyle,
}) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(initialValue);
	const [items, setItems] = useState(itemList);

	useEffect(() => {
		setItems(itemList);
	}, [itemList]);
	// useEffect(() => {
	//   if (JSON.stringify(selectedValue) !== JSON.stringify(value)) {
	//     setValue(selectedValue);
	//     handleSelected(selectedValue);
	//   }
	// }, [selectedValue]);
	// useEffect(() => {
	//   if (
	//     initialValue?.length > 0 &&
	//     JSON.stringify(initialValue) !== JSON.stringify(value)
	//   ) {
	//     setValue(initialValue);

	//     handleSelected(initialValue);
	//   }
	// }, [initialValue]);

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setValue}
			setItems={setItems}
			searchable={searchable}
			style={style}
			placeholder={placeholder}
			zIndex={zIndex}
			dropDownMaxHeight={dropDownMaxHeight}
			multiple={multiple}
			disabled={disabled}
			onPress={onPress}
			onChangeValue={(value) => {
				handleSelected(value);
			}}
			zIndexInverse={zIndexInverse}
			style={[{ borderColor: BaseColor.grayColor }, style]}
			searchContainerStyle={{ borderColor: BaseColor.grayColor }}
			dropDownContainerStyle={[
				{
					borderColor: BaseColor.grayColor,
					height: 1000,
				},
				dropDownContainerStyle,
			]}
			scrollViewProps={{
				nestedScrollEnabled: true,
				horizontal: false,
				persistentScrollbar: true,
			}}
			ArrowDownIconComponent={({ style }) => (
				<EntypoIcon
					name="chevron-down"
					color={arrowUpColor || "#297480"}
					size={arrowUpSize || 25}
					style={arrowUpStyle}
				/>
			)}
			ArrowUpIconComponent={
				keepDownArrow
					? ({ style }) => (
							<EntypoIcon
								name="chevron-down"
								color={arrowDownColor || "#297480"}
								size={arrowDownSize || 25}
								style={arrowDownStyle}
							/>
					  )
					: ({ style }) => (
							<EntypoIcon
								name="chevron-up"
								color={arrowDownColor || "#297480"}
								size={arrowDownSize || 25}
								style={arrowDownStyle}
							/>
					  )
			}
			placeholderStyle={labelStyle}
			labelProps={{
				numberOfLines: 1,
				style: labelStyle,
			}}
			listItemLabelStyle={labelStyle}
			// listMode={listMode}
			renderListItem={listItem}
		/>
	);
};

export default CustomDropDown;
