/**
 * Check Iranian National-id is valid or not
 */
class IranianNationalId {
	private nidRegexp = /^\d{10}$/;
	/**
	 * Check the iranian national id is valid or not
	 *
	 * @param {string} nationalId
	 * @returns {boolean}
	 */
	validate(nationalId?: string): boolean | null | undefined {
		if (!nationalId) {
			return;
		}

		if (nationalId) {
			if (!nationalId.match(this.nidRegexp)) {
				return false;
			}

			nationalId = ("0000" + nationalId).substr(nationalId.length + 4 - 10);
			if (Number(nationalId.substr(3, 6)) === 0) {
				return false;
			}

			const lastNumber = Number(nationalId.substr(9, 1));

			let sum = 0;
			for (let i = 0; i < 9; i++) {
				sum += Number(nationalId.substr(i, 1)) * (10 - i);
			}
			sum = sum % 11;

			return (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum);
		}

		return null;
	}
}

/**
 * Validate iranian bank's card number(bank card id)
 */
class BankNumberValidator {
	/**
	 * Check the card number is valid or not
	 *
	 * @param {string} digits
	 * @returns {boolean}
	 */
	validate(digits?: string): boolean | undefined {
		if (!digits) {
			return;
		}

		const size: number = digits.length;
		if (size < 16 || Number(digits.substr(1, 10)) === 0 || Number(digits.substr(10, 6)) === 0) {
			return false;
		}

		let sum = 0;
		let even, subDigit;
		for (let i = 0; i < 16; i++) {
			even = i % 2 === 0 ? 2 : 1;
			subDigit = Number(digits.substr(i, 1)) * even;
			sum += subDigit > 9 ? subDigit - 9 : subDigit;
		}
		return sum % 10 === 0;
	}
}

export const checkNationalId = new IranianNationalId();
export const bankNumberValidator = new BankNumberValidator();
