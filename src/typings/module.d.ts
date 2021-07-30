import {SelectEffect, Tail} from '@redux-saga/core/types/effects';
import {IRootState} from 'store/rootReducer';

declare module 'react-redux' {
    export function useSelector<TState = IRootState, TSelected = unknown>(
        selector: (state: TState) => TSelected,
        equalityFn?: (left: TSelected, right: TSelected) => boolean
    ): TSelected;
    export interface DefaultRootState extends IRootState{}
}


declare module 'redux-saga/effects' {
    export function select<Fn extends (state: IRootState, ...args: any[]) => any>(
        selector: Fn,
        ...args: Tail<Parameters<Fn>>
    ): SelectEffect
}


// declare module 'styled-components' {
//     export interface DefaultTheme {}
// }

