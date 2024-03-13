System.register("DropDown", ["react-native", "react-native-paper", "react"], function (exports_1, context_1) {
    "use strict";
    var react_native_1, react_native_paper_1, react_1, useUpdate, DropDown;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            },
            function (react_native_paper_1_1) {
                react_native_paper_1 = react_native_paper_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            useUpdate = require("@hashiprobr/react-use-mount-and-update").useUpdate;
            DropDown = react_1.forwardRef((props, _ref) => {
                const activeTheme = react_native_paper_1.useTheme();
                const { multiSelect = false, value, onChangeValue, activeColor, mode, label, placeholder, list, dropDownContainerMaxHeight, dropDownContainerHeight, theme, dropDownStyle, dropDownItemStyle, dropDownItemSelectedStyle, dropDownItemTextStyle, dropDownItemSelectedTextStyle, accessibilityLabel, disabled, onFocus = () => { }, onBlur = () => { }, style = {}, contentStyle, editable, borderless, background, centered, rippleColor, underlayColor, touchableStyle, error, selectionColor, underlineColor, activeUnderlineColor, outlineColor, activeOutlineColor, dense, iconColor, iconStyle, } = props;
                const [displayValue, setDisplayValue] = react_1.useState("");
                const [inputLayout, setInputLayout] = react_1.useState({
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                });
                const [visible, setVisible] = react_1.useState(false);
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
                const isActive = react_1.useCallback((currentValue) => {
                    if (multiSelect) {
                        return value.indexOf(currentValue) !== -1;
                    }
                    else {
                        return value === currentValue;
                    }
                }, [value, multiSelect]);
                const setActive = react_1.useCallback((currentValue) => {
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
                return (react_1.default.createElement(react_native_paper_1.Menu, { visible: visible, onDismiss: onDismiss, theme: theme, anchor: react_1.default.createElement(react_native_paper_1.TouchableRipple, { onPress: showDropDown, onLayout: onLayout, accessibilityLabel: accessibilityLabel, onFocus: onFocus, onBlur: onBlur, borderless: borderless, background: background, centered: centered, disabled: disabled, rippleColor: rippleColor, underlayColor: underlayColor, style: {
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
                        }, theme: theme },
                        react_1.default.createElement(react_native_1.View, { pointerEvents: "none", style: {
                                flexGrow: 1,
                            } },
                            react_1.default.createElement(react_native_paper_1.TextInput, { value: displayValue, mode: mode, label: label, placeholder: placeholder, pointerEvents: "none", theme: theme, right: react_1.default.createElement(react_native_paper_1.TextInput.Icon, { icon: visible ? "menu-up" : "menu-down", forceTextInputFocus: false, color: iconColor, style: iconStyle, theme: theme }), disabled: disabled, error: error, selectionColor: selectionColor, underlineColor: underlineColor, activeUnderlineColor: activeUnderlineColor, outlineColor: outlineColor, activeOutlineColor: activeOutlineColor, dense: dense, multiline: false, numberOfLines: 1, style: {
                                    ...style,
                                    flexGrow: 1,
                                    alignSelf: 'stretch',
                                    margin: 0,
                                    marginTop: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 0,
                                }, contentStyle: contentStyle, editable: false }))), style: {
                        maxWidth: inputLayout?.width,
                        width: inputLayout?.width,
                        marginTop: inputLayout?.height,
                        ...dropDownStyle,
                    } },
                    react_1.default.createElement(react_native_1.ScrollView, { keyboardShouldPersistTaps: "handled", bounces: false, style: {
                            ...(dropDownContainerHeight
                                ? {
                                    height: dropDownContainerHeight,
                                }
                                : {
                                    maxHeight: dropDownContainerMaxHeight || 200,
                                }),
                        } }, list.map((_item, _index) => (react_1.default.createElement(react_1.Fragment, { key: _item.value },
                        react_1.default.createElement(react_native_paper_1.TouchableRipple, { style: {
                                flexDirection: "row",
                                alignItems: "center",
                            }, onPress: () => {
                                setActive(_item.value);
                                if (onDismiss) {
                                    onDismiss();
                                }
                            } },
                            react_1.default.createElement(react_1.Fragment, null,
                                react_1.default.createElement(react_native_paper_1.Menu.Item, { titleStyle: {
                                        color: isActive(_item.value)
                                            ? activeColor || (theme || activeTheme).colors.primary
                                            : (theme || activeTheme).colors.onSurface,
                                        ...(isActive(_item.value)
                                            ? dropDownItemSelectedTextStyle
                                            : dropDownItemTextStyle),
                                    }, title: _item.custom || _item.label, style: {
                                        flex: 1,
                                        maxWidth: inputLayout?.width,
                                        ...(isActive(_item.value)
                                            ? dropDownItemSelectedStyle
                                            : dropDownItemStyle),
                                    }, onPress: () => {
                                        setActive(_item.value);
                                        if (onDismiss) {
                                            onDismiss();
                                        }
                                    } }),
                                multiSelect && (react_1.default.createElement(react_native_paper_1.Checkbox.Android, { theme: {
                                        colors: { accent: activeTheme?.colors.primary },
                                    }, status: isActive(_item.value) ? "checked" : "unchecked", onPress: () => setActive(_item.value) })))),
                        react_1.default.createElement(react_native_paper_1.Divider, null)))))));
            });
            exports_1("default", DropDown);
        }
    };
});
