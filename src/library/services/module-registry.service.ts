import { $$txt } from '@framework/datatypes';
import { Module } from '../interfaces/module.interface';
import { InterfaceLoaderService } from './interface-loader.service';

export class ModuleRegistry {
    private static instance: ModuleRegistry;
    private modules: Map<$$txt, Module> = new Map();
    private loadingModules: Map<$$txt, Promise<Module>> = new Map();
    private interfaceLoader: InterfaceLoaderService;

    private constructor() {
        this.interfaceLoader = InterfaceLoaderService.getInstance();
    }

    public static getInstance(): ModuleRegistry {
        if (!ModuleRegistry.instance) {
            ModuleRegistry.instance = new ModuleRegistry();
        }
        return ModuleRegistry.instance;
    }

    // 모듈 등록
    public registerModule(module: Module): void {
        this.modules.set(module.feature.id, module);
    }

    // 모듈 로드
    public async loadModuleAsync(moduleId: $$txt): Promise<Module> {
        // 이미 로드된 모듈이면 반환
        if (this.modules.has(moduleId)) {
            return this.modules.get(moduleId)!;
        }

        // 현재 로딩 중인 모듈이면 해당 프로미스 반환
        if (this.loadingModules.has(moduleId)) {
            return this.loadingModules.get(moduleId)!;
        }

        // 새 모듈 로딩 시작
        const loadingPromise = this.loadModuleImpl(moduleId);
        this.loadingModules.set(moduleId, loadingPromise);

        try {
            const module = await loadingPromise;
            this.modules.set(moduleId, module);
            this.loadingModules.delete(moduleId);
            return module;
        } catch (error) {
            this.loadingModules.delete(moduleId);
            throw error;
        }
    }

    private async loadModuleImpl(moduleId: $$txt): Promise<Module> {
        try {
            // 동적 임포트 - 번들러가 별도 청크로 분리
            const moduleExports = await import(
                /* webpackChunkName: "feimport { $$txt } from '@framework/datatypes';
ature-[request]" */
                `../features/${moduleId}`
            );

            if (!moduleExports.default) {
                throw new Error(
                    `Module ${moduleId} does not export a default module`
                );
            }

            const module = moduleExports.default as Module;

            // 모듈 의존성 검사 및 로드
            if (module.feature.dependencies?.length) {
                await Promise.all(
                    module.feature.dependencies.map((depId) =>
                        this.loadModuleAsync(depId)
                    )
                );
            }

            // 인터페이스 정의 등록
            const interfaceDefinitions = module.getInterfaceDefinitions();
            this.interfaceLoader.registerInterfaceDefinitions(
                module.feature.id,
                interfaceDefinitions
            );

            // 인터페이스 구현 등록
            const implementations = module.getImplementations();
            Object.entries(implementations).forEach(([key, impl]) => {
                this.interfaceLoader.registerImplementation(
                    module.feature.id,
                    key,
                    impl
                );
            });

            // 모듈 초기화
            const initialized = await module.initialize();
            if (!initialized) {
                throw new Error(`Failed to initialize module: ${moduleId}`);
            }

            return module;
        } catch (error) {
            console.error(`Error loading module '${moduleId}':`, error);
            throw new Error(`Could not load module '${moduleId}'`);
        }
    }

    // 모듈 가져오기
    public getModule(moduleId: $$txt): Module | undefined {
        return this.modules.get(moduleId);
    }

    // 특정 인터페이스 구현체 가져오기
    public getImplementation<T>(
        moduleId: $$txt,
        interfaceName: $$txt
    ): T | null {
        return this.interfaceLoader.getImplementation<T>(
            moduleId,
            interfaceName
        );
    }
}
