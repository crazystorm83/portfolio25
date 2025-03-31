import { $$txt } from '@framework/datatypes';

export class InterfaceLoaderService {
    private static instance: InterfaceLoaderService;
    private interfaceDefinitions: Map<$$txt, any> = new Map();
    private implementations: Map<$$txt, Map<$$txt, any>> = new Map();

    private constructor() {}

    public static getInstance(): InterfaceLoaderService {
        if (!InterfaceLoaderService.instance) {
            InterfaceLoaderService.instance = new InterfaceLoaderService();
        }
        return InterfaceLoaderService.instance;
    }

    public registerInterfaceDefinitions(
        moduleId: $$txt,
        definitions: any
    ): void {
        this.interfaceDefinitions.set(moduleId, definitions);
    }

    public registerImplementation(
        moduleId: $$txt,
        interfaceName: $$txt,
        implementation: any
    ): void {
        if (!this.implementations.has(moduleId)) {
            this.implementations.set(moduleId, new Map());
        }
        this.implementations.get(moduleId)!.set(interfaceName, implementation);
    }

    public getImplementation<T>(
        moduleId: $$txt,
        interfaceName: $$txt
    ): T | null {
        return this.implementations.get(moduleId)?.get(interfaceName) || null;
    }
}
