import { AbsModuleConfiguration } from '@framework/abstracts';
import { IModuleEditorConfiguration } from '../interfaces';
import { IModule, IModuleRegister } from '@framework/interfaces';
import { $$txt } from '@framework/datatypes';

export class ModuleEditorConfiguration
    extends AbsModuleConfiguration
    implements IModuleEditorConfiguration, IModuleRegister
{
    private readonly _modules: Map<$$txt, IModule> = new Map();
    constructor() {
        super();
    }

    //#region IModuleRegister

    has(id: $$txt): boolean {
        return this._modules.has(id);
    }

    register(item: IModule): boolean {
        this._modules.set(item.id, item);

        return this.has(item.id);
    }

    unregister(item: IModule): boolean {
        return this._modules.delete(item.id);
    }
    
    registerOnce(item: IModule): boolean {
        if (this._modules.has(item.id)) {
            return false;
        }

        return this.register(item);
    }

    //#endregion
}
