import { IIdentifier } from '../executor';

export interface IUserActionIdentifier extends IIdentifier {}

export function UserActionIdentifier(identifier: IUserActionIdentifier) {}
