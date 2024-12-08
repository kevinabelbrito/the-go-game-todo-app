type defaultStyleProperty = {[key: string]: string | number | boolean};

export interface ButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    style?: {
        pressableContainer: defaultStyleProperty;
        text: defaultStyleProperty;
    };
}

export interface IconButtonProps extends ButtonProps {
    icon: string;
    size: string;
    color: string;
}