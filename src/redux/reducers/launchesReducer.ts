import { PROCESSING, LAUNCH, LAUNCHESFAIL } from '../actions/types';

const initialstate = {
  launches: [],
  processing: false,
  error: ''
}

export default function(state = initialstate, { type, payload } :{ type: string, payload:any}) {
  switch (type) {
    case PROCESSING:
      return { ...state, processing: payload };
    case LAUNCH:
      return { ...state, launches: payload };
    case LAUNCHESFAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
}