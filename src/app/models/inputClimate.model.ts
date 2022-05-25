export class InputClimate {
  /**
   * Record ID
   */
  id?: any;

  /**
   * Room number
   */
  roomNo?: string;

  /**
   * Zone number
   */
  zoneNo?: number;

  /**
   * Humidity. Valid values are between 1-6
   */
  humidity?: number;

  /**
   * Air quality. Valid values are between 1-6
   */
  airQuality?: number;

  /**
   * Temperature. Valid values are between 1-6
   */
  temperature?: number;

  /**
   * Gender
   */
  gender?: '' | 'M' | 'F' | 'Non-binary';
}
