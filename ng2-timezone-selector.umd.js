(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('moment-timezone'), require('jquery'), require('select2')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'moment-timezone', 'jquery', 'select2'], factory) :
	(factory((global['ng2-timezone-selector'] = {}),global.core,global.common,global.moment,global.$));
}(this, (function (exports,core,common,moment,$) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

var TimezonePickerService = (function () {
    function TimezonePickerService() {
    }
    /**
     * Convert country ISO code to country name (in english)
     */
    /**
     * Convert country ISO code to country name (in english)
     * @param {?} iso
     * @return {?}
     */
    TimezonePickerService.prototype.iso2country = /**
     * Convert country ISO code to country name (in english)
     * @param {?} iso
     * @return {?}
     */
    function (iso) {
        return countryList[iso] ? countryList[iso] : iso;
    };
    /**
     * Gets the list of ISO-codes for all countries
     */
    /**
     * Gets the list of ISO-codes for all countries
     * @return {?}
     */
    TimezonePickerService.prototype.getCountries = /**
     * Gets the list of ISO-codes for all countries
     * @return {?}
     */
    function () {
        var /** @type {?} */ res = [];
        for (var _i = 0, _a = Object.keys(countryList); _i < _a.length; _i++) {
            var prop = _a[_i];
            res.push(prop);
        }
        return res;
    };
    /**
     * Get the timezones for each country
     */
    /**
     * Get the timezones for each country
     * @return {?}
     */
    TimezonePickerService.prototype.getZones = /**
     * Get the timezones for each country
     * @return {?}
     */
    function () {
        var /** @type {?} */ res = [];
        for (var _i = 0, _a = Object.keys(zones); _i < _a.length; _i++) {
            var prop = _a[_i];
            res.push({
                iso: prop,
                zones: zones[prop]
            });
        }
        return res;
    };
    TimezonePickerService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    TimezonePickerService.ctorParameters = function () { return []; };
    return TimezonePickerService;
}());
var zones = {
    AD: ['Europe/Andorra'],
    AE: ['Asia/Dubai'],
    AF: ['Asia/Kabul'],
    AG: ['America/Antigua'],
    AI: ['America/Anguilla'],
    AL: ['Europe/Tirane'],
    AM: ['Asia/Yerevan'],
    AO: ['Africa/Luanda'],
    AQ: [
        'Antarctica/McMurdo',
        'Antarctica/Rothera',
        'Antarctica/Palmer',
        'Antarctica/Mawson',
        'Antarctica/Davis',
        'Antarctica/Casey',
        'Antarctica/Vostok',
        'Antarctica/DumontDUrville',
        'Antarctica/Syowa',
        'Antarctica/Troll'
    ],
    AR: [
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Cordoba',
        'America/Argentina/Salta',
        'America/Argentina/Jujuy',
        'America/Argentina/Tucuman',
        'America/Argentina/Catamarca',
        'America/Argentina/La_Rioja',
        'America/Argentina/San_Juan',
        'America/Argentina/Mendoza',
        'America/Argentina/San_Luis',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Ushuaia'
    ],
    AS: ['Pacific/Pago_Pago', 'Pacific/Samoa'],
    AT: ['Europe/Vienna'],
    AU: [
        'Australia/Lord_Howe',
        'Antarctica/Macquarie',
        'Australia/Hobart',
        'Australia/Currie',
        'Australia/Melbourne',
        'Australia/Sydney',
        'Australia/Broken_Hill',
        'Australia/Brisbane',
        'Australia/Lindeman',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Perth',
        'Australia/Eucla',
        'Australia/Canberra',
        'Australia/Queensland',
        'Australia/Tasmania',
        'Australia/Victoria'
    ],
    AW: ['America/Aruba'],
    AX: ['Europe/Mariehamn'],
    AZ: ['Asia/Baku'],
    BA: ['Europe/Sarajevo'],
    BB: ['America/Barbados'],
    BD: ['Asia/Dhaka'],
    BE: ['Europe/Brussels'],
    BF: ['Africa/Ouagadougou'],
    BG: ['Europe/Sofia'],
    BH: ['Asia/Bahrain'],
    BI: ['Africa/Bujumbura'],
    BJ: ['Africa/Porto-Novo'],
    BL: ['America/St_Barthelemy'],
    BM: ['Atlantic/Bermuda'],
    BN: ['Asia/Brunei'],
    BO: ['America/La_Paz'],
    BQ: ['America/Kralendijk'],
    BR: [
        'America/Noronha',
        'America/Belem',
        'America/Fortaleza',
        'America/Recife',
        'America/Araguaina',
        'America/Maceio',
        'America/Bahia',
        'America/Sao_Paulo',
        'America/Campo_Grande',
        'America/Cuiaba',
        'America/Santarem',
        'America/Porto_Velho',
        'America/Boa_Vista',
        'America/Manaus',
        'America/Eirunepe',
        'America/Rio_Branco'
    ],
    BS: ['America/Nassau'],
    BT: ['Asia/Thimphu'],
    BW: ['Africa/Gaborone'],
    BY: ['Europe/Minsk'],
    BZ: ['America/Belize'],
    CA: [
        'America/St_Johns',
        'America/Halifax',
        'America/Glace_Bay',
        'America/Moncton',
        'America/Goose_Bay',
        'America/Blanc-Sablon',
        'America/Toronto',
        'America/Nipigon',
        'America/Thunder_Bay',
        'America/Iqaluit',
        'America/Pangnirtung',
        'America/Resolute',
        'America/Atikokan',
        'America/Rankin_Inlet',
        'America/Winnipeg',
        'America/Rainy_River',
        'America/Regina',
        'America/Swift_Current',
        'America/Edmonton',
        'America/Cambridge_Bay',
        'America/Yellowknife',
        'America/Inuvik',
        'America/Creston',
        'America/Dawson_Creek',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Dawson',
        'America/Montreal',
        'Canada/Atlantic',
        'Canada/Central',
        'Canada/Eastern',
        'Canada/Mountain',
        'Canada/Newfoundland',
        'Canada/Pacific',
        'Canada/Saskatchewan',
        'Canada/Yukon'
    ],
    CC: ['Indian/Cocos'],
    CD: ['Africa/Kinshasa', 'Africa/Lubumbashi'],
    CF: ['Africa/Bangui'],
    CG: ['Africa/Brazzaville'],
    CH: ['Europe/Zurich'],
    CI: ['Africa/Abidjan'],
    CK: ['Pacific/Rarotonga'],
    CL: [
        'America/Santiago',
        'Pacific/Easter',
        'Chile/Continental',
        'Chile/EasterIsland'
    ],
    CM: ['Africa/Douala'],
    CN: [
        'Asia/Shanghai',
        'Asia/Harbin',
        'Asia/Chongqing',
        'Asia/Urumqi',
        'Asia/Kashgar'
    ],
    CO: ['America/Bogota'],
    CR: ['America/Costa_Rica'],
    CU: ['America/Havana'],
    CV: ['Atlantic/Cape_Verde'],
    CW: ['America/Curacao'],
    CX: ['Indian/Christmas'],
    CY: ['Asia/Nicosia'],
    CZ: ['Europe/Prague'],
    DE: ['Europe/Berlin'],
    DJ: ['Africa/Djibouti'],
    DK: ['Europe/Copenhagen'],
    DM: ['America/Dominica'],
    DO: ['America/Santo_Domingo'],
    DZ: ['Africa/Algiers'],
    EC: ['America/Guayaquil', 'Pacific/Galapagos'],
    EE: ['Europe/Tallinn'],
    EG: ['Egypt'],
    EH: ['Africa/El_Aaiun'],
    ER: ['Africa/Asmara'],
    ES: ['Europe/Madrid', 'Africa/Ceuta', 'Atlantic/Canary'],
    ET: ['Africa/Addis_Ababa'],
    FI: ['Europe/Helsinki'],
    FJ: ['Pacific/Fiji'],
    FK: ['Atlantic/Stanley'],
    FM: ['Pacific/Chuuk', 'Pacific/Pohnpei', 'Pacific/Kosrae'],
    FO: ['Atlantic/Faroe'],
    FR: ['Europe/Paris'],
    GA: ['Africa/Libreville'],
    GB: ['Europe/London'],
    GD: ['America/Grenada'],
    GE: ['Asia/Tbilisi'],
    GF: ['America/Cayenne'],
    GG: ['Europe/Guernsey'],
    GH: ['Africa/Accra'],
    GI: ['Europe/Gibraltar'],
    GL: [
        'America/Godthab',
        'America/Danmarkshavn',
        'America/Scoresbysund',
        'America/Thule'
    ],
    GM: ['Africa/Banjul'],
    GN: ['Africa/Conakry'],
    GP: ['America/Guadeloupe'],
    GQ: ['Africa/Malabo'],
    GR: ['Europe/Athens'],
    GS: ['Atlantic/South_Georgia'],
    GT: ['America/Guatemala'],
    GU: ['Pacific/Guam'],
    GW: ['Africa/Bissau'],
    GY: ['America/Guyana'],
    HK: ['Asia/Hong_Kong'],
    HN: ['America/Tegucigalpa'],
    HR: ['Europe/Zagreb'],
    HT: ['America/Port-au-Prince'],
    HU: ['Europe/Budapest'],
    ID: ['Asia/Jakarta', 'Asia/Pontianak', 'Asia/Makassar', 'Asia/Jayapura'],
    IE: ['Europe/Dublin'],
    IL: ['Asia/Jerusalem'],
    IM: ['Europe/Isle_of_Man'],
    IN: ['Asia/Kolkata'],
    IO: ['Indian/Chagos'],
    IQ: ['Asia/Baghdad'],
    IR: ['Asia/Tehran'],
    IS: ['Atlantic/Reykjavik'],
    IT: ['Europe/Rome'],
    JE: ['Europe/Jersey'],
    JM: ['America/Jamaica'],
    JO: ['Asia/Amman'],
    JP: ['Asia/Tokyo'],
    KE: ['Africa/Nairobi'],
    KG: ['Asia/Bishkek'],
    KH: ['Asia/Phnom_Penh'],
    KI: ['Pacific/Tarawa', 'Pacific/Enderbury', 'Pacific/Kiritimati'],
    KM: ['Indian/Comoro'],
    KN: ['America/St_Kitts'],
    KP: ['Asia/Pyongyang'],
    KR: ['Asia/Seoul'],
    KW: ['Asia/Kuwait'],
    KY: ['America/Cayman'],
    KZ: [
        'Asia/Almaty',
        'Asia/Qyzylorda',
        'Asia/Aqtobe',
        'Asia/Aqtau',
        'Asia/Oral'
    ],
    LA: ['Asia/Vientiane'],
    LB: ['Asia/Beirut'],
    LC: ['America/St_Lucia'],
    LI: ['Europe/Vaduz'],
    LK: ['Asia/Colombo'],
    LR: ['Africa/Monrovia'],
    LS: ['Africa/Maseru'],
    LT: ['Europe/Vilnius'],
    LU: ['Europe/Luxembourg'],
    LV: ['Europe/Riga'],
    LY: ['Africa/Tripoli'],
    MA: ['Africa/Casablanca'],
    MC: ['Europe/Monaco'],
    MD: ['Europe/Chisinau'],
    ME: ['Europe/Podgorica'],
    MF: ['America/Marigot'],
    MG: ['Indian/Antananarivo'],
    MH: ['Pacific/Majuro', 'Pacific/Kwajalein'],
    MK: ['Europe/Skopje'],
    ML: ['Africa/Bamako'],
    MM: ['Asia/Rangoon'],
    MN: ['Asia/Ulaanbaatar', 'Asia/Hovd', 'Asia/Choibalsan'],
    MO: ['Asia/Macau'],
    MP: ['Pacific/Saipan'],
    MQ: ['America/Martinique'],
    MR: ['Africa/Nouakchott'],
    MS: ['America/Montserrat'],
    MT: ['Europe/Malta'],
    MU: ['Indian/Mauritius'],
    MV: ['Indian/Maldives'],
    MW: ['Africa/Blantyre'],
    MX: [
        'America/Mexico_City',
        'America/Cancun',
        'America/Merida',
        'America/Monterrey',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Chihuahua',
        'America/Ojinaga',
        'America/Hermosillo',
        'America/Tijuana',
        'America/Santa_Isabel',
        'America/Bahia_Banderas'
    ],
    MY: ['Asia/Kuala_Lumpur', 'Asia/Kuching'],
    MZ: ['Africa/Maputo'],
    NA: ['Africa/Windhoek'],
    NC: ['Pacific/Noumea'],
    NE: ['Africa/Niamey'],
    NF: ['Pacific/Norfolk'],
    NG: ['Africa/Lagos'],
    NI: ['America/Managua'],
    NL: ['Europe/Amsterdam'],
    NO: ['Europe/Oslo'],
    NP: ['Asia/Kathmandu'],
    NR: ['Pacific/Nauru'],
    NU: ['Pacific/Niue'],
    NZ: ['Pacific/Auckland', 'Pacific/Chatham'],
    OM: ['Asia/Muscat'],
    PA: ['America/Panama'],
    PE: ['America/Lima'],
    PF: ['Pacific/Tahiti', 'Pacific/Marquesas', 'Pacific/Gambier'],
    PG: ['Pacific/Port_Moresby'],
    PH: ['Asia/Manila'],
    PK: ['Asia/Karachi'],
    PL: ['Europe/Warsaw', 'Poland'],
    PM: ['America/Miquelon'],
    PN: ['Pacific/Pitcairn'],
    PR: ['America/Puerto_Rico'],
    PS: ['Asia/Gaza', 'Asia/Hebron'],
    PT: ['Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores'],
    PW: ['Pacific/Palau'],
    PY: ['America/Asuncion'],
    QA: ['Asia/Qatar'],
    RE: ['Indian/Reunion'],
    RO: ['Europe/Bucharest'],
    RS: ['Europe/Belgrade'],
    RU: [
        'Europe/Kaliningrad',
        'Europe/Moscow',
        'Europe/Volgograd',
        'Europe/Samara',
        'Europe/Simferopol',
        'Asia/Yekaterinburg',
        'Asia/Omsk',
        'Asia/Novosibirsk',
        'Asia/Novokuznetsk',
        'Asia/Krasnoyarsk',
        'Asia/Irkutsk',
        'Asia/Yakutsk',
        'Asia/Khandyga',
        'Asia/Vladivostok',
        'Asia/Sakhalin',
        'Asia/Ust-Nera',
        'Asia/Magadan',
        'Asia/Kamchatka',
        'Asia/Anadyr'
    ],
    RW: ['Africa/Kigali'],
    SA: ['Asia/Riyadh'],
    SB: ['Pacific/Guadalcanal'],
    SC: ['Indian/Mahe'],
    SD: ['Africa/Khartoum'],
    SE: ['Europe/Stockholm'],
    SG: ['Asia/Singapore'],
    SH: ['Atlantic/St_Helena'],
    SI: ['Europe/Ljubljana'],
    SJ: ['Arctic/Longyearbyen'],
    SK: ['Europe/Bratislava'],
    SL: ['Africa/Freetown'],
    SM: ['Europe/San_Marino'],
    SN: ['Africa/Dakar'],
    SO: ['Africa/Mogadishu'],
    SR: ['America/Paramaribo'],
    SS: ['Africa/Juba'],
    ST: ['Africa/Sao_Tome'],
    SV: ['America/El_Salvador'],
    SX: ['America/Lower_Princes'],
    SY: ['Asia/Damascus'],
    SZ: ['Africa/Mbabane'],
    TC: ['America/Grand_Turk'],
    TD: ['Africa/Ndjamena'],
    TF: ['Indian/Kerguelen'],
    TG: ['Africa/Lome'],
    TH: ['Asia/Bangkok'],
    TJ: ['Asia/Dushanbe'],
    TK: ['Pacific/Fakaofo'],
    TL: ['Asia/Dili'],
    TM: ['Asia/Ashgabat'],
    TN: ['Africa/Tunis'],
    TO: ['Pacific/Tongatapu'],
    TR: ['Europe/Istanbul'],
    TT: ['America/Port_of_Spain'],
    TV: ['Pacific/Funafuti'],
    TW: ['Asia/Taipei'],
    TZ: ['Africa/Dar_es_Salaam'],
    UA: ['Europe/Kiev', 'Europe/Uzhgorod', 'Europe/Zaporozhye'],
    UG: ['Africa/Kampala'],
    UM: ['Pacific/Johnston', 'Pacific/Midway', 'Pacific/Wake'],
    US: [
        'America/New_York',
        'America/Detroit',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Indiana/Indianapolis',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Vevay',
        'America/Chicago',
        'America/Indiana/Tell_City',
        'America/Indiana/Knox',
        'America/Menominee',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/North_Dakota/Beulah',
        'America/Denver',
        'America/Boise',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Juneau',
        'America/Sitka',
        'America/Yakutat',
        'America/Nome',
        'America/Adak',
        'America/Metlakatla',
        'Pacific/Honolulu'
    ],
    UY: ['America/Montevideo'],
    UZ: ['Asia/Samarkand', 'Asia/Tashkent'],
    VA: ['Europe/Vatican'],
    VC: ['America/St_Vincent'],
    VE: ['America/Caracas'],
    VG: ['America/Tortola'],
    VI: ['America/St_Thomas'],
    VN: ['Asia/Ho_Chi_Minh'],
    VU: ['Pacific/Efate'],
    WF: ['Pacific/Wallis'],
    WS: ['Pacific/Apia'],
    YE: ['Asia/Aden'],
    YT: ['Indian/Mayotte'],
    ZA: ['Africa/Johannesburg'],
    ZM: ['Africa/Lusaka'],
    ZW: ['Africa/Harare']
};
var countryList = {
    AF: 'Afghanistan',
    AX: 'Aland Islands',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    VG: 'British Virgin Islands',
    IO: 'British Indian Ocean Territory',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    KY: 'Cayman Islands',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    HK: 'Hong Kong',
    MO: 'Macao',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo (Brazzaville)',
    CD: 'Congo, (Kinshasa)',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    CI: "Côte d'Ivoire",
    HR: 'Croatia',
    CU: 'Cuba',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (Malvinas)',
    FO: 'Faroe Islands',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard and Mcdonald Islands',
    VA: 'Vatican City State',
    HN: 'Honduras',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KP: 'Korea (North)',
    KR: 'Korea (South)',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Lao PDR',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MK: 'Macedonia',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    AN: 'Netherlands Antilles',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestinian Territory',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RE: 'Réunion',
    RO: 'Romania',
    RU: 'Russian Federation',
    RW: 'Rwanda',
    BL: 'Saint-Barthélemy',
    SH: 'Saint Helena',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint-Martin (French part)',
    PM: 'Saint Pierre and Miquelon',
    VC: 'Saint Vincent and Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome and Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia and the South Sandwich Islands',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SJ: 'Svalbard and Jan Mayen Islands',
    SZ: 'Swaziland',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syria',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'United Kingdom (GB)',
    US: 'United States of America (USA)',
    UM: 'US Minor Outlying Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela',
    VN: 'Viet Nam',
    VI: 'Virgin Islands, US',
    WF: 'Wallis and Futuna Islands',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimezonePickerComponent = (function () {
    /**
     * Contructor function to define all the timezones
     */
    function TimezonePickerComponent(service) {
        this.service = service;
        /**
         * Input (optional) bound to [allowClear]
         */
        this.allowClear = false;
        this.showOffset = false;
        this.guess = false;
        /**
         * Input (optional) bound to [disabled]
         */
        this.disabled = false;
        this.placeholderString = 'Select timezone';
        /**
         * Output event bound to (timezone)
         */
        this.timezoneChange = new core.EventEmitter();
        /**
         * Output event bound to (change)
         */
        this.change = new core.EventEmitter();
        this.countryChange = new core.EventEmitter();
        this.allTimezones = service.getZones();
    }
    Object.defineProperty(TimezonePickerComponent.prototype, "placeholder", {
        set: /**
         * Input (optional) bound to [placeholder]
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            if (placeholder) {
                this.placeholderString = placeholder;
                var /** @type {?} */ placeholderElem = $(this.select.nativeElement.parentElement).find('.select2-selection__placeholder');
                if (placeholderElem.length > 0) {
                    placeholderElem[0].innerText = placeholder;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezonePickerComponent.prototype, "timezone", {
        set: /**
         * Input: string (required) bound to [timezone]
         * @param {?} timezone
         * @return {?}
         */
        function (timezone) {
            if (timezone) {
                this.currentTimezone = timezone;
                this.triggerChangeEvent();
            }
            else if (this.guess) {
                this.currentTimezone = moment.tz.guess();
                this.triggerChangeEvent();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimezonePickerComponent.prototype, "country", {
        set: /**
         * @param {?} isoCode
         * @return {?}
         */
        function (isoCode) {
            if (isoCode && !this.currentTimezone && !this.guess) {
                var /** @type {?} */ res = this.allTimezones.find(function (x) { return x.iso === isoCode; });
                if (res) {
                    this.currentTimezone = res.zones[0];
                    this.triggerChangeEvent();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * $ bounding of select2 framework in the selectElement
     */
    /**
     * $ bounding of select2 framework in the selectElement
     * @return {?}
     */
    TimezonePickerComponent.prototype.ngAfterViewInit = /**
     * $ bounding of select2 framework in the selectElement
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ selectElement = $(this.select.nativeElement);
        selectElement.select2({
            placeholder: this.placeholderString,
            allowClear: this.allowClear,
            matcher: function (term, text) { return _this.matcher(term, text); }
        });
        if (this.currentTimezone) {
            $(selectElement)
                .val(this.currentTimezone)
                .trigger('change');
        }
        selectElement.on('change', function (e) {
            _this.onChange($(e.target).val());
        });
    };
    /**
     * @return {?}
     */
    TimezonePickerComponent.prototype.triggerChangeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        $(this.select.nativeElement)
            .val(this.currentTimezone)
            .trigger('change');
        this.timezoneChange.emit(this.currentTimezone);
        this.change.emit(this.currentTimezone);
        this.countryChange.emit(this.allTimezones.find(function (x) { return x.zones.indexOf(_this.currentTimezone) >= 0; })
            .iso);
    };
    /**
     * @param {?} zone
     * @return {?}
     */
    TimezonePickerComponent.prototype.formatTimezoneString = /**
     * @param {?} zone
     * @return {?}
     */
    function (zone) {
        var /** @type {?} */ arr = zone.split('/');
        return arr[arr.length - 1].replace('_', ' ');
    };
    /**
     * @param {?} zone
     * @return {?}
     */
    TimezonePickerComponent.prototype.offsetOfTimezone = /**
     * @param {?} zone
     * @return {?}
     */
    function (zone) {
        var /** @type {?} */ offset = moment.tz(zone).utcOffset();
        var /** @type {?} */ neg = offset < 0;
        if (neg) {
            offset = -1 * offset;
        }
        var /** @type {?} */ hours = Math.floor(offset / 60);
        var /** @type {?} */ minutes = (offset / 60 - hours) * 60;
        return "(GMT" + (neg ? '-' : '+') + this.rjust(hours.toString(), 2) + ":" + this.rjust(minutes.toString(), 2) + ")";
    };
    /**
     * onChange function called by the "select" element
     * @param {?} timezone The timezone string selected
     * @return {?}
     */
    TimezonePickerComponent.prototype.onChange = /**
     * onChange function called by the "select" element
     * @param {?} timezone The timezone string selected
     * @return {?}
     */
    function (timezone) {
        this.currentTimezone = timezone;
        this.timezoneChange.emit(timezone);
        this.change.emit(timezone);
    };
    /**
     * Matcher function to search in the select options
     * @param {?} params contains the search term
     * @param {?} data contains the data of each row
     * @return {?}
     */
    TimezonePickerComponent.prototype.matcher = /**
     * Matcher function to search in the select options
     * @param {?} params contains the search term
     * @param {?} data contains the data of each row
     * @return {?}
     */
    function (params, data) {
        // Always return the object if there is nothing to compare
        if ($.trim(params.term) === '') {
            return data;
        }
        var /** @type {?} */ original = data.text.toUpperCase();
        var /** @type {?} */ term = params.term.toUpperCase();
        // Replace '_' with ' ' to be able to search for 'New York'
        if (original.indexOf('_') !== -1) {
            original += original.replace('_', ' ');
        }
        // Check if the text contains the term
        if (original.indexOf(term) > -1) {
            return data;
        }
        // Do a recursive check for options with children
        if (data.children && data.children.length > 0) {
            // Clone the data object if there are children
            // This is required as we modify the object to remove any non-matches
            var /** @type {?} */ match = $.extend(true, {}, data);
            // Check each child of the option
            for (var /** @type {?} */ c = data.children.length - 1; c >= 0; c--) {
                var /** @type {?} */ child = data.children[c];
                var /** @type {?} */ matches = this.matcher(params, child);
                // If there wasn't a match, remove the object in the array
                if (matches == null) {
                    match.children.splice(c, 1);
                }
            }
            // If any children matched, return the new object
            if (match.children.length > 0) {
                return match;
            }
            // If there were no matching children, check just the plain object
            return this.matcher(params, match);
        }
        // If it doesn't contain the term, don't return anything
        return null;
    };
    /**
     * @param {?} string
     * @param {?} width
     * @param {?=} padding
     * @return {?}
     */
    TimezonePickerComponent.prototype.rjust = /**
     * @param {?} string
     * @param {?} width
     * @param {?=} padding
     * @return {?}
     */
    function (string, width, padding) {
        if (padding === void 0) { padding = '0'; }
        padding = padding || ' ';
        padding = padding.substr(0, 1);
        if (string.length < width) {
            return padding.repeat(width - string.length) + string;
        }
        else {
            return string;
        }
    };
    TimezonePickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-timezone-picker',
                    template: "\n  <select #select id=\"select\" style=\"width: 100%\" class=\"form-control\" [disabled]=\"disabled\">\n    <option></option>\n    <ng-template let-c ngFor [ngForOf]=\"allTimezones\">\n      <optgroup *ngIf=\"c.zones.length > 1\" [label]=\"c.iso | iso2CountryPipe\">\n        <option *ngFor=\"let t of c.zones\" [value]=\"t\">{{c.iso | iso2CountryPipe}} - {{formatTimezoneString(t)}}\n            <span *ngIf=\"showOffset\">{{offsetOfTimezone(t)}}</span>\n        </option>\n      </optgroup>\n        <option *ngIf=\"c.zones.length === 1\" [value]=\"c.zones[0]\">{{c.iso | iso2CountryPipe}}\n          <span *ngIf=\"showOffset\">{{offsetOfTimezone(c.zones[0])}}</span>\n      </option>\n    </ng-template>\n  </select>"
                },] },
    ];
    /** @nocollapse */
    TimezonePickerComponent.ctorParameters = function () { return [
        { type: TimezonePickerService, },
    ]; };
    TimezonePickerComponent.propDecorators = {
        "select": [{ type: core.ViewChild, args: ['select',] },],
        "allowClear": [{ type: core.Input },],
        "showOffset": [{ type: core.Input },],
        "guess": [{ type: core.Input },],
        "disabled": [{ type: core.Input },],
        "placeholder": [{ type: core.Input },],
        "timezone": [{ type: core.Input },],
        "country": [{ type: core.Input },],
        "timezoneChange": [{ type: core.Output },],
        "change": [{ type: core.Output },],
        "countryChange": [{ type: core.Output },],
    };
    return TimezonePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Transforms any input value
 */
var TimezonePickerPipe = (function () {
    function TimezonePickerPipe(service) {
        this.service = service;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimezonePickerPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.service.iso2country(value);
        // return countryList[value] ? countryList[value] : value;
    };
    TimezonePickerPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'iso2CountryPipe'
                },] },
        { type: core.Injectable },
    ];
    /** @nocollapse */
    TimezonePickerPipe.ctorParameters = function () { return [
        { type: TimezonePickerService, },
    ]; };
    return TimezonePickerPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimezonePickerModule = (function () {
    function TimezonePickerModule() {
    }
    /**
     * @return {?}
     */
    TimezonePickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TimezonePickerModule,
            providers: [TimezonePickerService]
        };
    };
    TimezonePickerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [TimezonePickerComponent, TimezonePickerPipe],
                    providers: [TimezonePickerService],
                    exports: [TimezonePickerComponent, TimezonePickerPipe]
                },] },
    ];
    /** @nocollapse */
    TimezonePickerModule.ctorParameters = function () { return []; };
    return TimezonePickerModule;
}());

exports.TimezonePickerModule = TimezonePickerModule;
exports.TimezonePickerComponent = TimezonePickerComponent;
exports.TimezonePickerPipe = TimezonePickerPipe;
exports.TimezonePickerService = TimezonePickerService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
