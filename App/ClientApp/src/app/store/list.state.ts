import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddListItem, DeleteListItem } from './list.actions';

export interface ListStateModel {
    list: string[];
    lastAdded: string;
}

@State<ListStateModel>({
    name: 'ListState',
    defaults: {
        list: [],
        lastAdded: ''
    }
})
export class ListState {
    // select
    @Selector() static SelectAllItems(state: ListStateModel): string[] {
        console.log('select: ', state.list);
        return state.list;
    }

    // action
    @Action(AddListItem)
    addListItem(
        { getState, setState }: StateContext<ListStateModel>,
        { payload }: AddListItem
    ) {
        const state = getState();
        setState({
            list: [...state.list, payload],
            lastAdded: payload
        });
    }

    @Action(DeleteListItem)
    DeleteListItem(
        { getState, setState }: StateContext<ListStateModel>,
        { payload }: DeleteListItem
        ) {
            const state = getState();
            //console.log('delete: ', state.list);
            const newList = this.arrayRemove(state.list, payload)
            setState({
                ...state,
                list: newList

            });
        }

    private arrayRemove(arr: any, value: string){
        return arr.filter((ele: string) => {
            return ele !== value;
        })
    }
}