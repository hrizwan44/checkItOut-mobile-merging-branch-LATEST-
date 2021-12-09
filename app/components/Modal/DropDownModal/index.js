import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Text} from '../../../components';
import StringsOfLanguages from '../../../util/stringsOfLanguage';
import styles from './styles';

const DropDownModal = ({isVisible, optionList, selected, closeModal,setSelected}) => {
  const [selectedOption, setSelectedOption] = useState(selected);
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      style={styles.bottomModal}>
      <View style={styles.optionModalBackground}>
        <View style={styles.optionsModalWrapper}>
          {optionList &&
            optionList.map((elem) => (
              <TouchableOpacity
                style={styles.dropDownItem}
                onPress={() => setSelectedOption(elem)}>
                <Text footnote>{elem.title}</Text>

                {selectedOption.key === elem.key && (
                  <Icon
                    name="check"
                    iconFamily="Entypo"
                    size={24}
                    color="#B05FFF"
                  />
                )}
              </TouchableOpacity>
            ))}
          <View style={styles.actionRow}>
            <TouchableOpacity onPress={closeModal}>
              <Text body1 grayColor style={{marginHorizontal: 10}}>
                {StringsOfLanguages.Cancel}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected(selectedOption)}>
              <Text body1 style={{color: '#B05FFF'}}>
                {StringsOfLanguages.Select}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DropDownModal;
