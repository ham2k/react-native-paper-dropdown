/// <reference types="react" />
declare module "DropDown" {
    import { TextStyle, ViewStyle } from "react-native";
    import React, { ReactNode } from "react";
    import { MD3Theme as Theme } from "react-native-paper/lib/typescript/types";
    export interface DropDownPropsInterface {
        multiSelect?: boolean;
        value: any;
        onChangeValue: (_value: any) => void;
        label?: string | undefined;
        placeholder?: string | undefined;
        mode?: "outlined" | "flat" | undefined;
        list: Array<{
            label: string;
            value: string | number;
            custom?: ReactNode;
        }>;
        dropDownContainerMaxHeight?: number;
        dropDownContainerHeight?: number;
        activeColor?: string;
        theme?: Theme;
        dropDownStyle?: ViewStyle;
        dropDownItemSelectedTextStyle?: TextStyle;
        dropDownItemSelectedStyle?: ViewStyle;
        dropDownItemStyle?: ViewStyle;
        dropDownItemTextStyle?: TextStyle;
        accessibilityLabel?: string;
        disabled?: boolean;
        onFocus?: (_value: any) => void;
        onBlur?: (_value: any) => void;
        style?: any;
        contentStyle?: any;
        editable?: boolean;
        borderless?: boolean;
        background?: object;
        centered?: boolean;
        rippleColor?: string;
        underlayColor?: string;
        touchableStyle?: any;
        error?: boolean;
        selectionColor?: string;
        underlineColor?: string;
        activeUnderlineColor?: string;
        outlineColor?: string;
        activeOutlineColor?: string;
        dense?: boolean;
        iconColor?: string;
        iconStyle?: any;
    }
    const DropDown: React.ForwardRefExoticComponent<DropDownPropsInterface & React.RefAttributes<any>>;
    export default DropDown;
}
