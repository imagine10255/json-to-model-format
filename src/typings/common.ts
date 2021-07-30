import {ReactNode} from 'react';
import CSS from 'csstype';

export interface FCProps {
    style?: CSS.Properties,
    className?: string,
}

export interface FCChildrenProps extends FCProps{
    children?: ReactNode,
}
