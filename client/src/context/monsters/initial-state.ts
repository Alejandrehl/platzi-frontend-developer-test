export interface IInitialState {
  readonly monsters: [];
  readonly loading: boolean;
}

export const initialState: IInitialState = {
  monsters: [],
  loading: false,
};
