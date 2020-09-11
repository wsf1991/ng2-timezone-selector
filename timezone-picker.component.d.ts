import { TimezonePickerService, Timezone } from './timezone-picker.service';
import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import 'select2';
export declare class TimezonePickerComponent implements AfterViewInit {
    service: TimezonePickerService;
    /**
     * all time zones combined in one array, for each country
     */
    allTimezones: Timezone[];
    /**
     * ElementRef for the select element
     */
    select: ElementRef;
    /**
     * Input (optional) bound to [allowClear]
     */
    allowClear: boolean;
    showOffset: boolean;
    guess: boolean;
    /**
     * Input (optional) bound to [disabled]
     */
    disabled: boolean;
    placeholderString: string;
    /**
     * Input (optional) bound to [placeholder]
     */
    placeholder: string;
    /**
     * The current selected timezone.
     */
    currentTimezone: string;
    /**
     * Input: string (required) bound to [timezone]
     */
    timezone: string;
    country: string;
    /**
     * Output event bound to (timezone)
     */
    timezoneChange: EventEmitter<string>;
    /**
     * Output event bound to (change)
     */
    change: EventEmitter<string>;
    countryChange: EventEmitter<string>;
    /**
     * Contructor function to define all the timezones
     */
    constructor(service: TimezonePickerService);
    /**
     * $ bounding of select2 framework in the selectElement
     */
    ngAfterViewInit(): void;
    private triggerChangeEvent();
    formatTimezoneString(zone: string): string;
    offsetOfTimezone(zone: string): string;
    /**
     * onChange function called by the "select" element
     * @param timezone The timezone string selected
     */
    private onChange(timezone);
    /**
     * Matcher function to search in the select options
     * @param params contains the search term
     * @param data contains the data of each row
     */
    private matcher(params, data);
    private rjust(string, width, padding?);
}
