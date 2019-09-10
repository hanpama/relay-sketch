import { Network, Environment, Store, RecordSource, PayloadError, PayloadData } from 'relay-runtime'


const source = new RecordSource();
const store = new Store(source);

export function mockEnvironment<T  extends PayloadData,>(data: T, errors: ReadonlyArray<PayloadError> = []) {
  return new Environment({ store, network: Network.create((req, vars) => {
    return { data, errors };
  }) })
}

export const relayProp = {
  environment: mockEnvironment({}),
  refetch: undefined,
  hasMore: undefined,
};

export function fragmentValue<T>(obj: T){
  return obj as T & {" $refType": any };
}