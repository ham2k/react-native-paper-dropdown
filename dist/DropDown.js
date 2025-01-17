import { ScrollView, View, } from "react-native";
import { Checkbox, Divider, Menu, TextInput, TouchableRipple, useTheme, } from "react-native-paper";
import React, { forwardRef, useState, useCallback, Fragment, } from "react";
const { useUpdate } = require("@hashiprobr/react-use-mount-and-update");
const DropDown = forwardRef((props, _ref) => {
    const activeTheme = useTheme();
    const { multiSelect = false, value, onChangeValue, activeColor, mode, label, placeholder, list, dropDownContainerMaxHeight, dropDownContainerHeight, theme, dropDownStyle, dropDownItemStyle, dropDownItemSelectedStyle, dropDownItemTextStyle, dropDownItemSelectedTextStyle, accessibilityLabel, disabled, onFocus = () => { }, onBlur = () => { }, style = {}, contentStyle, editable, borderless, background, centered, rippleColor, underlayColor, touchableStyle, error, selectionColor, underlineColor, activeUnderlineColor, outlineColor, activeOutlineColor, dense, iconColor, iconStyle, } = props;
    const [displayValue, setDisplayValue] = useState("");
    const [inputLayout, setInputLayout] = useState({
        height: 0,
        width: 0,
        x: 0,
        y: 0,
    });
    const [visible, setVisible] = useState(false);
    const onDismiss = () => {
        setVisible(false);
    };
    const showDropDown = () => {
        if (editable !== false) {
            setVisible(true);
        }
    };
    const onLayout = (event) => {
        setInputLayout(event.nativeEvent.layout);
    };
    useUpdate(() => {
        if (multiSelect) {
            const _labels = list
                .filter((_) => value.indexOf(_.value) !== -1)
                .map((_) => _.label)
                .join(", ");
            setDisplayValue(_labels);
        }
        else {
            const _label = list.find((_) => _.value === value)?.label;
            if (_label) {
                setDisplayValue(_label);
            }
        }
    }, [list, value]);
    const isActive = useCallback((currentValue) => {
        if (multiSelect) {
            return value.indexOf(currentValue) !== -1;
        }
        else {
            return value === currentValue;
        }
    }, [value, multiSelect]);
    const setActive = useCallback((currentValue) => {
        if (multiSelect) {
            const valueIndex = value.indexOf(currentValue);
            const values = value.split(",");
            if (valueIndex === -1) {
                onChangeValue([...values, currentValue].join(","));
            }
            else {
                onChangeValue([...values].filter((value) => value !== currentValue).join(","));
            }
        }
        else {
            onChangeValue(currentValue);
        }
    }, [value, onChangeValue, multiSelect]);
    return (<Menu visible={visible} onDismiss={onDismiss} theme={theme} anchor={<TouchableRipple onPress={showDropDown} onLayout={onLayout} accessibilityLabel={accessibilityLabel} onFocus={onFocus} onBlur={onBlur} borderless={borderless} background={background} centered={centered} disabled={disabled} rippleColor={rippleColor} underlayColor={underlayColor} style={{
                ...touchableStyle,
                flexGrow: 1,
                flexDirection: 'column',
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                margin: style.margin,
                marginTop: style.marginTop,
                marginRight: style.marginRight,
                marginBottom: style.marginBottom,
                marginLeft: style.marginLeft,
                padding: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                overflow: 'visible',
            }} theme={theme}>
            <View pointerEvents={"none"} style={{
                flexGrow: 1,
            }}>
              <TextInput value={displayValue} mode={mode} label={label} placeholder={placeholder} pointerEvents={"none"} theme={theme} right={<TextInput.Icon icon={visible ? "menu-up" : "menu-down"} forceTextInputFocus={false} color={iconColor} style={iconStyle} theme={theme}/>} disabled={disabled} error={error} selectionColor={selectionColor} underlineColor={underlineColor} activeUnderlineColor={activeUnderlineColor} outlineColor={outlineColor} activeOutlineColor={activeOutlineColor} dense={dense} multiline={false} numberOfLines={1} style={{
                ...style,
                flexGrow: 1,
                alignSelf: 'stretch',
                margin: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
            }} contentStyle={contentStyle} editable={false}/>
            </View>
          </TouchableRipple>} style={{
            maxWidth: inputLayout?.width,
            width: inputLayout?.width,
            marginTop: inputLayout?.height,
            ...dropDownStyle,
        }}>
        <ScrollView keyboardShouldPersistTaps="handled" bounces={false} style={{
            ...(dropDownContainerHeight
                ? {
                    height: dropDownContainerHeight,
                }
                : {
                    maxHeight: dropDownContainerMaxHeight || 200,
                }),
        }}>
          {list.map((_item, _index) => (<Fragment key={_item.value}>
              <TouchableRipple style={{
                flexDirection: "row",
                alignItems: "center",
            }} onPress={() => {
                setActive(_item.value);
                if (onDismiss) {
                    onDismiss();
                }
            }}>
                <Fragment>
                  <Menu.Item titleStyle={{
                color: isActive(_item.value)
                    ? activeColor || (theme || activeTheme).colors.primary
                    : (theme || activeTheme).colors.onSurface,
                ...(isActive(_item.value)
                    ? dropDownItemSelectedTextStyle
                    : dropDownItemTextStyle),
            }} title={_item.custom || _item.label} style={{
                flex: 1,
                maxWidth: inputLayout?.width,
                ...(isActive(_item.value)
                    ? dropDownItemSelectedStyle
                    : dropDownItemStyle),
            }} onPress={() => {
                setActive(_item.value);
                if (onDismiss) {
                    onDismiss();
                }
            }}/>
                  {multiSelect && (<Checkbox.Android theme={{
                    colors: { accent: activeTheme?.colors.primary },
                }} status={isActive(_item.value) ? "checked" : "unchecked"} onPress={() => setActive(_item.value)}/>)}
                </Fragment>
              </TouchableRipple>
              <Divider />
            </Fragment>))}
        </ScrollView>
      </Menu>);
});
export default DropDown;
