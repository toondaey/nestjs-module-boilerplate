import { Type } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';

// Will most likely be an interface
export type ExampleModuleOptions = {};

export interface ExampleOptionsFactory {
    createExampleOptions(): ExampleModuleOptions;
}

export interface ExampleModuleAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    useClass?: Type<ExampleOptionsFactory>;
    useExisting?: Type<ExampleOptionsFactory>;
    useFactory?: (...args: any[]) => ExampleModuleOptions;
    inject?: any[];
}
