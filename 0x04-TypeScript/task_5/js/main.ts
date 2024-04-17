interface MajorCredits {
	credits: number;
	__majorCreditBrand: any;
}

interface MinorCredits {
	credits: number;
	__minorCreditBrand: any;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
	return { credits: subject1 + subject2, __majorCreditBrand: 'majorCredit' };
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
	return { credits: subject1 + subject2, __minorCreditBrand: 'minorCredit' };
}
