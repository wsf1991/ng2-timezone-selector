import { PipeTransform } from '@angular/core';
import { TimezonePickerService } from './timezone-picker.service';
/**
 * Transforms any input value
 */
export declare class TimezonePickerPipe implements PipeTransform {
    private service;
    constructor(service: TimezonePickerService);
    transform(value: string): string;
}
