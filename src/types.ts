export interface Article {
    id: string,
    title: string,
    paragraphs: string[]
}

type Nullable<T> = T | null;

export interface AddressMetro {
    name: string;
    line: string;
    distance: number;
  }

export interface AddressSuggestion {
    value: string;
    unrestricted_value: string;
    data: Address;
}

export interface Address {
    area: Nullable<string>;
    area_fias_id: Nullable<string>;
    area_kladr_id: Nullable<string>;
    area_type: Nullable<string>;
    area_type_full: Nullable<string>;
    area_with_type: Nullable<string>;
    beltway_distance: null;
    beltway_hit: null;
    block: Nullable<string>;
    block_type: Nullable<string>;
    block_type_full: Nullable<string>;
    federal_district: Nullable<string>;
    capital_marker: '0' | '1' | '2' | '3' | '4';
    city: Nullable<string>;
    city_area: Nullable<string>;
    city_district: Nullable<string>;
    city_district_fias_id: Nullable<string>;
    city_district_kladr_id: Nullable<string>;
    city_district_type: Nullable<string>;
    city_district_type_full: Nullable<string>;
    city_district_with_type: Nullable<string>;
    city_fias_id: Nullable<string>;
    city_kladr_id: Nullable<string>;
    city_type: Nullable<string>;
    city_type_full: Nullable<string>;
    city_with_type: Nullable<string>;
    country: string;
    country_iso_code: string;
    fias_id: string;
    fias_level: string;
    flat: Nullable<string>;
    flat_area: null;
    flat_price: null;
    flat_type: Nullable<string>;
    flat_type_full: Nullable<string>;
    geo_lat: Nullable<string>;
    geo_lon: Nullable<string>;
    geoname_id: Nullable<string>;
    history_values: Nullable<string[]>;
    house: Nullable<string>;
    house_fias_id: Nullable<string>;
    house_kladr_id: Nullable<string>;
    house_type: Nullable<string>;
    house_type_full: Nullable<string>;
    kladr_id: string;
    okato: Nullable<string>;
    oktmo: Nullable<string>;
    postal_box: Nullable<string>;
    postal_code: Nullable<string>;
    qc: null;
    qc_complete: null;
    qc_geo: Nullable<'0' | '1' | '2' | '3' | '4' | '5'>;
    qc_house: null;
    region: string;
    region_fias_id: string;
    region_kladr_id: string;
    region_type: string;
    region_type_full: string;
    region_with_type: string;
    settlement: Nullable<string>;
    settlement_fias_id: Nullable<string>;
    settlement_kladr_id: Nullable<string>;
    settlement_type: Nullable<string>;
    settlement_type_full: Nullable<string>;
    settlement_with_type: Nullable<string>;
    source: Nullable<string>;
    square_meter_price: null;
    street: Nullable<string>;
    street_fias_id: Nullable<string>;
    street_kladr_id: Nullable<string>;
    street_type: Nullable<string>;
    street_type_full: Nullable<string>;
    street_with_type: Nullable<string>;
    tax_office: Nullable<string>;
    tax_office_legal: Nullable<string>;
    timezone: Nullable<string>;
    unparsed_parts: null;
    fias_code: string;
    region_iso_code: string;
    fias_actuality_state: string;
    metro: Nullable<AddressMetro[]>;
  }