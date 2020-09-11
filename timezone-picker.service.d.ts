export interface Timezone {
    iso: string;
    zones: string[];
}
export declare class TimezonePickerService {
    /**
     * Convert country ISO code to country name (in english)
     */
    iso2country(iso: string): string;
    /**
     * Gets the list of ISO-codes for all countries
     */
    getCountries(): string[];
    /**
     * Get the timezones for each country
     */
    getZones(): Timezone[];
}
