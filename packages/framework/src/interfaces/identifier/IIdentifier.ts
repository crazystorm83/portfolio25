import { $$txt } from '../../datatypes';

export interface IIdentifier {
    get id(): $$txt;
}


export interface IIdentifierSymbol {
    id: Symbol;
}

export interface ServiceIdentifierSymbol extends IIdentifierSymbol {
}

export const ServiceIdentifierSymbol: ServiceIdentifierSymbol = {
    id: Symbol('ServiceIdentifier'),
}