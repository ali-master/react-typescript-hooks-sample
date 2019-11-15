/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */
export const csValueAndKey = (val: string | boolean, key: string) => val && val !== true && `${val} ${key}`;

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */
export const csKeyOnly = (val: string | boolean, key: string) => val && key;

/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */
export const csKeyOrValueAndKey = (val: string | boolean, key: string) => val && (val === true ? key : `${val} ${key}`);

/**
 * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
 * In this case, only the class "justified" is used, ignoring the "aligned" class.
 * @param {*} val The value of the "textAlign" prop
 *
 * @example
 * <Container textAlign='justified' />
 * <div class="ui justified container"></div>
 *
 * @example
 * <Container textAlign='left' />
 * <div class="ui left aligned container"></div>
 */
export const csTextAlignProp = (val: string) => (val === "justified" ? "justified" : csValueAndKey(val, "aligned"));
